import Css from "../Css.js";

export default {
  mixins: [Css],
  tag: '2D',
  description: `
A simple 2D scene with some tweaks to regular SVG document.

Note that **Y axis is flipped** and <code>x</code> and <code>y</code> span from <code>-2</code> to <code>2</code> to work same way as **ThreeScene**.
`,
  example: `
<f-scene grid="true">
  
  <!-- Coordinate centerpoint is at x:0, y: 0 -->
  <f-circle r="0.1" :fill="color('red')" />
  <f-text :fill="color('red')">x:0 y:0</f-text>

  <!-- Coordinates increase towards top right -->
  <f-circle r="0.1" x="1" y="1" :fill="color('blue')" />
  <f-text x="1" y="1" :fill="color('blue')">x:1 y:1</f-text>
  
  <!-- Regular SVG elements are OK as well here -->
  <circle cx="-1" cy="-1" r="0.1" fill="rebeccapurple" />

  <f-text x="-1" y="-1" :fill="color('purple')">
    x:-1 y:-1
  </f-text>
</f-scene>
  `,
  props: {
    width: { default: 250, type: Number },
    height: { default: 250, type: Number },
    grid: { default: false, type: Boolean },
    step: { default: 0.5, type: Number }
  }, 
  template: `
  <f-svg 
    :width="width"
    :height="height"
    :inner-x="-2"
    :inner-y="-2"
    :inner-width="4"
    :inner-height="4"
    :flip-y="true"
    class="f-scene"
  >
    <f-grid :step="step" v-if="grid" />
    <slot />
  </f-svg>
  `,
  css: `
  .f-scene text {
    font-family: var(--font-mono);
    font-size: 1.4%;
    transform: scale(1, -1);
    pointer-events: none;
  }
  `
};
