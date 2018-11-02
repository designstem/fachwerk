import { deg2rad } from "../utils.js";

export default {
  description: `
  Sliders for <code>r g b</code> color values.
  `,
  example: `
<RgbData r="102" g="51" b="153">
  <TwoScene slot-scope="data">
    <TwoCircle :fill="rgb(...data.values)" />
  </TwoScene>
</RgbData>
  `,
  props: {
    r: { default: 128, type: Number },
    g: { default: 128, type: Number },
    b: { default: 128, type: Number }
  },
  methods: { deg2rad },
  template: `
<SliderData :values="[
  { title: 'R', to: 255, value: r },
  { title: 'G', to: 255, value: g },
  { title: 'B', to: 255, value: b },
]">
    <template slot-scope="data">
      <slot :values="data.values" />
    </template>
  </SliderData>
  `
};
