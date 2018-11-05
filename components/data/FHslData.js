import { deg2rad } from "../../utils.js";

export default {
  tag: 'Data',
  description: `
Sliders for <code>h s l</code> color values.
  `,
  example: `
<f-hsl-data h="270" s="50" l="40">
  <f-scene slot-scope="data">
    <f-circle :fill="hsl(...data.values)" />
  </f-scene>
</f-hsl-data>
  `,
  props: {
    h: { default: 0, type: Number },
    s: { default: 100, type: Number },
    l: { default: 50, type: Number }
  },
  methods: { deg2rad },
  template: `
<f-slider-data :values="[
  { title: 'Hue', to: 360, value: h, },
  { title: 'Saturation', to: 100, value: s },
  { title: 'Lightness', to: 100, value: l },
]">
    <template slot-scope="data">
      <slot :values="data.values" />
    </template>
  </f-slider-data>
  `
};
