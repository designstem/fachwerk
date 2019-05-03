import { Css } from "../../../fachwerk.js";

export default {
  mixins: [Css],
  description: `
Shows heading with an icon.

<f-icon-heading size="small">Some activity</f-icon-heading>

<f-icon-heading size="medium">Some activity</f-icon-heading>

<f-icon-heading size="large">Some activity</f-icon-heading>
`,
  props: {
    icon: { default: "activity", type: String, description: "Icon name" },
    size: { default: "medium", type: String, description: "Header size: `small`, `medium`, `large`" }
  },
  template: `
  <div class="f-icon-heading" style="display: flex; margin-bottom: var(--base2); align-items: flex-start;">
    <div style="margin-right: calc(var(--base) * 1.25);">
      <component
        :is="'f-' + icon + '-icon'" :size="size"
      />
    </div>
    <div>
      <h2 v-if="size == 'large'" style="margin: 1ch 0 0 0;"><slot /></h2>
      <h3 v-if="size == 'medium'" style="margin: 0.7ch 0 0 0;;"><slot /></h3>
      <h4 v-if="size == 'small'" style="margin: 0.3ch 0 0 0;;"><slot /></h4>
    </div>
  </div>
  `,
  css: `
    .f-icon-heading .f-svg {
      display: block;
    }
  `
}