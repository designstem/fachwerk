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
