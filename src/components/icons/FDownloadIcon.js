export default {
  description: `
Download icon.
  
<f-download-icon />

<p />
  `,
  template: `
  <f-arrow-icon rotation="90" v-slot="{ size }">
  <f-line
    x1="0"
    :y1="size - 1"
    :x2="size"
    :y2="size  - 1"
    stroke-width="2"
  />
  </f-arrow-icon>
  `
};
