import { color } from "../../../fachwerk.js";

export default {
  description: `

<f-colors :colors="colors()" />

<p />
  `,
  props: {
    value: { default: -1, type: [Number, String] },
    colors: { default: [], type: Array }
  },
  data: () => ({ size: 24, currentCustom: "#000000", currentValue: null }),
  methods: {
    color,
    onClick(i) {
      this.currentValue = i;
      this.$emit('value', i)
      this.$emit('input', i)
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
      :width="size"
      :height="size"
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
        r="1.4"
        :fill="color(c)"
        stroke
      />
    </f-scene>
    <!--div style="position: relative; line-height: 0;">
      <div
        :style="{
          position: 'absolute',
          width: size + 'px',
          height: size + 'px',
          borderRadius: (size / 2) + 'px',
          background: currentCustom
        }"
      >&nbsp;</div>
      <input type="color" v-model="currentCustom"
        style="position: absolute; top: 0; left: 0; opacity: 1;" />
    </div-->
  </div>
  `
};
