export default {
  props: {
    src: { default: "", type: String, description: "Image URL" }
  },
  template2: `
    <img :src="src" style="object-fit: contain;" />
  `,
  template: `
    <div :style="{
      background: 'url(' + src + ')',
      backgroundSize: 'cover',
      height: '100%'
    }" />
  `
};
