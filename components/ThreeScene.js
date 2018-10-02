import { Renderer, Scene, Camera } from './internal/three.js'

export default {
  name: "ThreeScene",
  example: `
  <!--ThreeIcosahedron>
  <ThreeScene slot-scope="{ points }">
    <ThreeGroup
      v-for="(p,i) in points"
      :key="i"
      :points="p"
    >
      <ThreeLine :points="[p[0],p[1]]" />
      <ThreeLine :points="[p[1],p[2]]" />
      <ThreeLine :points="[p[2],p[0]]" />
    </ThreeGroup>
  </ThreeScene>
  </ThreeIcosahedron-->

  <ThreeIcosahedron>
  <ThreeScene slot-scope="{ normals, vertices }">
    <Anime
    :to="deg2rad(360)"
    duration="10000"
  >
  <ThreeGroup
    slot-scope="{value}"
    :rotation="{x: value, y: value}"
  >
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
  </ThreeIcosahedron>

  <ThreeIcosahedron>
    <div slot-scope="{ normals, vertices }">
      <!--pre
        v-for="(n,i) in normals"
        :key="'n'+i"
        style="marginBottom: 1rem"
        v-html="n"
      /-->
      <pre
        v-for="(v,i) in vertices"
        :key="'v'+i"
        style="marginBottom: 1rem"
        v-html="v"
      />
    </div>
  </ThreeIcosahedron>

    <!--ThreeIcosahedron>
  <ThreeScene slot-scope="{ points }">
    <ThreeGroup
      v-for="(p,i) in points"
      :key="i"
    >
      <ThreeLine
        v-for="(v,i) in p"
        :key="i"
        :points="[v,p[i + i]]"
      />
    </ThreeGroup>
  </ThreeScene>
  </ThreeIcosahedron-->
  `,
  //   example: `
  // <ThreeScene>
  // <ThreeIcosahedron>
  //   <ThreeLine slot-scope="{ points }" points="points" />
  // </ThreeIcosahedron>
  // <ThreeScene>
  //   `,
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