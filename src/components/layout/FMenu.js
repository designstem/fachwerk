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
      position: absolute;
      z-index: 100000;
      left: calc(var(--base) * 1.5);
      top: calc(var(--base) * 1.5);
      cursor: pointer;
    "
  >
    <a slot="button" class="quaternary" style="padding: 0 4px"><f-menu-icon /></a>
    <slot />
  </f-sidebar>
  `
};
