import { THREE } from '../../../../dist/vendor.js'
import {
  positionTransform3,
  rotationTransform3,
  scaleTransform3
} from "../../../../dist/utils.js";

import Base from './Base.js'

export default {
  mixins: [Base],
  provide() {
    return {
      parentObj: this.curObj
    };
  },
  inject: ["parentObj"],
  props: {
    name: { type: String },
    type: { type: String, default: "Object3D" },
    obj: { type: Object },
    scale: { type: [Object, Number, Array, String] },
    position: { type: [Object, Array, String] },
    rotation: { type: [Object, Array, String] }
  },
  watch: {
    scale: {
      deep: true,
      handler(v) {
        this.setScale(v);
      }
    },
    position: {
      deep: true,
      handler(v) {
        Object.assign(this.curObj.position, positionTransform3(v));
      }
    },
    rotation: {
      deep: true,
      handler(v) {
        Object.assign(this.curObj.rotation, rotationTransform3(v));
      }
    },
    obj(obj) {
      this.curObj = obj;
    },
    curObj(obj, oldObj) {
      this.unsetObj(oldObj);
      this.setObj(obj);
    }
  },
  data() {
    let curObj = this.obj;
    if (!curObj) {
      curObj = new THREE[this.type]();
    }
    return { curObj };
  },
  mounted() {
    this.setObj(this.curObj);
  },
  beforeDestroy() {
    this.unsetObj(this.curObj);
  },
  methods: {
    setObj(obj) {
      obj.name = this.name || obj.name || obj.type;
      Object.assign(this.curObj.position, positionTransform3(this.position));
      Object.assign(this.curObj.rotation, rotationTransform3(this.rotation));
      this.setScale(scaleTransform3(this.scale));
      if (this.parentObj) {
        this.parentObj.add(obj);
      }
      this.$emit("update:obj", obj);
    },
    unsetObj(obj) {
      this.$emit("update:obj", null);
      if (this.parentObj) {
        this.parentObj.remove(obj);
      }
    },
    setScale(v) {
      if (v && typeof v === "number") {
        v = { x: v, y: v, z: v };
      }
      Object.assign(this.curObj.scale, v);
    }
  }
};