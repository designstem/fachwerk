import { Object3D } from "./internal/three.js";

export default {
  mixins: [Object3D],
  data() {
    let curObj = this.obj;
    if (!curObj) {
      var geometry = new THREE.DodecahedronGeometry(1, 0);
      curObj = new THREE.Mesh(
        geometry,
        new THREE.MeshNormalMaterial({
          flatShading: true,
          opacity: 0.8,
          side: THREE.DoubleSide
        })
      );
    }
    curObj.name = curObj.name || curObj.type;
    return { curObj };
  }
};
