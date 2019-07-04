import { THREE } from "../../../../fachwerk.js";
import Object3D from "./Object3D.js";

export default {
  mixins: [Object3D],
  data () {
    let curObj = this.obj
    if (!curObj) {
//      curObj = new THREE.AmbientLight(0xffffff, 0.4)
        curObj = new THREE.AmbientLight(0x616161, 0.4)
    }
    curObj.name = curObj.name || curObj.type
    return { curObj }
  }
}