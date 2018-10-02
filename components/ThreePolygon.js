import { Object3D } from "./internal/three.js";
import ThreeLine from "./ThreeLine.js"
import ThreeGroup from "./ThreeGroup.js";

const InternalThreePolygon = {
  mixins: [Object3D],
  props: { points: { default: [] } },
  data() {
    let curObj = this.obj;
    if (!curObj) {
      var vectorPoints = this.points.map(p => new THREE.Vector3(p.x || 0, p.y || 0, p.z || 0));
      var shape = new THREE.Shape(vectorPoints);
      var geometry = new THREE.ShapeGeometry(shape);
      curObj = new THREE.Mesh(
        geometry,
        new THREE.MeshNormalMaterial({ flatShading: true, opacity: 0.7, side: THREE.DoubleSide })
      );
    }
    curObj.name = curObj.name || curObj.type;
    return { curObj };
  }
};

export default {
  mixins: [Object3D],
  name: "ThreePolygon",
  description: `
Draws a polygon on a plane in 3D space, accepts 2D coordinates in <code>:points</code> array.
  `,
  example: `
<ThreeScene>
  <ThreeGrid />
  <ThreePolygon
    :points="[
      { x:  1, y:  1 },
      { x:  1, y: -1 },
      { x: -1, y: -1 },
      { x: -1, y:  1 },
    ]"
  />
</ThreeScene>
  `,
  components: { InternalThreePolygon, ThreeGroup, ThreeLine },
  props: { points: { default: [] } },
  computed: {
    linePoints() {
      return this.points.concat(this.points[0]).map(p => {
        p.z = 0;
        return p;
      });
    }
  },
  template: `
    <ThreeGroup>
      <InternalThreePolygon :points="points" />
      <ThreeLine :points="linePoints" />
    </ThreeGroup>
  `
};