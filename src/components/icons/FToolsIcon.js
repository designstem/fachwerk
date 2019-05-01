import { color } from "../../../fachwerk.js";

export default {
description: `
Tools icon.
  
<f-tools-icon />

<p />
  `,
  data: () => ({ size: 20 }),
  methods: { color },
  template: `
  <f-artboard :width="size" :height="size">
    <f-circle 
      :x="size / 2"
      :y="size / 2"
      :r="size / 2 - 1"
      stroke="var(--icon-stroke)"
      stroke-width="2"
      fill="var(--icon-fill)"
    />
    <f-circle 
      :x="size / 2"
      :y="size / 2"
      :r="size / 6"
      stroke="var(--icon-stroke)"
      stroke-width="2"
      fill="var(--icon-fill)"
    />
  </f-artboard>
  `
};
