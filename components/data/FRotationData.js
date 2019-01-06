import { deg2rad } from '../../utils.js'

export default {
  description: `
Sliders for <code>x y z</code> coordinate data in degrees from \`0\` to \`180\`.

<f-rotation-data>
  <f-scene3 slot-scope="data">
    <f-box3 :rotation="{
      x: data.value[0],
      y: data.value[1],
      z: data.value[2]
    }" />
  </f-scene3>
</f-rotation-data>
  `,
  methods: { deg2rad },
  template: `
  <f-slider-data :sliders="[
    { title: 'X axis', to: 180, float: true },
    { title: 'Y axis', to: 180, float: true },
    { title: 'Z axis', to: 180, float: true },
  ]">
    <template slot-scope="data">
      <slot :value="data.value" />
    </template>
  </f-slider-data>
  `
}