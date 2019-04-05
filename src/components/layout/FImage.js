import { Css } from "../../../fachwerk.js";

export default {
  mixins: [Css],
  description: `
Displays an image.

<f-image src="../images/example.jpg" />
  `,
  props: {
    src: { default: "", type: String, description: "Image URL" }
  },
  template: `
    <p :style="{
      background: 'url(' + src + ')',
      backgroundSize: 'cover',
      backgroundCover: 'none',
      minHeight: 'var(--image-min-height)',
      height: '100%'
    }" />
  `,
  cssprops: {
    "--image-min-height": {
      default: "calc(var(--base) * 40)",
      description: "Image minimum height"
    }
  }
};
