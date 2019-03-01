export default {
  description: `
Displays speaker / teacher notes.

<f-notes>

#### A Note

> Here is a speaker note

</f-notes>
  `,
  template: `
  <f-sidebar
    width="33vw"
    style="
      position: fixed;
      z-index: 100000;
      right: var(--base2);
      top: var(--base2);
    "
  >
    <button slot="button">Notes</button>
    <slot />
  </f-sidebar>
  `
};
