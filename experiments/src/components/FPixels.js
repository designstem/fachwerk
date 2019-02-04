import { color, random } from "../../../utils.js";

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
    const imageData = ctx.createImageData(300, 300);
    for (let i = 0; i < imageData.data.length; i += 4) {
      imageData.data[i + 0] = random(0,255);
      imageData.data[i + 1] = random(0,255);
      imageData.data[i + 2] = random(0,255);
      imageData.data[i + 3] = 255;
    }
    ctx.putImageData(imageData, 0, 0);

  }
};
