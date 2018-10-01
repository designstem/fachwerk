import { Object3D } from "./internal/three.js";

export default {
  name: "ThreeLine",
  example: `
<ThreeScene>
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
  props: { points: { default: [] } },
  data() {
    let curObj = this.obj;
    if (!curObj) {
      var material = new THREE.LineBasicMaterial({
        color: 0x333333,
        linewidth: 3
      });
      var geometry = new THREE.Geometry();
      this.points.forEach(p => {
        geometry.vertices.push(new THREE.Vector3(p.x, p.y, p.z));
      });
      curObj = new THREE.Line(geometry, material);
    }
    curObj.name = curObj.name || curObj.type;
    return { curObj };
  }
};