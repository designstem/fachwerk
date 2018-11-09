export default {
  tag: 'Experimental',
  description: `
Passes 3D coordinates of regular polyhedra as <code>data.normals</code> and <code>data.vertices</code> down to the children components. Supports <code>Tetrahedron</code>, <code>Octahedron</code>, <code>Icosahedron</code> and <code>Dodecahedron</code>.
  `,
  example: `
<PolyhedronData>
  <ThreeScene
    slot-scope="data"
  >
    <AnimeData
    :to="360"
    :duration="10000"
    >
      <ThreeGroup
        slot-scope="{value}"
        :rotation="{
          x:value,
          y: value
        }">
        <ThreePolyhedron />
        <ThreeLine
          v-for="(v,i) in data.vertices"
          :key="'v'+i"
          :points="[v,v]"
          stroke="red"
        />
        <ThreeGroup
          v-for="(n,i) in data.normals"
          :key="'n'+i"
        >
          <ThreeLine :points="n" />
        </ThreeGroup>
      </ThreeGroup>
    </AnimeData>
  </ThreeScene>
</PolyhedronData>
  `,
  props: {
    hedron: { default: "Icosahedron", type: String },
    radius: { default: 1, type: Number }
  },
  computed: {
    vertices() {
      return new THREE[this.hedron + "Geometry"](this.radius, 0).vertices.map(
        ({ x, y, z }) => ({ x, y, z })
      );
    },
    normals() {
      return new THREE[this.hedron + "Geometry"](this.radius, 0).faces.map(f =>
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
  }
};
