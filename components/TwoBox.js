
export default {
  name: "TwoBox",
  description: `
**⚠️ Does not yet support 2D transformations...**

 ...but Kazimir Malevich must still be proud.  
  `,
  example: `
<TwoScene>
  <TwoGrid />
  <TwoBox />
</TwoScene>
  `,
  props: {
    x: { default: 0 },
    y: { default: 0 },
    width: { default: 1 },
    height: { default: 1 },
    fill: { default: "black" },
    opacity: { default: 1 }
  },
  template: `
    <rect
      :x="x - 0.5"
      :y="y - 0.5"
      :width="width"
      :height="height"
      :fill="fill"
      :opacity="opacity"
    />
  `
};