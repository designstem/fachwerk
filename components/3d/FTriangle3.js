import { Object3D } from "./3d.js";

export default {
  description: `
<i>Der Bauklotz</I> of 3D graphics, this component draws a triangle in 3D space. It accepts three 3D coordinates in <code>:points</code> array.
  `,
  example: `
<f-scene3>
  <f-group3
    :rotation="{ y: 0.5, x: 0.5 }"
    :scale="{ x: 0.5, y: 0.5, z: 0.5 }"
  >
    <f-grid3 />
    <f-triangle3
      :points="[
        { x: 1, y: 1,  z: 0 },
        { x: 1, y: 0,  z: 1 },
        { x: 1, y: -1, z: 0 },
      ]" 
    /> 
  </f-group3>
</f-scene3>
  `,
  mixins: [Object3D],
  props: {
    points: { default: [], type: Array },
    scale: { default: () => ({}), type: [Object, Number] },
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object }
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