import { Css } from '../../mixins.js'

export default {
  mixins: [Css],
  description: `
Inline layout component.

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
    margin-bottom: var(--base2);
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
