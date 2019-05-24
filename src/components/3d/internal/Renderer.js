import { THREE } from "../../../../fachwerk.js";
import { SVGRenderer } from "./SVGRenderer.js";

export default {
  provide() {
    return {
      parentObj: null,
      _baseUrl: null,
      global: this.global
    };
  },
  props: {
    webgl: { default: false, type: Boolean },
    size: {
      type: Object,
      required: true
    },
    obj: { type: Object },
    background: { type: String, default: "#ffffff" }
  },
  data() {
    let curObj = this.obj;
    if (!curObj) {
      curObj = this.webgl
        ? new THREE.WebGLRenderer({ antialias: true })
        : new SVGRenderer({ antialias: true });
      curObj.setClearColor(this.background);
    }
    curObj.name = curObj.name || curObj.type;
    curObj.setSize(this.size.w, this.size.h);
    // fixme: better solution for global vars
    let global = {};
    global.rendererSize = this.size;
    global.rendererDom = curObj.domElement;
    return { curObj, global };
  },
  mounted() {
    this.$refs.container.appendChild(this.curObj.domElement);
    this.animate();
  },
  methods: {
    animate() {
      requestAnimationFrame(this.animate);
      this.curObj.render(this.global.scene, this.global.camera);
    }
  },
  template: `
  <div>
    <slot></slot>
    <div ref="container"></div>
  </div>
  `
};
