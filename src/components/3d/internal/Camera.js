import { THREE } from "../../../../fachwerk.js";
import Object3D from "./Object3D.js";

export default {
  mixins: [Object3D],
  inject: ["global"],
  props: {
    obj: { type: Object },
    isometric: { default: false, type: Boolean }
  },
  data() {
    let curObj = this.obj;
    const { w, h } = this.global.rendererSize;
    if (!curObj) {
      curObj = this.isometric
        ? new THREE.OrthographicCamera(
            w / -150,
            w / 150,
            h / 150,
            h / -150,
            -1000,
            1000
          )
        : new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    }
    curObj.name = curObj.name || curObj.type;
    return { curObj };
  },
  mounted() {
    this.global.camera = this.curObj;
  }
};
