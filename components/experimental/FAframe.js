Vue.config.ignoredElements = ["a-scene", "a-sky", "a-box", "a-line"];

export default {
  tag: 'Experimental',
  description: `
A basic [A-Frame](https://aframe.io/) wrapper.
  `,
  props: {
    width: { default: 250, type: Number },
    height: { default: 250, type: Number },
    color: { default: '#111', type: Number },
    timeout: { default: 1500, type: Number }
  },
  template: `
    <a-scene embedded :style="{
      width: width + 'px',
      height: height + 'px'
    }">
      <a-camera>
        <a-cursor
          :fuse="true" 
          :fuse-timeout="timeout"
          material="color: #fff"
        />
      </a-camera>
      <a-sky :color="color"></a-sky>
      <slot />
    </a-scene>
  `
};
