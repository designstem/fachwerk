import { cx, cy } from "../utils.js";

export default {
  name: "TwoLine",
  description: `
**⚠️ Does not yet support 2D transformations.**
  `,
  example: `
<TwoScene>
  <TwoGrid />
  <TwoLine
    :points="[
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
    ]"
  />
</TwoScene>
  `,
  props: {
    opacity: { default: 1 },
    points: { default: [] },
    stroke: { default: "var(--color-gray-dark)" }
  },
  computed: {
    svgPoints() {
      return this.points.map(({ x, y }) => `${x},${y}`).join(" ");
    }
  },
  template: `
    <polyline
      :points="svgPoints"
      :stroke="stroke"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
      :opacity="opacity"
    />
    `
};
