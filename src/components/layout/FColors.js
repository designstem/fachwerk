import { color } from "../../../fachwerk.js";

export default {
  description: `

<f-colors :colors="colors()" />

<p />
  `,
  props: {
    value: { default: -1, type: [Number, String] },
    colors: { default: [], type: Array },
    r: { default: 25, type: [Number, String] }
  },
  data: () => ({ currentCustom: "#000000", currentValue: null }),
  methods: {
    color,
    onClick(i) {
      this.currentValue = i;
      this.$emit("value", i);
      this.$emit("input", i);
    }
  },
  mounted() {
    this.$watch("value", value => (this.currentValue = value), {
      immediate: true
    });
  },
  template: `
  <div style="display: flex; flex-wrap: wrap;">
    <f-scene v-for="(c,i) in colors"
      :width="r"
      :height="r"
      :key="i"
      :style="{
        cursor: 'pointer',
      }"
      @click.native="onClick(i)"
    >
      <f-circle
        v-if="currentValue == i"
        r="1.8"
        stroke-width="2"
        :stroke="color('primary')"
      />
      <f-circle
        r="1.5"
        :fill="color(c)"
        stroke
      />
    </f-scene>
  </div>
  `
};
