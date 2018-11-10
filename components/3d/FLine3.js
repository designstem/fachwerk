import { Object3D } from "./3d.js";
import { color } from "../../utils.js";

export default {
  mixins: [Object3D],
  tag: "3D",
  description: `
Draws a line in full 3D space, accepts any number of 3D coordinates in <code>:points</code> array.  `,
  example: `
<f-scene3>
  <f-group3
    :rotation="{ y: 45, x: 45 }"
    :scale="{ x: 0.5, y: 0.5, z: 0.5 }"
  >
  <f-grid3 />
  <f-line3
    :points="[
      { x: 1, y:  1, z: 0 },
      { x: 1, y:  0, z: 1 },
      { x: 1, y: -1, z: 0 },
      { x: 1, y: -2, z: 0 },
    ]"
  />
  </f-group3>
</f-scene3>
  `,
  mixins: [Object3D],
  props: {
    x1: { default: 0, type: Number },
    y1: { default: 0, type: Number },
    z1: { default: 0, type: Number },
    x2: { default: 0, type: Number },
    y2: { default: 0, type: Number },
    z2: { default: 0, type: Number },
    points: { default: [], type: Array },
    stroke: { default: "color('secondary')", type: String },
    strokeWidth: { default: 3, type: Number },
    scale: { default: () => ({}), type: [Object, Number] },
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    opacity: { default: 3, type: Number }
  },
  data() {
    let curObj = this.obj;
    if (!curObj) {
      const geometry = new THREE.Geometry();
      if (this.points.length) {
        this.points.forEach(p => {
          geometry.vertices.push(new THREE.Vector3(p.x || 0, p.y || 0, p.z || 0));
        })
      } else {
        geometry.vertices.push(new THREE.Vector3(this.x1, this.y1, this.z1));
        geometry.vertices.push(new THREE.Vector3(this.x2, this.y2, this.z2));
      }
      const material = new THREE.LineBasicMaterial({
        color: new THREE.Color(
          this.stroke == "color('secondary')" ? color("secondary") : this.stroke
        ),
        linewidth: this.strokeWidth,
        opacity: this.opacity,
      });
      curObj = new THREE.Line(geometry, material);
    }
    curObj.name = curObj.name || curObj.type;
    return { curObj };
  }
};
