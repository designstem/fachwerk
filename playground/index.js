// import { fachwerk } from "../src/fachwerk.js";

// fachwerk({
//   editor: "show",
//   menu: "none",
//   type: "document"
// });

const sampleContent = `        
| section: First section
| theme: dark

Hello world

-

for creating interactive learning materials in the browser. Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components.


---

bla

---

| section: Second section
| background: yellow

Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components. Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components. Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components. Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components.
`;

import {
  Vue,
  components,
  parseContent,
  send,
  isimageurl,
  color,
  slug,
  store
} from "../fachwerk.js";

const FContentEditor2 = {
  props: {
    edit: { default: "hide", type: String },
    menu: { default: "hide", type: String },
    type: { default: "document", type: String }
  },
  data: () => ({
    currentContent: "",
    currentEdit: true,
    currentMenu: true,
    currentType: "document"
  }),
  mounted() {
    this.currentContent = sampleContent;
    this.$global.$on("menu", () => {
      this.currentMenu = !this.currentMenu;
    });
    this.$global.$on("edit", () => {
      this.currentEdit = !this.currentEdit;
    });
    this.$global.$on("type", () => {
      this.currentType =
        this.currentType === "document" ? "slides" : "document";
    });
  },
  computed: {
    gridStyle() {
      const editCol = this.currentEdit ? "1fr" : "";
      const menubarCol = "55px";
      const menuCol = this.currentMenu ? "200px" : "";
      const contentCol = "1fr";
      return [editCol, menubarCol, menuCol, contentCol].join(" ");
    }
  },
  template: `
    <div class="grid" :style="{'--cols': gridStyle, '--gap': 0}">
      <div
        v-if="currentEdit"
        style="position: sticky; top: 0; height: 100vh;"
      >
        <f-editor-header2 v-model="currentContent" />
        <f-advanced-editor v-model="currentContent" />
      </div>
      <f-menubar2
        :content="currentContent"
        style="position: sticky; top: 0;"
      />
      <f-menu2
        v-if="currentMenu"
        :menu="currentMenu"
        :content="currentContent"
        style="position: sticky; top: 0;"
      />
      <div style="position: relative">
        <f-content2
          :type="currentType"
          :content="currentContent"
        />
        <f-content-header2
          :type="currentType"
          :edit="currentEdit"
          :content="currentContent"
        />
      </div>
      <!--pre style="position: fixed; bottom: 0; right: var(--base2);">
currentEdit: {{ currentEdit }}
currentMenu: {{ currentMenu }}
currentType: {{ currentType }}
gridStyle: {{ gridStyle }}</pre-->
    </div>
    `
};

const FMenubar2 = {
  props: {
    menu: { default: false, type: Boolean }
  },
  template: `
    <div style="
      height: 100vh;
      padding: var(--base) 0;
      background: var(--lightestgray);
      display: flex;
      justify-content: center;
    ">
      <div>
        <a
          class="quaternary"
          @click="$global.$emit('menu')"
        >
          <f-menu-icon />
        </a>
        <br>
        <br>
        <a
          class="quaternary"
          @click="$global.$emit('type')"
        >
          &nbsp;Ty
        </a>
        <br>
        <br>
        <a
          class="quaternary"
          @click="$global.$emit('edit')"
        >
          &nbsp;Ed
        </a>
      </div>
    </div>
    `
};

const FMenu2 = {
  props: {
    content: { default: "", type: String },
    menu: { default: false, type: Boolean }
  },
  data: () => ({ currentSection: null }),
  computed: {
    currentContent() {
      return parseContent(this.content).filter(c => c.chapter || c.section);
    }
  },
  mounted() {
    this.$global.$on("section", section => this.currentSection = section);
  },
  template: `
    <div v-if="menu" style="height: 100vh; padding: var(--base2) 0" >
      <div v-for="(c, i) in currentContent">
        <h5
          v-if="c.chapter"
          style="
            padding: var(--base) var(--base) var(--base) var(--base2);
            margin: var(--base2) 0 0 0;
          "
        >
          {{ c.chapter }}
        </h5>
        <h5
          style="
            display: block;
            cursor: pointer;
            padding-left: 1ch;
            margin: 0;
            padding: var(--base) var(--base) var(--base) var(--base3);
            font-Weight: normal;
          "
          @click="currentSection = c.section; $global.$emit('section', c.section)"
        >
          <span :style="{
            color: c.section == currentSection ? '' : 'var(--gray)',
            borderBottom: c.section == currentSection ? '2px solid var(--blue)' : '',
          }">
          {{ c.section }}
          </span>
        </h5>
      </div>
    </div>
    `
};

