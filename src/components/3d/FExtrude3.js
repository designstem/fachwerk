import { parseCoords, range, log } from "../../../fachwerk.js"
import Object3D from "./internal/Object3D.js";

export default {
mixins: [Object3D],
  description: `
Extrudes the array of 2D \`points\` to the \`z\` dimension.

<f-scene3>
  <f-rotation3>
    <f-grid3 />
    <f-extrude3
      points="-1 -1, -1 1, 1 1, 1 -1, -1 -1"
    />
  </f-rotation3>
</f-scene3>
  `,
  props: {
    points: { default: "", type: [String, Number, Array] },
    length: { default: 1, type: [Number, String] },
    fill: { default: "", type: String },
    position: { default: "0 0 0", type: [String, Number, Array, Object] },
    rotation: { default: "0 0 0", type: [String, Number, Array, Object] },
    scale: { default: "1 1 1", type: [String, Number, Array, Object] },
    opacity: { default: 1, type: [Number, String] },
    shading: { default: true, type: Boolean },
  },
  computed: {
    p() {
      return parseCoords(this.points)
    }
  },
  methods: { range, parseCoords, log },
  template: `
  <f-group3>
    <f-group3 v-for="i in range(0, p.length - 2)" :key="i">
      <f-triangle3
        :points="[
          [p[i][0],p[i][1],0],
          [p[i + 1][0],p[i + 1][1],0],
          [p[i + 1][0],p[i + 1][1],length],
        ]"
        :shading="shading"
        :fill="fill"
      />
      <f-triangle3
        v-for="i in range(0, p.length - 2)"
        :key="'a' + i"
        :points="[
          [p[i][0],p[i][1],0],
          [p[i][0],p[i][1],length],
          [p[i + 1][0],p[i + 1][1],length],
        ]"
        :shading="shading"
        :fill="fill"
      />
      <f-line3
        v-for="i in range(0, p.length - 2)"
        :key="'b' + i"
        :points="[
          [p[i][0],p[i][1],0],
          [p[i + 1][0],p[i + 1][1],0],
          [p[i + 1][0],p[i + 1][1],length],
          [p[i][0],p[i][1],length],
          [p[i][0],p[i][1],0]
        ]"
      />
    </f-group3>
  </f-group3>
  `
}