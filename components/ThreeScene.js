import { Renderer, Scene, Camera } from './internal/three.js'

export default {
  description: `
_Der Raum_.
`,
  example: `
<ThreeScene>
    <ThreeRegularPolygon
      :count="64"
      :rotation="{ y: 0.5, x: 0.5 }"
    />
    <ThreeLine
      :points="[{ z: 0 },{ z: 1 }]"
      :rotation="{ y: 0.5, x: 0.5 }"
    />
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