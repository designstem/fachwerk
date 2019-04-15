export default {
  description: `
Displays speaker / teacher notes.

<f-notes>

#### A Note

> Here is a speaker note

</f-notes>
  `,
  // @TODO: Fix top calculation
  template: `
  <f-sidebar
    width="33vw"
    style="
      position: fixed;
      z-index: 100000;
      right: 90px;
      top: 10px;
    "
  >
    <a slot="button" class="quaternary">Notes</a>
    <slot />
  </f-sidebar>
  `
};
