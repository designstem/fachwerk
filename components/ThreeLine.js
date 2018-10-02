import { Object3D } from "./internal/three.js";

export default {
  name: "ThreeLine",
  example: `
<ThreeScene>
  <ThreeGrid />
  <ThreeLine
    :points="[
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
    ]"
  />
  </ThreeScene>
  `,
  mixins: [Object3D],
  props: {
    points: { default: [] },
    stroke: { default: 'black' },
    strokeWidth: { default: 3 }
  },
  data() {
    let curObj = this.obj;
    if (!curObj) {
      const geometry = new THREE.Geometry();
      this.points.forEach(p => {
        geometry.vertices.push(new THREE.Vector3(p.x || 0, p.y || 0, p.z || 0));
      });
      const material = new THREE.LineBasicMaterial({
        color: this.stroke,
        linewidth: this.strokeWidth
      });
      curObj = new THREE.Line(geometry, material);
    }
    curObj.name = curObj.name || curObj.type;
    return { curObj };
  }
};