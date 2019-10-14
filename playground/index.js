// import { fachwerk } from "../src/fachwerk.js";

// fachwerk({
//   editor: "show",
//   menu: "none",
//   type: "document"
// });

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
} from "../fachwerk.js";

import FAdvancedEditor2 from "../src/components/framework/FAdvancedEditor2.js";

let sampleContent2 = `   
| 1 1
| 2 3   

# Hello

-

<f-card />

-

<f-card />

---

| padding: 0
| gap: 0
| 1 2
| 1 3

<aside>

Hello

</aside>

<aside>

Hello

</aside>

<aside>

Hello

</aside>

-

<f-card>

## Hello

What is going on here?

I do not know

</f-card>

-

<f-card>

## Hello

What is going on here?

I do not know

</f-card>

---

<f-content-example2 src="./example.md" />

---

| section: First section
| theme: dark

### Hi

Hello world for creating interactive learning materials in the browser. Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components.


-

for creating interactive learning materials in the browser. Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components.


---

### Hi

Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components. Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components. Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components. Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components.

---

| section: Second section
| background: yellow

Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components. Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components. Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components. Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components.
`;

let sampleContent = `
| background: red
| cols: 1fr 2fr
| rows: auto
| height: 75vh

<f-image src="../images/example.jpg" />

-

# Selline lugu

Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components. Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components. Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components. Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components. Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components. Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components. Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components. Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components.
Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components. Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components. Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components. Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components.
Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components. Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components. Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components. Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components.

---

| background: ../images/example.jpg
| theme: dark

a

-

b

---

| background: #aaa

ab

`;

const FContentExample2 = {
  props: {
    src: { default: "", type: String }
  },
  data: () => ({
    currentContent: ""
  }),
  template: `
  <f-fetch :src="src" @value="content => currentContent = content">
    <div class="grid" style="
      --cols: 1fr 1fr;
      box-shadow: 0 0 5px 0 rgba(0,0,0,0.1);
      align-items: stretch;
    ">
      <f-advanced-editor2
        v-model="currentContent"
        style="background: var(--paleblue)"
      />
      <f-content2
        :content="currentContent"
        style="height: 100%"
      />
      
    </div>
  </f-fetch>
  `
};

const FContentEditor2 = {
  props: {
    edit: { default: "hide", type: String },
    menu: { default: "hide", type: String },
    type: { default: "document", type: String }
  },
  data: () => ({
    currentContent: "",
    currentEdit: true,
    currentMenu: false,
    currentType: "slides"
  }),
  mounted() {
    this.currentContent = sampleContent2;
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
        <f-advanced-editor2
          v-model="currentContent"
          style="--advanced-editor-height: calc(100vh - var(--base6))"
        />
      </div>
      <f-menubar2
        :content="currentContent"
        :menu="currentMenu"
        :edit="currentEdit"
        :type="currentType"
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
    menu: { default: false, type: Boolean },
    edit: { default: false, type: Boolean },
    type: { default: "document", type: String },
    content: { default: "", type: String }
  },
  computed: {
    hasMenuContent() {
      return parseContent(this.content).filter(c => c.chapter || c.section)
        .length;
    },
    iconComponent() {
      if (this.type == "slides") {
        return "f-document-icon";
      }
      return "f-slides-icon";
    }
  },
  template: `
    <div style="
      height: 100vh;
      padding: var(--base) 0;
      background: var(--lightestgray);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
    ">
        <div>
        <a
          class="quaternary"
          @click="$global.$emit('edit')"
        >
          &nbsp;<f-editor-icon :style="{
            '--icon-stroke': edit ? 'var(--blue)' : ''}
          "/>
        </a>
        <p />
        <a
          class="quaternary"
          @click="$global.$emit('type')"
        >
          &nbsp;<component :is="iconComponent" />&nbsp;
        </a>
      </div>
      <a
        class="quaternary"
        @click="$global.$emit('menu')"
      >
        <f-menu-icon
          :style="{
            '--icon-stroke': menu ? 'var(--blue)' : '',
            opacity: hasMenuContent ? 1 : 0.2
          }
        "/>
      </a>
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
    this.$global.$on("section", section => (this.currentSection = section));
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
      <a class="quaternary" @click="$global.$emit('edit')"><f-close-icon /></a>
      &nbsp;
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
      justify-content: flex-end;
    ">
      <div v-if="type == 'slides' && currentContent.length > 1" style="display: flex;">
        <a class="quaternary" style="padding: 0 4px" @click="prev" ><f-leftarrow-icon /></a>
        <a class="quaternary" style="padding: 0 4px" @click="next" ><f-rightarrow-icon /></a>
      </div>
    </div>
    `
};

const FContent2 = {
  mixins: [Css],
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
  },
  methods: {
    slug,
    gridStyle(slide) {
      return {
        display: "grid",
        gridTemplateColumns: slide.cols
          ? slide.cols
          : "repeat(" + slide.colCount + ", 1fr)",
        gridTemplateRows: slide.rows
          ? slide.rows
          : "repeat(" + (slide.rowCount - 1) + ", auto) 1fr",
        gridTemplateAreas: slide.areas,
        gridGap: slide.gap ? slide.gap : "var(--base3)"
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
    <div>
      <f-theme
        v-if="type == 'slides' ? i == currentIndex : true"
        v-for="(slide,i) in currentContent"
        :key="i"
        :id="slide.section ? slug(slide.section) : 'id-' + i"
        :theme="slide.theme ? slide.theme : ''"
        :style="{
          border: '4px solid orange',
          height: '100%'
        }"
      ><div :style="{
          border: '4px solid blue',
          ...backgroundStyle(slide),
          justifyContent: 'center',
          border: '4px solid red',
          textAlign: 'center',
      }">
        <div :style="{
          ...gridStyle(slide),
          textAlign: 'left',
          margin: '0 auto',
          border: '4px solid green',
          padding: slide.padding ? slide.padding : 'var(--content-padding2)',
          maxWidth: type == 'document' ? 'var(--content-max-width, 900px)' : '100%',
          minHeight: slide.height ? slide.height : type == 'slides' ? '100vh' : 'auto',
        }">
          <f-markdown
            v-for="(contentCell, j) in slide.content"
            :key="j"
            :content="contentCell"
            class="cell"
            :style="{
              border: '4px solid blue',
              '--base': type == 'slides' ? '11px' : '8px',
              gridArea: 'a' + (j + 1)
            }"
          />
        </div>
          </div>
      </f-theme>
    </div>
    `,
  cssprops: {
    "--content-padding2": {
      default: "var(--base4)",
      description: "Content height"
    }
  },
  css: `
    aside {
      padding: calc(var(--content-padding2) / 2) var(--content-padding2);
      background: purple;
    }
    aside:only-child {
      padding: var(--content-padding2);
      height: 100%;
    }
    .cell *:only-child, .cell *:last-child {
      margin-bottom: 0;
    }
    `
};

Vue.component("FAdvancedEditor2", FAdvancedEditor2);

Vue.component("FContentExample2", FContentExample2);
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
