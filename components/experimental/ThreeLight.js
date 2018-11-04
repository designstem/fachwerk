import { Object3D } from "../3d/3d.js";

export default {
  mixins: [Object3D],
  props: {
    color: { default: 'white', type: [String, Number] },
    intensity: { default: 1, type: Number }
  },
  data() {
    let curObj = this.obj;
    if (!curObj) {
      curObj = new THREE.DirectionalLight(
        new THREE.Color(this.color),
        this.intensity
      );
    }
    curObj.name = curObj.name || curObj.type;
    return { curObj };
  }
};
