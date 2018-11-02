import { deg2rad } from '../utils.js'

export default {
  description: `
Sliders for <code>x y z<code> coordinate data in *radians*. 
  `,
  example: `
    <SliderDataXyz>
      <ThreeScene slot-scope="data">
        <ThreeBox :rotation="{
          x: data.values[0],
          y: data.values[1],
          z: data.values[2]
        }" />
      </ThreeScene>
    </SliderDataXyz>
  `,
  methods: { deg2rad },
  template: `
  <SliderData :values="[
    { title: 'X', to: deg2rad(360), float: true },
    { title: 'Y', to: deg2rad(360), float: true },
    { title: 'Z', to: deg2rad(360), float: true },
  ]">
    <template slot-scope="data">
      <pre>{{ data }}</pre>
      <slot :values="data.values" />
    </template>
  </SliderData>
  `
}