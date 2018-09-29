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
  Polygon2
} from "./three.js";

import { cx, cy } from "../components/utils.js";

const RegularPolygon2 = {
  components: {
    Polygon2
  },
  props: ["count", "radius"],
  computed: {
    points() {
      return Array.from({
        length: this.count
      }).map((p, i) => ({
        x: cx((360 / this.count) * i, this.radius),
        y: cy((360 / this.count) * i, this.radius)
      }));
    }
  },
  template: `
    <Polygon2 :points="points"/>
  `
};

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
    RegularPolygon2
  },
  data: () => ({ rotateX: 2, rotateY: 0, count: 16 }),
  methods: { cx, cy },
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
      <input style="width: 300px" type="range" v-model="rotateX" step="0.01" max="4" />
      <Renderer :size="{ w: 600, h: 600 }">
        <Scene>
          <Camera :position="{ z: 2.5 }" />
          <Mesh
            v-for="point in points"
            :position="{y : point.y}"
            :rotation="{x: rotateX }">
            <RegularPolygon2 :count="count" :radius="point.x" />
          </Mesh>
        </Scene>
      </Renderer> 
    </div>
  `
});
