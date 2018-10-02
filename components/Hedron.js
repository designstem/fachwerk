export default {
  name: 'Hedron',
  description: `
Provides 3D coordinates of regular polyhedra.
  `,
  example: `
<Hedron>
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
        <ThreeHedron />
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
</Hedron>
  `,
  props: { hedron: { default: 'Icosahedron' } },
  computed: {
    vertices() {
      return new THREE[this.hedron + 'Geometry'](1, 0).vertices.map(
        ({ x, y, z }) => ({ x, y, z })
      );
    },
    normals() {
      return new THREE[this.hedron + "Geometry"](1, 0).faces.map(f =>
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
