import TwoPolygon from "./TwoPolygon.js"
import { cx, cy } from "../utils.js";

export default {
  name: "TwoRegularPolygon",
  example: `
<Anime :to="16">
  <TwoScene slot-scope="{value}">
    <TwoRegularPolygon :count="value" />
  </TwoScene>
</Anime>
  `,
  components: { TwoPolygon },
  props: { count: { default: 6 }, radius: { default: 1 } },
  computed: {
    points() {
      return Array.from({
        length: 1000
      })
        .slice(0, this.count)
        .map((p, i) => ({
          x: cx((360 / this.count) * i - 180, this.radius),
          y: cy((360 / this.count) * i - 180, this.radius)
        }));
    }
  },
  template: `
  <g>
    <TwoPolygon :points="points" />
  </g>
  `
};
