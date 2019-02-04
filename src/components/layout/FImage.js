export default {
  description: `
Displays an image that fits to the parent size.

<f-image src="../images/sample.jpg" />
  `,
  props: {
    src: { default: "", type: String, description: "Image URL" }
  },
  template: `
    <div :style="{
      background: 'url(' + src + ')',
      backgroundSize: 'cover',
      _minHeight: 'calc(var(--base) * 40)',
      height: '100%'
    }" />
  `
};
