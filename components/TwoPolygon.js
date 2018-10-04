import { Object2D } from "./internal/two.js";

export default {
  mixins: [Object2D],
  name: "TwoPolygon",
  example: `
<TwoScene>
  <TwoGrid />
  <TwoPolygon
    fill="var(--color-red)"
    :points="[
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
    ]"
  />
  <TwoPolygon
    fill="var(--color-red)"
    :points="[
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
    ]"
    :position="{ x: 1, y: 1 }"
    :rotation="{ z: 45 }"
    :scale="{ x: 0.2, y: 0.2 }"
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
      :transform="transform"
    />
    `
};
