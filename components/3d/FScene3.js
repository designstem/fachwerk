import { Renderer, Scene, Camera } from './3d.js'

export default {
  tag: '3D',
  description: `
_Der Raum_.
`,
  example: `
<f-animation-data to="360">
  <f-scene3 slot-scope="data">
    <f-grid3
      :rotation="{ x: data.value, y: data.value }"
    />
  </f-scene3>
</f-animation-data>
  `,
  components: { Renderer, Scene, Camera },
  template: `
    <div class="three">
      <Renderer :size="{ w: 250, h: 250 }">
        <Scene>
          <Camera :position="{ z: 2.63 }" />
          <slot />
        </Scene>
      </Renderer>
    </div>
  `
};