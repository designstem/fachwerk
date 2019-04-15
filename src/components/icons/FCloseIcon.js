import { color } from "../../../fachwerk.js";

export default {
  description: `
Close icon.
  
<f-close-icon />

<p />
  `,
  data: () => ({
    size: 16
  }),
  methods: { color },
  template: `
  <f-artboard :width="size" :height="size">
    <f-line
      :x1="3"
      :y1="3"
      :x2="size - 3"
      :y2="size - 3"
      :stroke="color('primary')"
      stroke-width="2"
    />
    <f-line
      :x1="size - 3"
      :y1="3"
      :x2="3"
      :y2="size - 3"
      :stroke="color('primary')"
      stroke-width="2"
    />
  </f-artboard>
  `
};
