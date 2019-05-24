import Renderer from "./internal/Renderer.js";
import Scene from "./internal/Scene.js";
import Camera from "./internal/Camera.js";

export default {
  description: `
3D scene with \`x y z\` coordinates ranging from \`-2 to 2\`.

We use a [ThreeJS](https://threejs.org/) wrapper with a custom SVG renderer.

<f-animation>
  <f-scene3 slot-scope="data">
    <f-grid3
      :rotation="{ x: data.value, y: data.value }"
    />
  </f-scene3>
</f-animation>
  `,
  components: { Renderer, Scene, Camera },
  props: {
    width: { default: 300, type: [Number,String] },
    height: { default: 300, type: [Number,String] },
    grid: {
      default: false,
      type: [Boolean, String],
      description: "Show background grid"
    },
    axis: {
      default: false,
      type: [Boolean, String],
      description: "Show axises"
    },
    webgl: { default: false, type: Boolean },
    isometric: { default: false, type: Boolean }
  },
  template: `
  <Renderer :size="{ w: width, h: height }" :webgl="webgl">
    <Scene>
      <Camera :position="{ x: 0, y: 0, z: 2.63 }" :isometric="isometric" />
      <f-grid3 v-if="grid" />
      <f-axis3 v-if="axis" />
      <slot />
    </Scene>
  </Renderer>
  `
};
