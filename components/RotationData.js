import { deg2rad } from '../utils.js'

export default {
  description: `
Sliders for <code>x y z</code> coordinate data in *radians*. 
  `,
  example: `
    <RotationData>
      <ThreeScene slot-scope="data">
        <ThreeBox :rotation="{
          x: data.values[0],
          y: data.values[1],
          z: data.values[2]
        }" />
      </ThreeScene>
    </RotationData>
  `,
  methods: { deg2rad },
  template: `
  <SliderData :values="[
    { title: 'X axis', to: deg2rad(360), float: true },
    { title: 'Y axis', to: deg2rad(360), float: true },
    { title: 'Z axis', to: deg2rad(360), float: true },
  ]">
    <template slot-scope="data">
      <slot :values="data.values" />
    </template>
  </SliderData>
  `
}