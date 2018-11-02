import { Renderer, Scene, Camera } from './internal/three.js'

export default {
  description: `
_Der Raum_.
`,
  example: `
<ThreeScene>
  <ThreeBox :rotation="{ y: 0.1, x: 1, z: 0.1 }" />
</ThreeScene>
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