export default {
  name: "TwoGrid",
  description: `
**⚠️ Does not yet support 2D transformations.**

As the classic once [wrote](http://printingcode.runemadsen.com/lecture-grid/), there is nothing worse for an artist than a blank canvas.
  `,
  example: `
<TwoScene>
  <TwoGrid />
</TwoScene>
  `,
  template: `
  <g>
    <line
      v-for="x in [-2,-1,0,1,2]"
      :x1="x"
      :y1="-3"
      :x2="x"
      :y2="3"
      :stroke="'rgba(0,0,0,' + (x == 0 ? 0.5: 0.2) + ')'"
    />
    <line
      v-for="y in [-2,-1,0,1,2]"
      :x1="-3"
      :y1="y"
      :x2="3"
      :y2="y"
      :stroke="'rgba(0,0,0,' + (y == 0 ? 0.5: 0.2) + ')'"
    />
  </g>
  `
};
