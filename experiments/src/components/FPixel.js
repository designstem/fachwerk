import { color } from "../../../utils.js";

export default {
  inject: ["provider"],
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
