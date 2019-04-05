
import { Css } from '../../../fachwerk.js'

export default {
  mixins: [Css],
  description: `
A basic \`a-scene\` wrapper from [A-Frame](https://aframe.io/). Adds embedding, background color and look-based cursor. 

A-Frame is not included in standard Fachwerk release. Add following lines to \`index.html\` to load A-Frame:

    <script src="https://unpkg.com/aframe"></script>
    <script src="https://unpkg.com/aframe-rounded"></script>

<f-aframe>
  <a-sphere position="0 0 -10" />
</f-aframe>
  `,
  props: {
    width: { default: 300, type: [Number, String] },
    height: { default: 300, type: [Number, String] },
    backgroundColor: { default: "#111", type: String },
    cursorColor: { default: "#ddd", type: String },
    cursorTimeout: { default: 700, type: Number },
    embed: { default: true, type: Boolean },
    shadow: { default: 'basic', type: String, description: '`basic`, `pcf` or `pcfsoft`' }
  },
  computed: {
    style() {
      if (this.embed) {
        return {
          width: typeof this.width == "number" ? this.width + "px" : this.width,
          height:
            typeof this.height == "number" ? this.height + "px" : this.height
        };
      }
    }
  },
  methods: {
    // @TODO remove this
    // resize() {
    //   setTimeout(() => window.dispatchEvent(new Event('resize')),100)
    // }
  },
  mounted() {
    // @TODO remove this
    //
    // if (this.$global) {
    //   this.$global.$on("next", () => this.resize());
    //   this.$global.$on("prev", () => this.resize());
    //   this.$global.$on("first", () => this.resize());
    //   this.$global.$on("last", () => this.resize());
    //   this.$global.$on("goto", () => this.resize());
    // }
  },
  template: `
    <a-scene shadow="'type: ' + type" :embedded="embed" :style="style" class="f-aframe">
      <a-camera>
        <a-cursor
          :fuse="true" 
          :fuse-timeout="cursorTimeout"
          :material="{color: cursorColor}"
          raycaster="objects: .clickable"
        />
      </a-camera>
      <a-sky :color="backgroundColor"></a-sky>
      <slot />
    </a-scene>
  `,
  css: `
    .f-aframe + * {
      margin-top: var(--base2);
    }
  `
};
