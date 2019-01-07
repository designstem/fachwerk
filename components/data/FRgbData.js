export default {
  description: `
  Sliders for <code>r g b</code> color values.

  <f-rgb-data r="102" g="51" b="153">
  <f-scene slot-scope="data">
    <f-circle :fill="rgb(...data.value)" />
  </f-scene>
</f-rgb-data>
  `,
  props: {
    r: { default: 128, type: [Number,String] },
    g: { default: 128, type: [Number,String] },
    b: { default: 128, type: [Number,String] }
  },
  template: `
<f-slider-data :sliders="[
  { title: 'R', to: 255, value: r },
  { title: 'G', to: 255, value: g },
  { title: 'B', to: 255, value: b },
]">
  <template slot-scope="data">
    <slot :value="data.value" />
  </template>
</f-slider-data>
  `
};
