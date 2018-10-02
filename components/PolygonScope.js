import { cx, cy } from "../utils.js";

export default {
  name: "PolygonScope",
  description: `
Passes <code>x y</code> coordinates of regular polygon (or points on the 2D circle) as <code>{ points }</code> down to the children components.
  `,
  example: `
<PolygonScope>
  <TwoScene slot-scope="{ points }">
    <TwoPolygon :points="points" />
  </TwoScene>
</PolygonScope> 

<PolygonScope>
  <ThreeScene slot-scope="{ points }">
    <ThreePolygon :points="points" />
  </ThreeScene>
</PolygonScope> 
  `,
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
  render() {
    return this.$scopedSlots.default
      ? this.$scopedSlots.default({ points: this.points })
      : "";
  }
};