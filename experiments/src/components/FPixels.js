import { color, random } from "../../../utils.js";

export default {
  inject: ["provider"],
  props: {
    x: { default: 0, type: [Number, String] },
    y: { default: 0, type: [Number, String] },
    fill: { default: "black", type: [Number, String, Array, Object] }
  },
  computed: {
    currentFill() {
      return chroma(this.fill).rgb()
    },
  },
  render() {
    if (!this.provider.context) return;
    const ctx = this.provider.context;
    const imageData = ctx.createImageData(300, 300);
    for (let i = 0; i < imageData.data.length; i += 4) {
      imageData.data[i + 0] = this.currentFill[0];
      imageData.data[i + 1] = this.currentFill[1];
      imageData.data[i + 2] = this.currentFill[2];
      imageData.data[i + 3] = 255;
    }
    ctx.putImageData(imageData, 0, 0);

  }
};
