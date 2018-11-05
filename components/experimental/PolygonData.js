import { cx, cy } from "../utils.js";

export default {
  tag: 'Experimental',
  description: `
Passes <code>:count</code> points on the 2D circle with radius <code>:radius</code> as <code>data.points</code> down to the children components.
  `,
//   example: `
// <PolygonData>
//   <TwoScene slot-scope="data">
//     <TwoPolygon :points="data.points" />
//     <TwoPolygon :points="[
//       data.points[0],
//       data.points[1],
//       {x: 0, y: 0}
//     ]"/>
//   </TwoScene>
// </PolygonData> 

// <PolygonData>
//   <ThreeScene slot-scope="data">
//     <ThreePolygon :points="data.points" />
//     <ThreePolygon :points="[
//       data.points[0],
//       data.points[1],
//       {x: 0, y: 0}
//     ]"/>
//   </ThreeScene>
// </PolygonData>
//   `,
  props: {
    count: { default: 6, type: Number },
    radius: { default: 1, type: Number }
  },
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