import { Object2D } from "./internal/two.js";

export default {
  mixins: [Object2D],
  description: `
As the classic once [wrote](http://printingcode.runemadsen.com/lecture-grid/), there is nothing worse for an artist than a blank canvas.
  `,
  example: `
<TwoScene>
  <TwoGrid />
  <TwoGrid
    :position="{ x: 1, y: 1 }"
    :rotation="{ z: 45 }"
    :scale="{ x: 0.2, y: 0.2 }"
  />
</TwoScene>
  `,
  props: {
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    scale: { default: () => ({}), type: Object }
  },
  template: `
  <g :transform="transform">
    <line
      v-for="x in [-2,-1,0,1,2]"
      :x1="x"
      :y1="-3"
      :x2="x"
      :y2="3"
      stroke="var(--primary)"
      opacity="0.2"
    />
    <line
      v-for="y in [-2,-1,0,1,2]"
      :x1="-3"
      :y1="y"
      :x2="3"
      :y2="y"
      stroke="var(--primary"
      opacity="0.2"
    />
  </g>
  `
};
