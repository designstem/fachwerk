import { Object3D } from "./internal/three.js";

export default {
  name: "ThreeBox",
  example: `
<ThreeScene>
  <ThreeGrid />
  <ThreeBox />
</ThreeScene>  
  `,
  mixins: [Object3D],
  props: {
    width: { default: 1 },
    height: { default: 1 },
    depth: { default: 1 }
  },
  data() {
    let curObj = this.obj;
    if (!curObj) {
      var geometry = new THREE.BoxGeometry(this.width, this.height, this.depth);
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
