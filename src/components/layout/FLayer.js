import { Css } from "../../../fachwerk.js";

export default {
  mixins: [Css],
  template: `
  <div>
    <portal-target
      multiple
      class="topleft"
      name="topleft"
      style="
        position: absolute;
        top: var(--base);
        left: var(--base);
        display: flex;
      "
    />
    <portal-target
      class="topright"
      name="topright"
      multiple
      style="
        position: absolute;
        top: var(--base);
        right: var(--base2);
        display: flex;
      "
    />
    <portal-target
      multiple
      class="bottomleft"
      name="bottomleft"
      style="
        position: fixed;
        bottom: var(--base);
        left: var(--base);
        display: flex;
      "
    />
    <portal-target
      class="bottomright"
      name="bottomright"
      multiple
      style="
        position: fixed;
        bottom: var(--base);
        right: var(--base2);
        display: flex;
      "
    />
    <portal-target
      name="overlay"
    />
  </div>`,
  css: `
  .topleft > *, .bottomleft > * {
    margin-right: var(--base);
  }
  .topright > *, .bottomright > * {
    margin-left: var(--base);
  }
  `

};