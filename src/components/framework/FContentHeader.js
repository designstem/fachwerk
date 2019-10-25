import {
  Vue,
  components,
  parseContent,
  send,
  isimageurl,
  color,
  slug,
  store,
  Css
} from "../../../fachwerk.js";

export default {
  props: {
    content: { default: "", type: String },
    edit: { default: false, type: [String, Boolean] },
    showEdit: { default: true, type: [String, Boolean] },
    menu: { default: false, type: [String, Boolean] },
    showMenu: { default: true, type: [String, Boolean] },
    type: { default: "document", type: String },
    typebutton: { default: "show", type: String },
    home: { default: "", type: String },
    saveId: { default: "fachwerk", type: String }
  },
  data: () => ({ currentIndex: 0 }),
  computed: {
    currentContent() {
      return parseContent(this.content);
    },
    iconComponent() {
      if (this.type == "slides") {
        return "f-document-icon";
      }
      return "f-slides-icon";
    }
  },
  methods: {
    first() {
      this.currentIndex = 0;
      this.$global.$emit("index", this.currentIndex);
      window.scrollTo(0, 0);
    },
    last() {
      this.currentIndex = this.currentContent.length - 1;
      this.$global.$emit("index", index);
      window.scrollTo(0, 0);
    },
    prev() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.$global.$emit("index", this.currentIndex);
        window.scrollTo(0, 0);
      }
    },
    next() {
      if (this.currentIndex < this.currentContent.length - 1) {
        this.currentIndex++;
        this.$global.$emit("index", this.currentIndex);
        window.scrollTo(0, 0);
      }
    },
    goto(id) {
      if (typeof id === "string") {
        const index = this.currentContent.findIndex(
          slide => slide.section === id || slide.id === id
        );
        if (index > -1) {
          this.currentIndex = index;
          window.location.hash = slug(id);
        }
      } else {
        this.currentIndex = id;
        window.location.hash = "id-" + i;
      }
      this.$global.$emit("index", this.currentIndex);
      window.scrollTo(0, 0);
    }
  },
  mounted() {
    this.$global.$on("next", () => this.next());
    this.$global.$on("prev", () => this.prev());
    this.$global.$on("first", () => this.first());
    this.$global.$on("last", () => this.last());
    this.$global.$on("goto", id => this.goto(id));
    this.$global.$on("section", section => this.goto(section));

    // Get the current index from local storage

    const storedCurrentIndex = store.get(this.saveId + ".index");

    // If the content is not empty and the stored index
    // matches some page in the content, update the index

    this.$watch(
      "currentContent",
      currentContent => {
        if (
          this.currentContent[0] !== "" &&
          storedCurrentIndex <= this.currentContent.length
        ) {
          this.currentIndex = storedCurrentIndex;
        }
      },
      { immediate: true }
    );

    this.$watch(
      "currentIndex",
      currentIndex => {
        // Pass the current index to content renderer as an event
 
        this.$global.$emit("index", currentIndex);

        // Update the current index in local storage

        store.set(this.saveId + ".index", currentIndex);

        // Pass the current menu item to the menu

        const currentSlide = this.currentContent[currentIndex];
        if (currentSlide && currentSlide.section) {
          this.$global.$emit("section", currentSlide.section);
        }
      },
      { immediate: true }
    );
  },
  template: `
    <div style="
      position: absolute;
      width: 100%;
      height: var(--base6);
      padding: 0 var(--base2);
      display: flex;
      align-items: center;
      justify-content: space-between;
    ">
      <div>
        <a
          v-if="showEdit"
          class="quaternary"
          @click="$global.$emit('edit')"
          title="Edit content [alt + e]"
        >
          <f-edit-icon :style="{
            '--icon-stroke': edit ? 'var(--blue)' : ''}
          "/>
        </a>
        <a
          v-if="home"
          class="quaternary"
          :href="home"
          style="margin-left: var(--base2)"
          title="Go back"
        >
          <f-home-icon />
        </a>
        <a
          v-if="showMenu && currentContent.filter(c => c.chapter || c.section).length"
          class="quaternary"
          @click="$global.$emit('menu')"
          title="Show menu [alt + m]"
        >
          <f-menu-icon
            :style="{
              '--icon-stroke': menu ? 'var(--blue)' : '',
            }
          "/>
        </a>
      </div>
      <div style="display: flex">
        <div
          v-if="type == 'slides' && currentContent.length > 1"
          style="display: flex;"
        >
          <a class="quaternary" style="padding: 0 4px" @click="prev" ><f-leftarrow-icon /></a>
          <a class="quaternary" style="padding: 0 4px" @click="next" ><f-rightarrow-icon /></a>
        </div>
        <a
          v-if="typebutton == 'show'"
          :style="{ marginLeft: typebutton == 'show' ? 'var(--base2)' : ''}"
          class="quaternary"
          @click="$global.$emit('type', type == 'document' ? 'slides' : 'document')"
          :title="(type == 'document' ? 'Go to slide mode' : 'Go to document mode') + ' [alt + t]'"
        >
          <component :is="iconComponent" />
        </a>
      </div>
    </div>
    `
};
