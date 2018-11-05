Vue.config.ignoredElements = ["a-scene", "a-sky", "a-box", "a-line"];

export default {
  tag: 'Experimental',
  description: `
A basic [A-Frame](https://aframe.io/) wrapper.
  `,
  template: `
    <a-scene embedded style="
      width: 250px;
      height: 250px;
    ">
      <a-entity position="0 0 2.5" camera look-controls />
      <a-sky color="white"></a-sky>
      <slot />
    </a-scene>
  `
};
