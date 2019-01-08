import { Renderer, Scene, Camera } from './3d.js'

export default {
  description: `
3D scene with \`x y z\` coordinates ranging from \`-2 to 2\`.

We use a [ThreeJS](https://threejs.org/) wrapper with a custom SVG renderer.

<f-animation-data>
  <f-scene3 slot-scope="data">
    <f-grid3
      :rotation="{ x: data.value, y: data.value }"
    />
  </f-scene3>
</f-animation-data>
  `,
  components: { Renderer, Scene, Camera },
  props: {
    width: { default: 250, type: Number },
    height: { default: 250, type: Number },
    cameraPosition: { default: () => ({ x: 0, y: 0, z: 2.63 }), type: Object },
  },
  template: `
  <Renderer :size="{ w: width, h: height }">
    <Scene>
      <Camera :position="cameraPosition" />
      <slot />
    </Scene>
  </Renderer>
  `
};