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
    // size: { default: "cover", type: String, description: "Background size: `cover`, `contain` or other css `value`" },
    // position: { default: "center", type: String, description: "Background position: `50% 75%`, `center bottom` or other css `value`" },
    // repeat: { default: "no-repeat", type: String, description: "Background repeat" },
    // height: { default: "100%", type: String, description: "Image height" },
    // minHeight: { default: "calc(var(--base) * 40)", type: String, description: "Image minimum height" },
  },
  template: `
    <div 
      :style="{ 
        background: 'url(' + src + ')',
        backgroundSize: 'var(--image-size)', 
        backgroundPosition: 'var(--image-position)', 
        backgroundRepeat: 'var(--image-repeat)',
        height: 'var(--image-height)',
        minHeight: 'var(--image-min-height)',
      }"
      >&nbsp;</div>
  `,
  cssprops: {
    "--image-height": {
      default: "100%",
      description: "Image minimum height"
    },
    "--image-min-height": {
      default: "20vh",
      description: "Image minimum height"
    },
    "--image-size": {
      default: "cover",
      description: "Background size: `cover`, `contain` or other css `value`"
    },
    "--image-position": {
      default: "center",
      description: "Background position: `50% 75%`, `center bottom` or other css `value`"
    },
    "--image-repeat": {
      default: "no-repeat",
      description: "Background repeat: `repeat`, `repeat-x` or other css `value`"
    },
  }
};
