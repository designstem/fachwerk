import { Object3D } from "./internal/three.js";

export default {
  name: "ThreeTriangle",
  example: `
<ThreeScene>
  <ThreeTriangle
    :points="[
      { x: 0, y: 0, z: 0 },
      { x: 1, y: 0, z: 0 },
      { x: 0, y: 1, z: 0 }
    ]" 
  />
</ThreeScene>
  `,
  mixins: [Object3D],
  props: { points: { default: [] } },
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
        new THREE.MeshNormalMaterial({ opacity: 0.5, side: THREE.DoubleSide })
      );
    }
    curObj.name = curObj.name || curObj.type;
    return { curObj };
  }
};