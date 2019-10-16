import { Css, send, flattenContent, isarray, slug } from "../../../fachwerk.js";

export default {
  mixins: [Css],
  props: {
    content: { default: "", type: [String, Array] },
    edit: { default: "hide", type: String },
    menu: { default: "hide", type: String },
    type: { default: "document", type: String },
    title: { default: "Fachwerk", type: String },
    home: { default: "", type: String },
    theme: { default: "light", type: String },
  },
  data: () => ({
    currentContent: "",
    currentEdit: false,
    currentMenu: false,
    showEdit: true,
    showMenu: true,
    currentType: "document",
    grid: false
  }),
  methods: {
    send
  },
  computed: {
    saveId() {
      return slug(this.title);
    }
  },
  mounted() {
    this.$watch(
      "content",
      content =>
        (this.currentContent = isarray(content)
          ? flattenContent(content)
          : content),
      {
        immediate: true
      }
    );
    
    this.currentEdit = this.edit == "show";
    this.currentMenu = this.menu == "show";
    this.showEdit = this.edit !== "none";
    this.showMenu = this.menu !== "none"
    this.currentType = this.type;

    this.$global.$on("menu", () => {
      this.currentMenu = !this.currentMenu;
    });
    this.$global.$on("edit", () => {
      this.currentEdit = !this.currentEdit;
      window.scrollTo(0, 0);
    });
    this.$global.$on("type", () => {
      this.currentType =
        this.currentType === "document" ? "slides" : "document";
    });
  },
  template: `
    <f-theme :theme="theme" class="grid" :style="{'--cols': currentEdit ? '1fr 1fr' : '1fr', '--gap': 0}">
      <div
        v-if="currentEdit"
        class="editor"
      >
        <f-editor-header v-model="currentContent" :content="content" :saveId="saveId" />
        <f-advanced-editor v-model="currentContent" />
      </div>
      <div
        class="grid"
        :style="{'--cols': currentMenu ? '250px 1fr' : '1fr', '--gap': 0}"
        style="position: relative;"
      >
        <f-menu
          v-if="currentMenu"
          :menu="currentMenu"
          :content="currentContent"
        />
        <f-content
          :type="currentType"
          :content="currentContent"
          :grid="grid"
        />
        <f-content-header
          :type="currentType"
          :edit="currentEdit"
          :showEdit="showEdit"
          :menu="currentMenu"
          :showMenu="showMenu"
          :content="content"
          :saveId="saveId"
          :home="home"
        />
      </div>
      <!--pre style="position: fixed; bottom: 0; right: var(--base2);">
currentEdit: {{ currentEdit }}
currentMenu: {{ currentMenu }}
currentType: {{ currentType }}
gridStyle: {{ gridStyle }}</pre-->
      <portal-target name="overlay" style="z-index: 10000" />
      <f-keyboard alt character="e" @keydown="currentEdit = !currentEdit" />
      <f-keyboard alt character="t" @keydown="currentType = currentType == 'document' ? 'slides' : 'document'" />
      <f-keyboard v-if="currentEdit" alt character="s" @keydown="send('save')" />
      <f-keyboard alt character="left" @keydown="send('prev')" />
      <f-keyboard alt character="right" @keydown="send('next')" />
      <f-keyboard v-if="!currentEdit" character="left" @keydown="send('prev')" />
      <f-keyboard v-if="!currentEdit" character="right" @keydown="send('next')" />
      <f-keyboard alt character="g" @keydown="grid = !grid" />
    </f-theme>
    `,
  css: `
    .editor {
      position: sticky;
      top: 0;
      height: 100vh;
      --advanced-editor-height: calc(100vh - var(--base6));
    }
    @media (max-width: 800px) {
      .editor {
        position: static;
        height: 50vh;
        --advanced-editor-height: calc(50vh - var(--base6));
      }
    }
    `
};
