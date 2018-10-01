import { cx, cy } from "../utils.js";

export default {
  name: "TwoPolygon",
  example: `
<TwoScene>
  <TwoPolygon
    fill="var(--color-red)"
    :points="[
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
    ]"
  />
</TwoScene>
  `,
  props: {
    points: { default: [] },
    fill: { default: "none" },
    stroke: { default: "var(--color-gray-dark)" }
  },
  computed: {
    svgPoints() {
      return this.points.map(({ x, y }) => `${x},${y}`).join(" ");
    }
  },
  template: `
    <polygon
      :points="svgPoints"
      :stroke="stroke"
      :fill="fill"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    `
};
