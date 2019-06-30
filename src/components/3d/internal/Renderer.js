import { THREE, Vue, send } from "../../../../fachwerk.js";
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
    static: { default: false, type: Boolean },
    size: {
      type: Object,
      required: true
    },
    obj: { type: Object },
    background: { type: String, default: "#ffffff" },
    id: { default: "scene", type: String },
    download: { default: false, type: Boolean }
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
    Vue.prototype.$global.$on("download", id => {
      if (id && this.id == id) {
        this.onDownload();
      }
    });
    this.$refs.container.appendChild(this.curObj.domElement);
    this.animate();
  },
  methods: {
    send,
    animate() {
      if(!this.static){
        requestAnimationFrame(this.animate);
      }
      this.curObj.render(this.global.scene, this.global.camera);
    },
    onDownload() {
      const svg = this.curObj.domElement.outerHTML;
      const svgBlob = new Blob([svg], { type: "image/svg+xml" });
      const url = URL.createObjectURL(svgBlob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", `${this.id}.svg`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  },
  template: `
  <div>
    <slot></slot>
    <div ref="container"></div>
    <button v-if="download && !webgl" class="quaternary" @click="onDownload">⤓</button>
  </div>
  `
};
