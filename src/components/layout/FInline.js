import { Css } from '../../../fachwerk.js'

export default {
  mixins: [Css],
  description: `
> Note: this component will be renamed to \`f-flex\`. \`f-inline\` will likely stay but will support the simpler use case.

Inline layout component based on [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox
).

<f-inline>
  <button>Button 1</button>
  <button>Button 2</button>
</f-inline>

By setting CSS variables you can adjust how the contents is layed out:

<f-inline style="
	--inline-gap: var(--base2);
	--inline-align: flex-start;
">
<div><f-icon /></div>
<div>

### Hello world

The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.

</div>
</f-inline>

You can also use \`<f-inline>\` to justify content:

<f-inline style="
	--inline-justify: space-between;
">
  <f-icon />
  <f-icon />
  <f-icon />
</f-inline>
  `,
  template: `
  <div class="f-inline">
    <slot />
  </div>
  `,
  cssprops: {
    "--inline-gap": {
      default: "var(--base)",
      description: "Gap between inline elements"
    },
    "--inline-justify": {
      default: "start",
      description: "Horizontal alignment on elements, use [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) values"
    },
    "--inline-align": {
      default: "center",
      description: "Vertical alignment on elements, use [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) values"
    }
  },
  css: `
  .f-inline {
    display: flex;
    justify-content: var(--inline-justify);
    align-items: var(--inline-align);
    margin-bottom: var(--base2);
  }
  .f-inline > * {
    margin: 0 var(--inline-gap) 0 0 !important;
  }
  .f-inline > *:last-child {
    margin: 0;
  }
  p .f-inline {
    margin-bottom: var(--base2);
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
