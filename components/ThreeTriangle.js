import { Object3D } from "./internal/three.js";

export default {
  name: "ThreeTriangle",
  example: `
<ThreeScene>
  <ThreeTriangle
    :v1="{ x: 0, y: 0, z: 0}" 
    :v2="{ x: 1, y: 0, z: 0}" 
    :v3="{ x: 0, y: 1, z: 0}" 
  />
</ThreeScene>
  `,
  mixins: [Object3D],
  props: ["v1", "v2", "v3"],
  data() {
    let curObj = this.obj;
    if (!curObj) {
      var material = new THREE.MeshNormalMaterial();
      var geometry = new THREE.Geometry();
      geometry.vertices.push(
        new THREE.Vector3(this.v1.x, this.v1.y, this.v1.z)
      );
      geometry.vertices.push(
        new THREE.Vector3(this.v2.x, this.v2.y, this.v2.z)
      );
      geometry.vertices.push(
        new THREE.Vector3(this.v3.x, this.v3.y, this.v3.z)
      );
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