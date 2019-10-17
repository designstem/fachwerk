export default {
  description: `
Displays inline notes in a sidebar. Notes button is in the bottom of the page.

<f-notes title="Sample notes">
  Sample notes content
</f-notes>
  `,
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
      @click.prevent="open = true"
      style="
        position: absolute;
        right: var(--base);
        bottom: var(--base);
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
        @click="open = false"
        >
          <f-close-icon />
        </a>
        <slot />
      </div>
    </f-overlay>
  </span>
  `
}
