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
    type: { default: "document", type: String },
    saveId: { default: "fachwerk", type: String }
  },
  data: () => ({ currentIndex: 0 }),
  computed: {
    currentContent() {
      return parseContent(this.content);
    }
  },
  methods: {
    first() {
      this.currentIndex = 0;
      this.$global.$emit("index", this.currentIndex);
    },
    last() {
      this.currentIndex = this.currentContent.length - 1;
      this.$global.$emit("index", index);
    },
    prev() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.$global.$emit("index", this.currentIndex);
      }
    },
    next() {
      if (this.currentIndex < this.currentContent.length - 1) {
        this.currentIndex++;
        this.$global.$emit("index", this.currentIndex);
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
    }
  },
  mounted() {
    this.$global.$on("next", () => this.next());
    this.$global.$on("prev", () => this.prev());
    this.$global.$on("first", () => this.first());
    this.$global.$on("last", () => this.last());
    this.$global.$on("goto", id => this.goto(id));
    this.$global.$on("section", section => this.goto(section));

    this.$watch(
      "currentIndex",
      currentIndex => {
        const currentSlide = this.currentContent[currentIndex];
        if (currentSlide && currentSlide.section) {
          this.$global.$emit("section", currentSlide.section);
        }
        store.set(this.saveId + ".index", currentIndex);
      },
      { immediate: true }
    );
  },
  template: `
    <div style="
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      height: var(--base6);
      padding: 0 var(--base);
      display: flex;
      align-items: center;
      justify-content: flex-end;
    ">
      <div v-if="type == 'slides' && currentContent.length > 1" style="display: flex;">
        <a class="quaternary" style="padding: 0 4px" @click="prev" ><f-leftarrow-icon /></a>
        <a class="quaternary" style="padding: 0 4px" @click="next" ><f-rightarrow-icon /></a>
      </div>
    </div>
    `
};
