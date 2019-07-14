import { Vue, color } from "../../../fachwerk.js";

export default {
  description: `
Displays the toggle control.

<f-toggle title="Toggle" />

<p />`,
  data: () => ({ size: 26, width: 1.6, padding: 2, innerValue: false }),
  props: {
    value: { default: false, type: [Boolean, Number] },
    title: { default: "", type: String },
    set: {
      default: "",
      type: String,
      description: "Name for global value to set"
    }
  },
  mounted() {
    this.$watch(
      "value",
      value => {
        this.innerValue = !!value;
      },
      {
        immediate: true
      }
    );
    this.$watch(
      "innerValue",
      innerValue => {
        this.$emit("value", innerValue);
        this.$emit("input", innerValue);
        if (this.set) {
          Vue.set(
            this.$global.$data.state,
            this.set,
            Number(innerValue)
          );
        }
      },
      {
        immediate: true
      }
    );
  },
  methods: {
    color,
    onClick() {
      this.innerValue = !this.innerValue;
    }
  },
  template: `
  <f-inline style="--inline-gap: calc(var(--base) / 2)">
  <f-artboard
    :width="size * width"
    :height="size"
  >
    <f-group @click.native="onClick">
      <rect
        :x="padding"
        :y="padding"
        :width="(size * width) - (padding * 2)"
        :height="size - (padding * 2)"
        :rx="(size - (padding * 2)) / 2"
        :ry="(size - (padding * 2)) / 2"
        :fill="color(innerValue ? 'green' : 'gray')"
        stroke-width="3"
        stroke="var(--primary)"
      />
      <f-circle
        :r="(size - (padding * 2)) / 2"
        :x="innerValue ? (size * width) - (size / 2) : size / 2"
        :y="size / 2"
        fill="white"
      />
    </f-group>
  </f-artboard>
  <div>{{ title }}</div>
  </f-inline>
  `
};
