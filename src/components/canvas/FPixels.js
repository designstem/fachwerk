export default {
  inject: ["provider"],
  description: `
Creates a bitmap on a canvas from \`width × height \` array of pixels. Each pixel is going through \`:pixel\` function that returns pixel color as  \`[r,g,b,a]\`.

<f-canvas>
  <f-pixels :pixel="index => [random(0,255),random(0,255),random(0,255),255]" />
</f-canvas>

<p />
  `,
  props: {
    pixel: { default: index => [0,0,0,255], type: Function }
  },
  render() {
    if (!this.provider.context) return;
    const ctx = this.provider.context;
    const { width, height } = ctx.canvas
    const imageData = ctx.createImageData(width, height);
    const color = Array.from({ length: width * height }).map(this.pixel);
    let index = 0
    for (let i = 0; i < imageData.data.length; i += 4) {
      imageData.data[i + 0] = color[index][0];
      imageData.data[i + 1] = color[index][1];
      imageData.data[i + 2] = color[index][2];
      imageData.data[i + 3] = color[index][3];
      index++
    }
    ctx.putImageData(imageData, 0, 0);
  }
};
