export default {
  name: "TwoScene",
  description: `A simple 2D SVG scene.`,
  example: `
<TwoScene>
  <Anime :alternate="true">
    <circle slot-scope={value} :r="value" />
  </Anime>
</TwoScene>
  `,
  props: { size: { default: 250 } },
  computed: {
    viewBox() {
      return `-${this.size / 2} -${this.size / 2} ${this.size} ${this.size}`;
    }
  },
  template: `
    <svg
        :width="size"
        :height="size"
        :view-box.camel="viewBox"
    >
      <slot />
    </svg>
  `
};
