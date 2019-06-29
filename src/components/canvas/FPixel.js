import { color } from "../../../fachwerk.js";

export default {
  inject: ["provider"],
  description: `
Draws a single pixel onto a 2D canvas.

> For drawing multiple pixels, use more performant \`f-pixels\`.

<f-canvas>
  <f-pixel v-for="p in 300" :key="p" :x="random(0,300)" :y="random(0,300)" />
</f-canvas>

<p />
    `,
  props: {
    x: { default: 0, type: [Number, String] },
    y: { default: 0, type: [Number, String] },
    fill: { default: "color('primary')", type: [Number, String] }
  },
  computed: {
    currentFill() {
      return this.stroke == "color('primary')" ? color('primary') : this.fill
    }
  },
  render() {
    if (!this.provider.context) return;
    const ctx = this.provider.context;
    ctx.fillStyle = this.currentFill;
    ctx.fillRect(this.x, this.y, 1, 1);
  }
};
