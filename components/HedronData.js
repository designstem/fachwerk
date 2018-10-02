export default {
  computed: {
    vertices() {
      return new THREE.IcosahedronGeometry(1, 0).vertices.map(
        ({ x, y, z }) => ({ x, y, z })
      );
    },
    normals() {
      return new THREE.IcosahedronGeometry(1, 0).faces.map(f =>
        f.vertexNormals.map(({ x, y, z }) => ({ x, y, z }))
      );
    }
  },
  render() {
    return this.$scopedSlots.default
      ? this.$scopedSlots.default({
          vertices: this.vertices,
          normals: this.normals
        })
      : "";
  },
};
