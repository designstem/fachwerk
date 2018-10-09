import ThreeRegularPolygon from './ThreeRegularPolygon.js'
import { Object3D } from "./internal/three.js";

export default {
  mixins: [Object3D],
  description: `
[Zeit](https://www.youtube.com/watch?v=rjvF36gzLF8).
  `,
  example: `
<ThreeScene>
  <ThreeGrid />
  <ThreeCircle
    :position="{ x: 1, y: 1 }"
    :rotation="{ z: 45 }"
    :scale="{ x: 0.2, y: 0.2 }"
  />
</ThreeScene>
  `,
  components: { ThreeRegularPolygon },
  props: {
    r: { default: 1, type: Number },
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object },
    scale: { default: () => ({}), type: [Object, Number] },
  },
  template: `
    <ThreeRegularPolygon :radius="r" :count="64" />
  `
}