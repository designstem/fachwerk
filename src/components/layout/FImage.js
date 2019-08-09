import { Css } from "../../../fachwerk.js";

export default {
  mixins: [Css],
  description: `
Displays an image.

<f-image src="../images/example.jpg" />

<p />

  `,
  props: {
    src: { default: "", type: String, description: "Image URL" },
    size: { default: "cover", type: String, description: "Background size: `cover`, `contain` or other css `value`" },
    position: { default: "center", type: String, description: "Background position: `50% 75%`, `center bottom` or other css `value`" },
    repeat: { default: "no-repeat", type: String, description: "Background repeat" },
    height: { default: "100%", type: String, description: "Image height" },
    minHeight: { default: "calc(var(--base) * 40)", type: String, description: "Image minimum height" },
  },
  template: `
    <div :style="{
      background: 'url(' + src + ')',
      backgroundSize: size,
      backgroundPosition: position,
      backgroundRepeat: repeat,
      minHeight: minHeight,
      height: height
    }">&nbsp;</div>
  `,
  cssprops: {
    "--image-min-height": {
      default: "20vh",
      description: "Image minimum height"
    }
  }
};
