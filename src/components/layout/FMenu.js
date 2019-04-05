export default {
  description: `
Displays speaker / teacher notes.

<f-notes>

#### A Note

> Here is a speaker note

</f-notes>
  `,
  props: {
    src: { default: './menu.md', type: String },
  },
  template: `
  <f-sidebar
    :src="src"
    orientation="left"
    width="33vw"
    style="
      position: fixed;
      z-index: 100000;
      left: var(--base3);
      bottom: var(--base3);
    "
  >
    <button slot="button">≡</button>
    <slot />
  </f-sidebar>
  `
};
