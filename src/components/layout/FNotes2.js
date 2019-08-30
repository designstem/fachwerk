export default {
  props: {
    title: { default: "Teacher notes", type: String },
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
        position: absolute;
        right: var(--base2);
        bottom: var(--base2);
    ">
      <slot name="button">
        <a class="quaternary">{{ title }}</a>
      </slot>
    </span>
    <f-overlay :size="size" v-if="open">
      <div style="padding: var(--base2); position: relative;">
        <a class="quaternary" style="
          position: absolute;
          top: var(--base2);
          right: var(--base2);
        "
        @click="open = !open"
        >
          <f-close-icon />
        </a>
        <slot />
      </div>
    </f-overlay>
  </span>
  `
}
