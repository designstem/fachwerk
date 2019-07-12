import Renderer from "./internal/Renderer.js";
import Scene from "./internal/Scene.js";
import Camera from "./internal/Camera.js";
import AmbientLight from "./internal/AmbientLight.js";
import DirectionalLight from "./internal/DirectionalLight.js";

export default {
  description: `
3D scene with \`x y z\` coordinates ranging from \`-2 to 2\`.

We use a [ThreeJS](https://threejs.org/) wrapper with a custom SVG renderer.

  <f-scene3>
    <f-rotation3>
      <f-grid3 />
    </f-rotation3>
  </f-scene3>
  `,
  components: { Renderer, Scene, Camera, AmbientLight, DirectionalLight },
  props: {
    width: { default: 300, type: [Number, String] },
    height: { default: 300, type: [Number, String] },
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
    static: { default: false, type: Boolean },
    isometric: { default: false, type: Boolean },
    responsive: { default: false, type: Boolean },
    id: { default: "", type: String },
    download: { default: false, type: Boolean }
  },
  template: `
  <Renderer
    :size="{ w: width, h: height }"
    :webgl="webgl"
    :static="static"
    :responsive="responsive"
    :id="id"
    :download="download"
  >
    <Scene>
      <AmbientLight :color="webgl ? 0xffffff : 0x616161" />
      <DirectionalLight />
      <Camera :position="{ x: 0, y: 0, z: 2.63 }" :isometric="isometric" />
      <f-grid3 v-if="grid" />
      <f-axis3 v-if="axis" />
      <slot />
    </Scene>
  </Renderer>
  `
};
