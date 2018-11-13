Vue.config.ignoredElements = ["a-scene", "a-sky", "a-box", "a-line"];

export default {
  tag: 'Experimental',
  description: `
A basic [A-Frame](https://aframe.io/) wrapper.
  `,
  props: {
    width: { default: 250, type: Number },
    height: { default: 250, type: Number },
    color: { default: 'black', type: Number },
  },
  template: `
    <a-scene embedded :style="{
      width: width + 'px',
      height: height + 'px'
    }">
      <a-entity position="0 0 2.5" camera look-controls />
      <a-sky :color="color"></a-sky>
      <slot />
    </a-scene>
  `
};
