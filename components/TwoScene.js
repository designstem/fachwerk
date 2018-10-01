import Css from "../mixins/Css.js";

export default {
  mixins: [Css],
  name: "TwoScene",
  description: `A simple 2D scene with some tweaks to regular SVG document: **Y axis is flipped** and the **units spread from <code>-2</code> to <code>2</code>** to work same way as **ThreeScene**. `,
  example: `
<TwoScene>
  <Anime :to="1" :alternate="true">
    <circle slot-scope={value} :r="value" />
  </Anime>
</TwoScene>
  `,
  props: { size: { default: 250 } },
  computed: {
    viewBox() {
      return `-2 -2 4 4`;
    }
  },
  template: `
    <svg
        :width="size"
        :height="size"
        :view-box.camel="viewBox"
        class="two"
    >
      <g transform="scale(1,-1)">
        <line
          v-for="x in [-2,-1,0,1,2]"
          :x1="x"
          :y1="-3"
          :x2="x"
          :y2="3"
          :stroke="'rgba(0,0,0,' + (x == 0 ? 0.5: 0.2) + ')'"
        />
        <line
          v-for="y in [-2,-1,0,1,2]"
          :x1="-3"
          :y1="y"
          :x2="3"
          :y2="y"
          :stroke="'rgba(0,0,0,' + (y == 0 ? 0.5: 0.2) + ')'"
        />
        <slot />
      </g>
    </svg>
  `,
  css: `
    .two * {
      vector-effect: non-scaling-stroke;
    }
  `
};
