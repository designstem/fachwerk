export default {
  tag: "Layout",
  description: `
Vertical separator line
`,
  example: `
<f-vr/>  
  `,
  props: { width: { default: 3 } },
  template: `
    <div :style="{
      display: 'flex',
      width: 0,
      borderRight: width + 'px solid var(--primary)'
    }">
    &nbsp;
    </div>
  `
};