
import { Vue, require } from "../../../vendor.js"
import { Css } from '../../../mixins.js'

// Vue.config.ignoredElements = ["a-scene", "a-camera", "a-text", "a-entity", "a-cursor", "a-sky", "a-box", "a-sphere", "a-rounded"];

export default {
  mixins: [Css],
  description: `
A basic \`a-scene\` wrapper from [A-Frame](https://aframe.io/). Adds embedding, background color and look-based cursor. 

A-Frame is not included in standard Fachwerk release. Add following lines to \`index.js\` to load A-Frame:

<pre>
import { loadAframe } from "https://designstem.github.io/fachwerk/vendor.js";

loadAframe()
</pre>

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
