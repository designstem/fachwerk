export default {
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
      @click="open = !open"
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
        top: var(--base2);
        right: var(--base2);
        z-index: 1000;
      "
      @click="open = !open"
      >
        <f-close-icon />
      </a>
      <f-fetch v-if="src" :src="src" v-slot="{ value: content }">
        <f-content type="document" theme="light" style="--content-padding: var(--base3)" :content="content" />
      </f-fetch>
      <div v-if="!src" style="padding: var(--base2)">
        <slot name="content" />
      </div>
    </f-overlay>
  </span>
  `
}
