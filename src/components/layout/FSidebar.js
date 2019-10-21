export default {
  description: `
Displays content in a sidebar

<f-sidebar src="../README.md">
../README.md in a sidebar
</f-sidebar>
  `,
  props: {
    src: { default: "", type: String },
    title: { default: "Sidebar", type: String },
    size: { default: 'narrow', type: String }
  },
  data: () => ({
    open: false
  }),
  template: `
  <span>
    <span
      @click.prevent="open = true"
      style="
        border-bottom: 1px dotted var(--gray);
        cursor: alias;
      "
    >
      <slot>
        <a style="
          color: var(--blue);
        "
        >{{ title }}</a>
      </slot>
    </span>
    <f-overlay :size="size" v-if="open">
      <a class="quaternary" style="
        position: absolute;
        top: var(--base);
        right: var(--base);
        z-index: 1000;
      "
      @click="open = false"
      >
        <f-close-icon />
      </a>
      <f-fetch v-if="src" :src="src" v-slot="{ value: content }">
        <f-content type="document" theme="light" style="--content-padding: var(--base3)" :content="content" />
      </f-fetch>
      <div v-if="!src" style="padding: var(--base3)">
        <slot name="content" />
      </div>
    </f-overlay>
  </span>
  `
}
