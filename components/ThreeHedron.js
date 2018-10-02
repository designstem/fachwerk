import { Object3D } from "./internal/three.js";

export default {
  name: 'ThreeHedron',
  example: `
<ThreeScene>
  <ThreeHedron hedron="Icosahedron" />
</ThreeScene>  
  `,
  mixins: [Object3D],
  props: { hedron: { default: 'Icosahedron' } },
  data() {
    let curObj = this.obj;
    if (!curObj) {
      var geometry = new THREE[this.hedron + 'Geometry'](1, 0)
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
