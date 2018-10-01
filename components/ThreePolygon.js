import { Object3D } from "./internal/three.js";
import ThreeLine from "./ThreeLine.js"
import ThreeGroup from "./ThreeGroup.js";

const InternalThreePolygon = {
  mixins: [Object3D],
  props: { points: { default: [] } },
  data() {
    let curObj = this.obj;
    if (!curObj) {
      var vectorPoints = this.points.map(p => new THREE.Vector2(p.x, p.y));
      var shape = new THREE.Shape(vectorPoints);
      var geometry = new THREE.ShapeGeometry(shape);
      curObj = new THREE.Mesh(
        geometry,
        new THREE.MeshNormalMaterial({ opacity: 0.5, side: THREE.DoubleSide })
      );
    }
    curObj.name = curObj.name || curObj.type;
    return { curObj };
  }
};

export default {
  name: "ThreePolygon",
  example: `
<ThreeScene>
  <ThreePolygon
    :points="[
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
    ]"
  />
</ThreeScene>
  `,
  components: { InternalThreePolygon, ThreeGroup, ThreeLine },
  props: { points: { default: [] } },
  template: `
    <ThreeGroup>
      <InternalThreePolygon :points="points" />
      <ThreeLine :points="points.concat(points[0])" />
    </ThreeGroup>
  `
};