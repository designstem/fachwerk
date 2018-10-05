export default {
  description: `
**⚠️ To be renamed to PolyhedronData**.
Passes <code>x y z</code> coordinates of regular polyhedra as <code>{ normals, vertices }</code> down to the children components. Supports <code>Tetrahedron</code>, <code>Octahedron</code>, <code>Icosahedron</code> and <code>Dodecahedron</code>.
  `,
  example: `
<PolyhedronScope>
  <ThreeScene
    slot-scope="{ normals, vertices }"
  >
    <Anime
    :to="deg2rad(360)"
    duration="10000"
    >
      <ThreeGroup
        slot-scope="{value}"
        :rotation="{
          x:value,
          y: value
        }">
        <ThreePolyhedron />
        <ThreeLine
          v-for="(v,i) in vertices"
          :key="'v'+i"
          :points="[v,v]"
          stroke="red"
        />
        <ThreeGroup
          v-for="(n,i) in normals"
          :key="'n'+i"
        >
          <ThreeLine :points="n" />
        </ThreeGroup>
      </ThreeGroup>
    </Anime>
  </ThreeScene>
</PolyhedronScope>
  `,
  props: { hedron: { default: "Icosahedron" }, radius: { default: 1 } },
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
