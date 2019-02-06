import { THREE, color } from '../../../fachwerk.js'
import Object3D from "./internal/Object3D.js";

export default {
  description: `
Description to be written.

<f-scene3>
  <f-grid3 :rotation="{ y: 45, x: 45 }" />
  <f-box3 :rotation="{ y: 45, x: 45 }" />
</f-scene3>  
  `,
  mixins: [Object3D],
  props: {
    width: { default: 1, type: Number },
    height: { default: 1, type: Number },
    depth: { default: 1, type: Number },
    stroke: { default: "", type: String },
    strokeWidth: { default: 3, type: Number },
    fill: { default: "color('primary')", type: String },
    scale: { default: "1 1 1", type: [String, Number, Array, Object] },
    position: { default: "0 0 0", type: [String, Number, Array, Object] },
    rotation: { default: "0 0 0", type: [String, Number, Array, Object] },
    opacity: { default: 1, type: [Number,String] },
    shading: { default: true, type: Boolean },
  },
  data() {
    let curObj = this.obj;
    if (!curObj) {
      var geometry = new THREE.BoxGeometry(this.width, this.height, this.depth);
      curObj = new THREE.Mesh(
        geometry,
        this.shading ? new THREE.MeshNormalMaterial({
          opacity: this.opacity,
          side: THREE.DoubleSide
        })
        : new THREE.MeshBasicMaterial({
          color: this.fill == "color('primary')" ? color('primary') : this.fill,
          opacity: this.opacity,
          side: THREE.DoubleSide
        })
      );
    }
    curObj.name = curObj.name || curObj.type;
    return { curObj };
  }
};
