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
    title="✍️Notes"
    width="33vw"
    style="
      position: fixed;
      z-index: 100000;
      right: var(--base3);
      top: var(--base3);
    "
  >
    <slot />
  <f-sidebar>
  `
};
