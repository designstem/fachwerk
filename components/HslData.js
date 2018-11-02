import { deg2rad } from "../utils.js";

export default {
  description: `
Sliders for <code>h s l</code> color values.
  `,
  example: `
<HslData h="270" s="50" l="40">
  <TwoScene slot-scope="data">
    <TwoCircle :fill="hsl(...data.values)" />
  </TwoScene>
</HslData>
  `,
  props: {
    h: { default: 0, type: Number },
    s: { default: 100, type: Number },
    l: { default: 50, type: Number }
  },
  methods: { deg2rad },
  template: `
<SliderData :values="[
  { title: 'Hue', to: 360, value: h, },
  { title: 'Saturation', to: 100, value: s },
  { title: 'Lightness', to: 100, value: l },
]">
    <template slot-scope="data">
      <slot :values="data.values" />
    </template>
  </SliderData>
  `
};
