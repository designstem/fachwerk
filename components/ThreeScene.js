import { Renderer, Scene, Camera } from './internal/three.js'

export default {
  name: "ThreeScene",
  example: `
<ThreeScene>
  <ThreeDodecahedron />
  <ThreeIcosahedron />
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