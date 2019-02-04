import { color, random, flatten } from "../../../utils.js";

export default {
  inject: ["provider"],
  props: {
    x: { default: 0, type: [Number, String] },
    y: { default: 0, type: [Number, String] },
    fill: { default: "black", type: [Number, String, Array, Object] }
  },
  computed: {
    currentFill() {
      return chroma(this.fill).rgb();
    },
    color() {
      return Array.from({ length: 300 * 300 }).map(p => [
        random(0, 255),
        random(0, 255),
        random(0, 255),
        255
      ]);
    }
  },
  render() {
    if (!this.provider.context) return;
    const ctx = this.provider.context;
    const imageData = ctx.createImageData(300, 300);
    let index = 0
    for (let i = 0; i < imageData.data.length; i += 4) {
      imageData.data[i + 0] = this.color[index][0];
      imageData.data[i + 1] = this.color[index][1];
      imageData.data[i + 2] = this.color[index][2];
      imageData.data[i + 3] = this.color[index][3];
      index++
    }
    ctx.putImageData(imageData, 0, 0);
  }
};