const FEditorHeader2 = {
  props: {
    value: { default: "", type: String }
  },
  template: `
    <div style="
      height: var(--base6);
      padding: 0 var(--base);
      background: var(--paleblue);
      display: flex;
      align-items: center;
      justify-content: space-between;
    ">
      &nbsp;
      <a class="quaternary" @click="$global.$emit('edit')"><f-close-icon /></a>
    </div>
    `
};

const FPager2 = {
  methods: { send },
  template: `
  <div style="display: flex;">
    <a class="quaternary" style="padding: 0 4px" @click="send('prev')" ><f-leftarrow-icon /></a>
    <a class="quaternary" style="padding: 0 4px" @click="send('next')" ><f-rightarrow-icon /></a>
  </div>
  `
};

const FContentHeader2 = {
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
      justify-content: space-between;
    ">
      <pre>{{ currentIndex }}</pre>
      <div v-if="type == 'slides' && currentContent.length > 1" style="display: flex;">
        <a class="quaternary" style="padding: 0 4px" @click="prev" ><f-leftarrow-icon /></a>
        <a class="quaternary" style="padding: 0 4px" @click="next" ><f-rightarrow-icon /></a>
      </div>
    </div>
    `
};

const FContent2 = {
  props: {
    content: { default: "", type: String },
    type: { default: "document", type: String }
  },
  data: () => ({
    currentIndex: 0
  }),
  computed: {
    currentContent() {
      return parseContent(this.content);
    }
  },methods: {
    slug,
    gridStyle(slide) {
      return {
        display: "grid",
        gridTemplateColumns: slide.cols
          ? slide.cols
          : "repeat(" + slide.colCount + ", 1fr)",
        gridTemplateRows: slide.rows
          ? slide.rows
          : "repeat(" + slide.rowCount + ", auto)",
        gridTemplateAreas: slide.areas,
        gridGap: slide.gap ? slide.gap : "var(--gap)"
      };
    },
    backgroundStyle(slide) {
      const tint = slide.tint ? slide.tint : 0.3;
      const background = slide.background
        ? isimageurl(slide.background)
          ? `linear-gradient(
                rgba(0, 0, 0, ${tint}),
                rgba(0, 0, 0, ${tint})
                ),
                  url(${slide.background})
              `
          : color(slide.background)
        : "";

      return {
        background,
        backgroundSize: slide.background ? "cover" : "",
        backgroundRepeat: slide.background ? "no-repeat" : ""
      };
    }
  },
  mounted() {
    this.$global.$on("index", index => (this.currentIndex = index));
  },
  template: `
    <f-theme
      theme="light"
      :style="{
        display: type == 'document' ? 'flex' : 'block',
        justifyContent: 'center'
      }"
    >
      <div>
        <div
          v-if="type == 'slides' ? i == currentIndex : true"
          v-for="(slide,i) in currentContent"
          :key="i"
          :id="slide.section ? slug(slide.section) : 'id-' + i"
          :theme="slide.theme ? slide.theme : ''"
          :style="{
            ...gridStyle(slide),
            ...backgroundStyle(slide),
            padding: 'var(--base5)',
            maxWidth: type == 'document' ? '800px' : '100%',
            minHeight: slide.height ? slide.height : type == 'slides' ? '100vh' : 'auto',
          }"
        >
          <f-markdown
            v-for="(contentCell, j) in slide.content"
            :key="j"
            :content="contentCell"
            :style="{
              '--base': type == 'slides' ? '11px' : '8px',
              gridArea: 'a' + (j + 1)
            }"
          />
        </div>
      </div>
    </f-theme>
    `
};

Vue.component("FContentEditor2", FContentEditor2);
Vue.component("FMenubar2", FMenubar2);
Vue.component("FMenu2", FMenu2);
Vue.component("FEditorHeader2", FEditorHeader2);
Vue.component("FContent2", FContent2);
Vue.component("FContentHeader2", FContentHeader2);
Vue.component("FPager2", FPager2);

export function fachwerk2(c = {}) {
  const config = {
    el: "#fachwerk",
    src: "./index.md",
    title: "Fachwerk",
    editor: "hide",
    menu: "hide",
    type: "document",
    theme: "light",
    style: {},
    components: {},
    utils: {},
    ...c
  };
  for (const name in components) {
    Vue.component(name, components[name]);
  }
  for (const name in config.components) {
    Vue.component(name, config.components[name]);
  }
  Vue.mixin({ methods: { ...config.utils } });

  Vue.config.productionTip = false;
  Vue.prototype.$global = new Vue({ data: { state: {} } });

  new Vue({
    el: config.el,
    data: {
      config
    },
    template: `
    <f-content-editor2
      :editor="config.editor"
      :menu="config.menu"
      :type="config.type"
    />
    `
  });
}

fachwerk2();
