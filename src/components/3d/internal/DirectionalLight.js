import { THREE } from "../../../../fachwerk.js";
import Object3D from "./Object3D.js";

export default {
  mixins: [Object3D],
  data () {
    let curObj = this.obj
    if (!curObj) {
      curObj = new THREE.DirectionalLight(0xffffff, 2)
      curObj.position.set(0, 0, -2)
    }
    curObj.name = curObj.name || curObj.type
    return { curObj }
  }
}