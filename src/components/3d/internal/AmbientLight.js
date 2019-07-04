import { THREE } from "../../../../fachwerk.js";
import Object3D from "./Object3D.js";

export default {
  mixins: [Object3D],
  data () {
    let curObj = this.obj
    if (!curObj) {
      curObj = new THREE.AmbentLight(0x4000ff)
    }
    curObj.name = curObj.name || curObj.type
    return { curObj }
  }
}