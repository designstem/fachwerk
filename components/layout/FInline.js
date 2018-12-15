import Css from "../Css.js";

export default {
  mixins: [Css],
  tag: "Layout",
  description: `
Inline layout component.
`,
  example: `
<f-inline>
  <button>Button 1</button>
  <button>Button 2</button>
</f-inline>
  `,
  template: `
  <div class="f-inline">
    <slot />
  </div>
  `,
  css: `
  .f-inline {
    display: flex;
  }
  .f-inline > * {
    margin: 0 var(--base) 0 0;
  }
  @media (max-width: 800px) {
    .f-inline {
      display: block;
    }
    .f-inline > * {
      margin: 0 0 var(--base);
    }
  }
  `
};
