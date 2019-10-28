import Object2D from "./internal/Object2D.js";
import { range, polarx, polary } from "../../../fachwerk.js";

export default {
  mixins: [Object2D],
  description: `
Displays a polar grid.

#### Default values

<f-scene>
  <f-polargrid />
</f-scene> 

#### Custom values

<f-scene>
  <f-polargrid count="24" step="0.125" />
</f-scene> 
  `,
  props: {
    count: { default: 6 },
    r: { default: 4 },
    step: { default: 0.5 },
    position: { default: "0 0", type: [String, Number, Object, Array] },
    rotation: { default: "0", type: [String, Number, Object, Array] },
    scale: { default: "1", type: [String, Number, Object, Array] }
  },
  methods: { range, polarx, polary },
  // mounted() {
  //   console.log(range(0, 2));
  // },
  template: `
    <f-group :transform="transform">
      <f-line
        v-for="(a,i) in range(0,360,360 / count).slice(0,count)"
        :key="'a' + i"
        :x2="polarx(a,4)"
        :y2="polary(a,4)"
        stroke-width="1"
        opacity="0.25"
      />
      <f-circle
        v-for="(cr,j) in range(0,r,step)"
        :key="'b' + j"
        :r="cr"
        stroke-width="1"
        opacity="0.25"
      />
    </f-group>
    `
};
