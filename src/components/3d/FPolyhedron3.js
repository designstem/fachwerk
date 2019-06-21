import { THREE } from "../../../fachwerk.js";
import Object3D from "./internal/Object3D.js";

export default {
  description: `
Displays a polyhedron geometry in 3D space.

<f-scene3>
  <f-rotation3>
    <f-grid3 />
    <f-polyhedron3
      hedron="Tetrahedron"
      position="-1.5 0 0"
      scale="0.5"
    />
    <f-polyhedron3
      hedron="Octahedron"
      position="-0.5 0 0"
      scale="0.5"
    />
    <f-polyhedron3
      hedron="Icosahedron"
      position="0.5 0 0"
      scale="0.5"
    />
    <f-polyhedron3
      hedron="Dodecahedron"
      position="1.5 0 0"
      scale="0.5"
    />
  </f-rotation3>
</f-scene3>  
  `,
  mixins: [Object3D],
  props: {
    hedron: { default: "Icosahedron", type: String },
    r: { default: 1, type: Number },
    position: { default: "0 0 0", type: [String, Number, Array, Object] },
    rotation: { default: "0 0 0", type: [String, Number, Array, Object] },
    scale: { default: "1 1 1", type: [String, Number, Array, Object] },
    opacity: { default: 1, type: [Number,String] },
  },
  data() {
    let curObj = this.obj;
    if (!curObj) {
      var geometry = new THREE[this.hedron + "Geometry"](this.r, 0);
      curObj = new THREE.Mesh(
        geometry,
        new THREE.MeshNormalMaterial({
          flatShading: true,
          opacity: this.opacity,
          side: THREE.DoubleSide
        })
      );
    }
    curObj.name = curObj.name || curObj.type;
    return { curObj };
  }
};
