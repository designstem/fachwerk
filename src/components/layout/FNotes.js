export default {
  description: `
Displays speaker / teacher notes.

<f-notes>

#### A Note

> Here is a speaker note

</f-notes>
  `,
  props: {
    title: { default: 'Teacher notes', type: String },
  },
  // @TODO: Fix top calculation
  template: `
  <f-sidebar
    width="33vw"
    style="
      position: absolute;
      z-index: 10000;
      right: 90px;
      top: 12px;
    "
  >
      <a slot="button" class="quaternary">{{ title }}</a>
    <slot />
  </f-sidebar>
  `
};
