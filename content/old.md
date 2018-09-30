import {
  Renderer,
  Scene,
  Camera,
  Light,
  Mesh,
  Stroke,
  Triangle,
  Icosahedron,
  Dodecahedron
} from "./three.js";

import { cx, cy } from "../components/utils.js";

new Vue({
  el: "#app",
  components: {
    Renderer,
    Scene,
    Camera,
    Light,
    Mesh,
    Stroke,
    Triangle,
    Icosahedron,
    Dodecahedron
  },
  data: () => ({ rotateY: 0, rotateX: 0.75, count: 0 }),
  methods: { cx, cy },
  template: `
  <div>
    <header>
      <div>
        <a href="..">Styles</a>
        → ThreeJS playground
      </div>
    </header>
    <div style="padding: 2rem; display: grid; grid-template-columns: 2fr 2fr 1fr; grid-gap: 2rem;">
      <div>
        <h1>3D in SVG</h1>
        <div class="intro">
          <p>This is a simple demonstration of SVG rendering of 3D shapes. We use ThreeJS library under the hood
          but the functionality is exposed via simple components.</p>
          <p>In this example we use two custom components:</p>
          <br>
<pre>
&lt;Stroke
  from="{x: 1, y: 0, y: 0}"
  to="{x: 0, y: 1, y: 0}"
&gt;
</pre>
<br>
<pre>
&lt;Triangle
  v1="{x: 1, y: 0, y: 0}"
  v2="{x: 0, y: 1, y: 0}"
  v3="{x: 0, y: 0, y: 1}"
&gt;
</pre>
        </div>
      </div>
      <Renderer :size="{ w: 400, h: 400 }">
        <Scene>
          <Camera :position="{ z: 2.5 }" />
          <Mesh :rotation="{x: rotateX, y: rotateY, z: 0}">
            <template
              v-for="(a,j) in Array.from({ length: 14 }).map((_,i) => i + 3)"
              v-if="count == j"
            >
              <Triangle
                v-for="(c,i) in a"
                :v1="{x: cx(360 / a * c,1), y: 0, z: cy(360 / a * c,1)}"
                :v2="{x: cx(360 / a * (c + 1),1), y: 0, z: cy(360 / a * (c + 1),1)}"
                :v3="{ x: 0, y: 0, z: 0 }"
              />
            </template>
          <Stroke
            v-for="(c,i) in 3"
            :key="'b' + i"
            :from="{x: cx(360 / 3 * c,1.5), y: 0, z: cy(360 / 3 * c,1.5)}"
            :to="{x: cx(360 / 3 * (c + 1),1.5), y: 0, z: cy(360 / 3 * (c + 1),1.5)}"
          />
           <Stroke
            v-for="(c,i) in 200"
            :key="i"
            :from="{x: cx(1000 / 200 * c,1), y: i / 50, z: cy(1000 / 200 * c,1)}"
            :to="{x: cx(1000 / 200 * (c + 1),1), y: i / 49, z: cy(1000 / 200 * (c + 1),1)}"
          />
          </Mesh>
        </Scene>
      </Renderer> 
      <div>
        <h3>Rotation</h3>
        <label>X rotation axis <code>{{ rotateX }}</code></label>
        <input type="range" v-model="rotateX" step="0.01" max="4" />
        <label>Y rotation axis <code>{{ rotateY }}</code></label>
        <input type="range" v-model="rotateY" step="0.01" max="4" />
        <h3>Geometry</h3>
        <label>Polygon count <code>{{ parseInt(count) + 3 }}</code></label>
        <input type="range" v-model="count" max="13" />
      </div>
    </div>
    </div>
  `
});

---

import {
  Renderer,
  Scene,
  Camera,
  Light,
  Mesh,
  Stroke,
  Triangle,
  Icosahedron,
  Dodecahedron,
  RegularPolygon
} from "./three.js";

import { cx, cy, deg2rad } from "../components/utils.js";

new Vue({
  el: "#app",
  components: {
    Renderer,
    Scene,
    Camera,
    Light,
    Mesh,
    Stroke,
    Triangle,
    Icosahedron,
    Dodecahedron,
    RegularPolygon
  },
  data: () => ({ rotateX: 90, count: 8 }),
  methods: { deg2rad },
  computed: {
    points() {
      return Array.from({ length: this.count }).map((p, i) => ({
        x: cx((180 / this.count) * i, 1),
        y: cy((180 / this.count) * i, 1)
      }));
    }
  },
  template: `
  <div style="padding: 3rem;">
      <input style="width: 300px" type="range" v-model="rotateX" step="1" max="180" />
      <Renderer :size="{ w: 600, h: 600 }">
        <Scene>
          <Camera :position="{ z: 2.5 }" />
          <Mesh
            v-for="(point,i) in points"
            :key="i"
            :position="{y : point.y}"
            :rotation="{x: deg2rad(rotateX), y: 0, z: deg2rad(i % 2 ? rotateX * 2 : rotateX * -2) }">
            <RegularPolygon :count="count" :radius="point.x" />
          </Mesh>
        </Scene>
      </Renderer> 
    </div>
  `
});

