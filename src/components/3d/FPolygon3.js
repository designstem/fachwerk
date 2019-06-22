import { THREE, color, parseCoords } from '../../../fachwerk.js'
import Object3D from "./internal/Object3D.js";

const InternalPolygon = {
  mixins: [Object3D],
  props: {
    points: { default: '', type: [String, Number, Array] },
    fill: { default: '', type: String },
    opacity: { default: 1, type: Number },
  },
  data() {
    let curObj = this.obj;
    if (!curObj) {
      var vectorPoints = this.points.map(
        p => new THREE.Vector3(p[0] || 0, p[1] || 0, p[2] || 0)
      );
      var shape = new THREE.Shape(vectorPoints);
      var geometry = new THREE.ShapeGeometry(shape);
      curObj = new THREE.Mesh(
        geometry,
        new THREE.MeshBasicMaterial({
          color: this.fill == "color('primary')" ? color("primary") : this.fill,
          opacity: this.fill == '' ? 0 : this.opacity,
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

<f-scene3 isometric>
  <f-rotation3>
    <f-grid3 />
    <f-polygon3
    points="
      0  0  0,
      1  0  0,
      0  1  0,
      0  0  0
    "
    :stroke="color('red')"
    :fill="color('blue')"
    />
  </f-rotation3>
</f-scene3>
  `,
  components: { InternalPolygon },
  props: {
    points: { default: '', type: [String, Number, Array] },
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
    strokeColor() {
      return this.stroke == "color('primary')" ? color('primary') : this.stroke
    },
    currentPoints() {
      return this.points ? parseCoords(this.points) : null;
    }
  },
  template: `
    <f-group3>
      <InternalPolygon :points="currentPoints" :fill="fill" :opacity="opacity" position="0 0 0" />
      <f-line3 :points="currentPoints" :stroke="strokeColor" :strokeWidth="strokeWidth" :opacity="opacity" />
    </f-group3>
  `
};
