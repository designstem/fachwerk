
import { Vue, require } from "../../../dist/vendor.js"
import { Css } from '../../../dist/mixins.js'

async function loadAframe() {
  await require('https://unpkg.com/aframe@0.8.2').catch(() => {})
  await require('https://unpkg.com/aframe-rounded@1.0.3').catch(() => {})
}
loadAframe()

Vue.config.ignoredElements = ["a-scene", "a-camera", "a-text", "a-entity", "a-cursor", "a-sky", "a-box", "a-sphere", "a-rounded"];

export default {
  mixins: [Css],
  description: `
A basic \`a-scene\` wrapper from [A-Frame](https://aframe.io/). Adds embedding, background color and look-based cursor. 

A-Frame is not included in standard Fachwerk release since it is a quite big library. Replace your vendor scripts in \`index.html\` with the following to use A-Frame:

    <script src="https://designstem.github.io/fachwerk/vendor_aframe.js"></script>

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
    embed: { default: true, type: Boolean }
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
  template: `
    <a-scene :embedded="embed" :style="style" class="f-aframe">
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
