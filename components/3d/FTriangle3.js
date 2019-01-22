import { Object3D } from "./3d.js";
import { color } from '../../utils.js'

export default {
  description: `
The key building block of 3D graphics, this component draws a triangle in 3D space. It accepts three 3D coordinates in <code>:points</code> array.

<f-scene3>
  <f-group3 :rotation="{ y: 45, x: 45 }">
    <f-grid3 />
    <f-triangle3
      :points="[
        { x: 1, y: 1,  z: 0 },
        { x: 1, y: 0,  z: 1 },
        { x: 1, y: -1, z: 0 },
      ]" 
    /> 
  </f-group3>
</f-scene3>
  `,
  mixins: [Object3D],
  props: {
    points: { default: [], type: Array },
    fill: { default: "color('primary')", type: String },
    position: { default: "0 0 0", type: [String, Number, Array, Object] },
    rotation: { default: "0 0 0", type: [String, Number, Array, Object] },
    scale: { default: "1 1 1", type: [String, Number, Array, Object] },
    opacity: { default: 1, type: [Number,String] },
    shading: { default: false, type: Boolean },
  },
  data() {
    let curObj = this.obj;
    if (!curObj) {
      var geometry = new THREE.Geometry();
      this.points.forEach(p => {
        geometry.vertices.push(new THREE.Vector3(p.x || 0, p.y || 0, p.z || 0));
      });
      geometry.faces.push(new THREE.Face3(0, 1, 2));
      geometry.computeFaceNormals();
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
        }),
      );
    }
    curObj.name = curObj.name || curObj.type;
    return { curObj };
  }
};
