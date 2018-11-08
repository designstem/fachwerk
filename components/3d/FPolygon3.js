import { Object3D } from "./3d.js";
import { color } from '../../utils.js'

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
  tag: "3D",
  description: `
Draws a 2D polygon on a plane in 3D space, accepts 2D coordinates in <code>:points</code> array.
  `,
  example: `
<f-scene3>
  <f-grid3 />
  <f-polygon3
    :points="[
      { x:  1, y:  1 },
      { x:  1, y: -1 },
      { x: -1, y: -1 },
      { x: -1, y:  1 },
    ]"
  />
</f-scene3>
  `,
  components: { InternalPolygon },
  props: {
    points: { default: [
      { x:  0, y:  0 },
      { x:  1, y: 0 },
      { x: 0,  y: 1 },
    ], type: Array },
    fill: { default: "color('primary')", type: String },
    scale: { default: () => ({}), type: [Object, Number] },
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    opacity: { default: 1, type: Number },
  },
  computed: {
    linePoints() {
      return this.points.concat(this.points[0]).map(p => {
        p.z = 0;
        return p;
      });
    }
  },
  template: `
    <f-group>
      <InternalPolygon :points="points" />
      <f-line :points="linePoints" />
    </f-group>
  `
};
