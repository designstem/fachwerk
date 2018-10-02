import { Renderer, Scene, Camera } from './internal/three.js'

export default {
  name: "ThreeScene",
  example: `
<ThreeScene>
    <ThreeRegularPolygon count="64" />
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