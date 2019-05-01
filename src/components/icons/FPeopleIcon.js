import { color } from "../../../fachwerk.js";

export default {
  description: `
People icon.
  
<f-people-icon />

<p />
  `,
  props: {
    rotation: { default: 0, type: [Number, String] },
    description: "Rotation angle in degrees"
  },
  data: () => ({ size: 20 }),
  methods: { color },
  template: `
  <f-artboard :width="size" :height="size">
    <f-circle
      :x="size / 2"
      :y="size"
      :r="size / 2.2"
      stroke="var(--icon-stroke)"
      stroke-width="2"
      :fill="color('white')"
    />
    <f-circle
      :x="size / 2"
      :y="size / 4 + 3"
      :r="size / 3.5"
      stroke="var(--icon-stroke)"
      stroke-width="2"
      :fill="color('white')"
    />
    <f-line
      x1="1"
      :y1="size - 1"
      :x2="size - 1"
      :y2="size - 1"
      stroke-width="2"
    />

  </f-artboard>
  `
};
