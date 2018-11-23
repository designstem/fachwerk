export default {
  tag: "Layout",
  description: `
Horizontal separator line
`,
  example: `
<f-hr/>  
  `,
  props: { width: { default: 3 } },
  template: `
    <div :style="{
      height: 0,
      borderBottom: width + 'px solid var(--primary)'
    }">
    &nbsp;
    </div>
  `
};
