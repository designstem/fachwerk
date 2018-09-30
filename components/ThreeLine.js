import { Object3D } from "./internal/three.js";

export default {
  name: "ThreeLine",
  example: `
<ThreeScene>
  <ThreeLine
    :from="{x: 0, y: 0, z: 0}"
    :to="{x: 1, y: 0, z: 0}"
  />
  <ThreeLine
    :from="{x: 0, y: 0, z: 0}"
    :to="{x: 0, y: 1, z: 0}"
  />
  </ThreeScene>
  `,
  mixins: [Object3D],
  props: ["from", "to"],
  data() {
    let curObj = this.obj;
    if (!curObj) {
      var material = new THREE.LineBasicMaterial({
        color: 0x333333,
        linewidth: 3
      });
      var geometry = new THREE.Geometry();
      geometry.vertices.push(
        new THREE.Vector3(this.from.x, this.from.y, this.from.z)
      );
      geometry.vertices.push(
        new THREE.Vector3(this.to.x, this.to.y, this.to.z)
      );
      curObj = new THREE.Line(geometry, material);
    }
    curObj.name = curObj.name || curObj.type;
    return { curObj };
  }
};