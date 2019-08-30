export default {
  props: {
    src: { default: "", type: String },
    title: { default: "Sidebar", type: String },
  },
  template: `
  <span>
    <slot>
      <a style="
        color: var(--blue);
        border-bottom: 1px dotted var(--blue);
        cursor: alias;"
      >{{ title }}</a>
    </slot>
    <f-overlay>
      <f-fetch :src="src" v-slot="{ value: content }">
        <f-content :content="content" />
      </f-fetch>
      <slot name="content" />
    </f-overlay>
  </span>
  `
}
