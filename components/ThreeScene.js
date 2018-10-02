import { Renderer, Scene, Camera } from './internal/three.js'

export default {
  name: "ThreeScene",
  example: `
  <HedronData>
  <ThreeScene slot-scope="{ normals, vertices }">
    <Anime
    :to="deg2rad(360)"
    duration="10000"
  >
  <ThreeGroup
    slot-scope="{value}"
    :rotation="{x: value, y: value}"
  >
    <ThreeIcosahedron />
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
  </HedronData>
  `,
  components: { Renderer, Scene, Camera },
  template: `
    <div class="three">
      <Renderer :size="{ w: 250, h: 250 }">
        <Scene>
          <Camera :position="{ z: 2.63 }" />
          <slot />
        </Scene>
      </Renderer>
    </div>
  `
};