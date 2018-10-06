import TwoPolygon from "./TwoPolygon.js"
import { cx, cy } from "../utils.js";
import { Object2D } from "./internal/two.js";

export default {
  mixins: [Object2D],
  description: `
🚜 **This component needs rework.** 
  `,
  example: `
<AnimeData :to="16">
  <TwoScene slot-scope="{value}">
    <TwoRegularPolygon
      :count="value"
    />
    <TwoRegularPolygon
      :count="value"
      :position="{ x: 1, y: 1 }"
      :rotation="{ z: 45 }"
      :scale="{ x: 0.2, y: 0.2 }"
    />
  </TwoScene>
</AnimeData>
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
    <TwoPolygon
      :points="points"
      :transform="transform"
    />
  `
};
