import { THREE } from "../../../dist/vendor.js";
import { color, parseCoords } from "../../../dist/utils.js";
import { Object3D } from "./3d.js";

export default {
  mixins: [Object3D],
  description: `
Description to be written.

<f-scene3>
  <f-group3 :rotation="{ y: 45, x: 45 }">
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
    x1: { default: 0, type: [Number, String] },
    y1: { default: 0, type: [Number, String] },
    z1: { default: 0, type: [Number, String] },
    x2: { default: 0, type: [Number, String] },
    y2: { default: 0, type: [Number, String] },
    z2: { default: 0, type: [Number, String] },
    points: { default: '', type: [String, Number, Array, Object] },
    stroke: { default: "color('secondary')", type: String },
    strokeWidth: { default: 3, type: [Number, String] },
    position: { default: "0 0 0", type: [String, Number, Array, Object] },
    rotation: { default: "0 0 0", type: [String, Number, Array, Object] },
    scale: { default: "1 1 1", type: [String, Number, Array, Object] },
    opacity: { default: 1, type: [Number, String] }
  },
  data() {
    let curObj = this.obj;
    if (!curObj) {
      const geometry = new THREE.Geometry();
      if (this.points) {
        const points = parseCoords(this.points);
        points.forEach(p => {
          geometry.vertices.push(new THREE.Vector3(...p));
        });
      } else {
        geometry.vertices.push(new THREE.Vector3(this.x1, this.y1, this.z1));
        geometry.vertices.push(new THREE.Vector3(this.x2, this.y2, this.z2));
      }
      const material = new THREE.LineBasicMaterial({
        color: new THREE.Color(
          this.stroke == "color('secondary')" ? color("secondary") : this.stroke
        ),
        linewidth: this.strokeWidth,
        opacity: this.opacity
      });
      curObj = new THREE.Line(geometry, material);
    }
    curObj.name = curObj.name || curObj.type;
    return { curObj };
  }
};
