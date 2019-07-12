import { THREE } from "../../../../fachwerk.js";
import Object3D from "./Object3D.js";

export default {
  mixins: [Object3D],
  props: { color: { default: 0xffffff, type: [Number, String]}},
  data () {
    let curObj = this.obj
    if (!curObj) {
        curObj = new THREE.AmbientLight(this.color, 0.4)
    }
    curObj.name = curObj.name || curObj.type
    return { curObj }
  }
}