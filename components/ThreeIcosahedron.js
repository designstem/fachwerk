// import { Object3D } from "./internal/three.js";

// // export default {
// //   mixins: [Object3D],
// //   data() {
// //     let curObj = this.obj;
// //     if (!curObj) {
// //       var geometry = new THREE.IcosahedronGeometry(1, 0);
// //       console.log(geometry.faces.map(f => f.vertexNormals.map(({ x, y, z }) => ({ x, y, z }))))
// //       curObj = new THREE.Mesh(
// //         geometry,
// //         new THREE.MeshNormalMaterial({ flatShading: true, opacity: 0.8, side: THREE.DoubleSide })
// //       );
// //     }
// //     curObj.name = curObj.name || curObj.type;
// //     return { curObj };
// //   }
// // };

export default {
  computed: {
    vertices() {
      return new THREE.DodecahedronGeometry(1, 0).vertices.map(
        ({ x, y, z }) => ({ x, y, z })
      );
    },
    normals() {
      return new THREE.DodecahedronGeometry(1, 0).faces.map(f =>
        f.vertexNormals.map(({ x, y, z }) => ({ x, y, z }))
      );
    }
  },
  render() {
    return this.$scopedSlots.default
      ? this.$scopedSlots.default({ vertices: this.vertices, normals: this.normals })
      : "";
  },
  mounted() {
    // const a = new THREE.IcosahedronGeometry(1, 0).vertices.map(
    //   ({ x, y, z }) => ({ x, y, z })
    // );
    // console.log(a)
  }
};