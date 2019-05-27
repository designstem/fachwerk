import { parseCoords, range, log } from "../fachwerk.js";

export default {
  props: {
    points: { default: "", type: [String, Number, Array] },
  },
  computed: {
    p() {
      return parseCoords(this.points)
    }
  },
  methods: { range, parseCoords, log },
  template: `
  <f-group3>
    {{ log(p) }}
    <f-polygon3
      :points="[
        [-1,-1],
        [-1,1],
        [1,1],
        [-1,1]
      ]"
    />
  </f-group3>
  `,
  template3: `
  <f-group3>
    {{ log(p) }}
    <f-polygon3>
      :points="[
        [p[i][0],p[i][1],0],
        [p[i + 1][0],p[i + 1][1],0],
        [p[i + 1][0],p[i + 1][1],1],
        [p[i][0],p[i][1],1],
      ]"
    />
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