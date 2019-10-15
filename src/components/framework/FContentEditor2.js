import { Css, send, flattenContent, isarray, slug } from "../../../fachwerk.js";

export default {
  mixins: [Css],
  props: {
    content: { default: "", type: [String, Array] },
    edit: { default: "hide", type: String },
    menu: { default: "hide", type: String },
    type: { default: "document", type: String },
    title: { default: "Fachwerk", type: String }
  },
  data: () => ({
    currentContent: "",
    currentEdit: false,
    currentMenu: false,
    hideEdit: false,
    hideMenu: false,
    currentType: "document"
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
    this.currentEdit = this.edit == "show";
    this.currentMenu = this.menu == "show";
    this.hideEdit = this.edit == "none";
    this.hideMenu = this.menu == "none";
    this.currentType = this.type;
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
  template: `
    <div class="grid" :style="{'--cols': currentEdit ? '1fr 1fr' : '1fr', '--gap': 0}">
      <div
        v-if="currentEdit"
        class="editor"
      >
        <f-editor-header2 v-model="currentContent" :content="content" :saveId="saveId" />
        <f-advanced-editor2 v-model="currentContent" />
      </div>
      <div
        class="grid"
        :style="{'--cols': currentMenu ? '200px 1fr' : '1fr', '--gap': 0}"
        style="position: relative;"
      >
        <f-menu2
          v-if="currentMenu"
          :menu="currentMenu"
          :content="currentContent"
        />
        <f-content2
          :type="currentType"
          :content="currentContent"
        />
        <f-content-header2
          :type="currentType"
          :edit="currentEdit"
          :menu="currentMenu"
          :content="currentContent"
          :saveId="saveId"
        />
      </div>
      <!--pre style="position: fixed; bottom: 0; right: var(--base2);">
currentEdit: {{ currentEdit }}
currentMenu: {{ currentMenu }}
currentType: {{ currentType }}
gridStyle: {{ gridStyle }}</pre-->
      <f-keyboard alt character="e" @keydown="currentEdit = !currentEdit" />
      <f-keyboard alt character="t" @keydown="currentType = currentType == 'document' ? 'slides' : 'document'" />
      <f-keyboard v-if="currentEdit" alt character="s" @keydown="send('save')" />
      <f-keyboard alt character="left" @keydown="send('prev')" />
      <f-keyboard alt character="right" @keydown="send('next')" />
      <f-keyboard v-if="!currentEdit" character="left" @keydown="send('prev')" />
      <f-keyboard v-if="!currentEdit" character="right" @keydown="send('next')" />
    </div>
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
