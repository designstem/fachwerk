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
  <f-scene :width="size" :height="size">
    <f-circle 
      x="1"
      y="1"
      r="0.75"
      stroke="var(--icon-stroke)"
      stroke-width="2"
      fill="var(--icon-fill)"
    />
    <f-circle 
      x="-1"
      y="-1"
      r="0.75"
      stroke="var(--icon-stroke)"
      stroke-width="2"
      fill="var(--icon-fill)"
    />
    <f-box 
      x="-1"
      y="1"
      r="1.25"
      stroke="var(--icon-stroke)"
      stroke-width="2"
      fill="var(--icon-fill)"
    />
    <f-box 
      x="1"
      y="-1"
      r="1.25"
      stroke="var(--icon-stroke)"
      stroke-width="2"
      fill="var(--icon-fill)"
    />
  </f-scene>
  `
};
