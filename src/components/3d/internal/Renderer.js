import { THREE } from '../../../../dist/vendor.js'
import { SVGRenderer } from './SVGRenderer.js'

export default {
  provide() {
    return {
      parentObj: null,
      _baseUrl: null,
      global: this.global
    };
  },
  props: {
    renderer: { default: "svg", type: String },
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
      if (this.renderer == "svg") {
        curObj = new SVGRenderer({ antialias: true });
      }
      if (this.renderer == "webgl") {
        curObj = new THREE.WebGLRenderer({ antialias: true });
      }
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
}