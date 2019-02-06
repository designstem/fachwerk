import { THREE } from '../../../../fachwerk.js'
import Object3D from './Object3D.js'

export default {
  mixins: [Object3D],
  inject: ["global"],
  props: {
    obj: { type: Object }
  },
  data() {
    let curObj = this.obj;
    if (!curObj) {
      curObj = new THREE.Scene();
    }
    curObj.name = curObj.name || curObj.type;
    return { curObj };
  },
  mounted() {
    let scene = this.curObj;
    this.global.scene = scene;
    window.scene = scene;
  }
};