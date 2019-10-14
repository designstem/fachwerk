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
  mixins: [Css],
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
    <div class="menubar">
      <a
        class="quaternary"
        @click="$global.$emit('edit')"
      >
        &nbsp;<f-editor-icon :style="{
          '--icon-stroke': edit ? 'var(--blue)' : ''}
        "/>
      </a>
      <a
        class="quaternary"
        @click="$global.$emit('type')"
      >
        &nbsp;<component :is="iconComponent" />&nbsp;
      </a>
      <div />
      <a
        class="quaternary"
        @click="$global.$emit('menu')"
      >
        <f-menu-icon2
          :style="{
            '--icon-stroke': menu ? 'var(--blue)' : '',
            opacity: hasMenuContent ? 1 : 0.2
          }
        "/>
      </a>
    </div>
    `,
    css: `
    .menubar {
      position: sticky;
      top: 0;
      width: 55px;
      height: 100vh;
      padding: var(--base) 0;
      background: var(--lightestgray);
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: auto auto 1fr auto;
      grid-gap: var(--base) 0;
      justify-content: center;
    }
    @media (max-width: 800px) {
      .menubar {
        position: static;
        top: inherit;
        width: 100%;
        height: var(--base6);
        padding: 0 var(--base);
        grid-template-columns: auto auto 1fr auto;
        grid-template-rows: auto;
        grid-gap: 0 var(--base);
        align-items: center;
      }
    }
    `
};