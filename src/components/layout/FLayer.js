import { Css } from "../../../fachwerk.js";

export default {
  mixins: [Css],
  template: `
  <div>
    <portal-target
      multiple
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
        right: var(--base);
        display: flex;
      "
    />
  </div>`,
  css: `
  .topleft > * {
    margin-right: var(--base);
  }
  .topright > * {
    margin-left: var(--base);
  }
  `

};
