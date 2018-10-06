import { Object3D } from "./internal/three.js";

export default {
  description: `
<i>Der Bauklotz</I> of 3D graphics, this component draws a triangle in 3D space. It accepts three 3D coordinates in <code>:points</code> array.
  `,
  example: `
<ThreeScene>
  <ThreeGroup
    :rotation="{ y: 0.5, x: 0.5 }"
    :scale="{ x: 0.5, y: 0.5, z: 0.5 }"
  >
    <ThreeGrid />
    <ThreeTriangle
      :points="[
        { x: 1, y: 1,  z: 0 },
        { x: 1, y: 0,  z: 1 },
        { x: 1, y: -1, z: 0 },
      ]" 
    /> 
  </ThreeGroup>
</ThreeScene>
  `,
  mixins: [Object3D],
  props: {
    points: { default: [], type: Array }
  },
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
        new THREE.MeshNormalMaterial({
          flatShading: true,
          opacity: 0.5,
          side: THREE.DoubleSide
        })
      );
    }
    curObj.name = curObj.name || curObj.type;
    return { curObj };
  }
};