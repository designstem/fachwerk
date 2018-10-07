import { Object3D } from "./internal/three.js";

export default {
  example: `
<ThreeScene>
  <ThreePolyhedron
    v-for="(hedron,i) in [
      'Tetrahedron',
      'Octahedron',
      'Icosahedron',
      'Dodecahedron'
    ]"
    :key="i"
    :hedron="hedron"
    :position="{x: i - 1.5}"
    :radius="0.5"
  />
</ThreeScene>  
  `,
  mixins: [Object3D],
  props: {
    hedron: { default: "Icosahedron", type: String },
    radius: { default: 1, type: Number }
  },
  data() {
    let curObj = this.obj;
    if (!curObj) {
      var geometry = new THREE[this.hedron + "Geometry"](this.radius, 0);
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
