import { Object3D } from "./3d.js";
import { color } from '../../utils.js'

export default {
  tag: '3D',
  description: `
⚠️ \`stroke\` and \`stroke-width\` are currently ignored
  `,
  example: `
<f-scene3>
  <f-box3 />
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
    scale: { default: () => ({}), type: [Object, Number] },
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    opacity: { default: 1, type: Number },
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
