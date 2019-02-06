import { THREE } from "../../../dist/vendor.js";
import { color } from '../../../dist/utils.js'
import Object3D from "./internal/Object3D.js";

const InternalPolygon = {
  mixins: [Object3D],
  props: {
    points: { default: [], type: Array },
    fill: { default: "color('primary')", type: String },
    opacity: { default: 1, type: Number },
  },
  data() {
    let curObj = this.obj;
    if (!curObj) {
      var vectorPoints = this.points.map(
        p => new THREE.Vector3(p.x || 0, p.y || 0, p.z || 0)
      );
      var shape = new THREE.Shape(vectorPoints);
      var geometry = new THREE.ShapeGeometry(shape);
      curObj = new THREE.Mesh(
        geometry,
        new THREE.MeshBasicMaterial({
          color: this.fill == "color('primary')" ? color("primary") : this.fill,
          opacity: this.opacity,
          side: THREE.DoubleSide
        })
      );
    }
    curObj.name = curObj.name || curObj.type;
    return { curObj };
  }
};

export default {
  mixins: [Object3D],
  description: `
Draws a 2D polygon on a plane in 3D space, accepts 2D coordinates in <code>:points</code> array.

<f-scene3>
  <f-group3 :rotation="{ y: 45, x: 45 }">
    <f-grid3 />
    <f-polygon3
      :points="[
        { x:  1, y:  1 },
        { x:  1, y: -1 },
        { x: -1, y: -1 },
        { x: -1, y:  1 },
      ]"
    />
  </f-group3>
</f-scene3>
  `,
  components: { InternalPolygon },
  props: {
    points: { default: [], type: Array },
    stroke: { default: "color('primary')", type: String },
    strokeWidth: { default: "3", type: [Number,String] },
    fill: { default: "", type: String },
    scale: { default: () => ({}), type: [Object, Number] },
    position: { default: "0 0 0", type: [String, Number, Array, Object] },
    rotation: { default: "0 0 0", type: [String, Number, Array, Object] },
    scale: { default: "1 1 1", type: [String, Number, Array, Object] },
    opacity: { default: 1, type: [Number,String] },
  },
  computed: {
    linePoints() {
      return this.points.concat(this.points[0]).map(p => {
        p.z = 0;
        return p;
      });
    },
    strokeColor() {
      return this.stroke == "color('primary')" ? color('primary') : this.stroke
    }
  },
  template: `
    <f-group3>
      <InternalPolygon :points="points" :fill="fill" :opacity="opacity" />
      <f-line3 :points="linePoints" :stroke="strokeColor" :strokeWidth="strokeWidth" :opacity="opacity" />
    </f-group3>
  `
};
