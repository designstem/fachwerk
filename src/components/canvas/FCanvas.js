import { Vue, send } from "../../../fachwerk.js";

export default {
  description: `
Creates a 2D bitmap canvas. Use \`<f-pixel>\` and \`<f-pixels>\` to draw on it.

<f-canvas>
</f-canvas>
  `,
  props: {
    width: {
      default: 300,
      type: [Number, String],
      description: "Canvas width in pixels"
    },
    height: {
      default: 300,
      type: [Number, String],
      description: "Canvas height in pixels"
    },
    id: { default: "canvas", type: String },
    download: { default: false, type: Boolean }
  },
  data: () => ({
    provider: {
      context: null
    }
  }),
  provide() {
    return {
      provider: this.provider
    };
  },
  mounted() {
    this.provider.context = this.$refs.canvas.getContext("2d");
    this.$refs.canvas.width = this.width;
    this.$refs.canvas.height = this.height;
    Vue.prototype.$global.$on("download", id => {
      if (id && this.id == id) {
        this.onDownload();
      }
    });
  },
  methods: {
    send,
    onDownload() {
      this.$refs.canvas.toBlob(blob => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `${this.id}.png`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      });
    }
  },
  template: `
  <div class="canvas">
    <canvas ref="canvas" />
    <slot />
    <br />
    <button v-if="download" class="quaternary" @click="onDownload">⤓</button>
  </div>
`
};
