import { Renderer, Scene, Camera } from './3d.js'

export default {
  tag: '3D',
  description: `
_Der Raum_.
`,
  example: `
<f-scene3>
  <f-box3
    :rotation="{ x: 0, y: 45, z: 0 }"
    :opacity="0.8"
  />
</f-scene3>
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