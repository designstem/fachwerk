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
        new THREE.MeshNormalMaterial({ opacity: 0.5, side: THREE.DoubleSide })
      );
    }
    curObj.name = curObj.name || curObj.type;
    return { curObj };
  }
};

//import { Object3D } from "./internal/three.js";

// const InternalThreePolygon = {
//   mixins: [Object3D],
//   props: { points: { default: [] } },
//   data() {
//     let curObj = this.obj;
//     if (!curObj) {
//       var geometry = new THREE.Geometry();
//       this.points.forEach(p => {
//         geometry.vertices.push(new THREE.Vector3(p.x || 0, p.y || 0, p.z || 0));
//       });
//       geometry.faces.push(new THREE.Face3(0, 1, 2));
//       geometry.computeFaceNormals();
//       curObj = new THREE.Mesh(
//         geometry,
//         new THREE.MeshNormalMaterial({ opacity: 0.5, side: THREE.DoubleSide })
//       );
//     }
//     curObj.name = curObj.name || curObj.type;
//     return { curObj };
//   }
// };

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
  computed: {
    linePoints() {
      return this.points.concat(this.points[0]).map(p => {
        p.z = 0
        return p
      })
    }
  },
  template: `
    <ThreeGroup>
      <InternalThreePolygon :points="points" />
      <ThreeLine :points="linePoints" />
    </ThreeGroup>
  `
};