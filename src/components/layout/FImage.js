import { Css } from "../../../fachwerk.js";

export default {
  mixins: [Css],
  description: `
Displays an image.

<f-image src="../images/example.jpg" />

<p />

  `,
  props: {
    src: { default: "", type: String, description: "Image URL" }
  },
  template: `
    <div :style="{
      background: 'url(' + src + ')',
      backgroundSize: 'cover',
      backgroundRepeat: 'none',
      minHeight: 'calc(var(--base) * 40)',
      height: '100%'
    }">&nbsp;</div>
  `,
  cssprops: {
    "--image-min-height": {
      default: "20vh",
      description: "Image minimum height"
    }
  }
};
