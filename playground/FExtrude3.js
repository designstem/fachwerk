import { parseCoords, range, log } from "../fachwerk.js";

export default {
  props: {
    points: { default: "", type: [String, Number, Array] },
    length: { default: 1, type: [Number, String] }
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
      />
      <f-triangle3
        v-for="i in range(0, p.length - 2)"
        :key="'a' + i"
        :points="[
          [p[i][0],p[i][1],0],
          [p[i][0],p[i][1],length],
          [p[i + 1][0],p[i + 1][1],length],
        ]"
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
  `,
  template2: `
  <div>
    <pre v-for="i in range(0, p.length - 2)">
    {{ [[p[i][0],p[i][1],2],[p[i + 1][0],p[i + 1][1],2]] }}
    </pre>
  </div>
  `
}