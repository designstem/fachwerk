export default {
  tag: 'Data',
  description: `
Sliders for <code>h s l</code> color values.

<f-hsl-data h="270" s="50" l="40">
  <f-scene slot-scope="data">
    <f-circle :fill="hsl(...data.value)" />
  </f-scene>
</f-hsl-data>
  `,
  props: {
    h: { default: 0, type: [Number,String] },
    s: { default: 100, type: [Number,String] },
    l: { default: 50, type: [Number,String] }
  },
  template: `
<f-slider-data :sliders="[
  { title: 'Hue', to: 360, value: h, },
  { title: 'Saturation', to: 100, value: s },
  { title: 'Lightness', to: 100, value: l },
]">
    <template slot-scope="data">
      <slot :value="data.value" />
    </template>
  </f-slider-data>
  `
};
