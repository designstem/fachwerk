Vue.config.ignoredElements = ["a-scene", "a-sky", "a-box", "a-line"];

export default {
  tag: 'Experimental',
  description: `
A basic [A-Frame](https://aframe.io/) wrapper.
  `,
  props: {
    width: { default: 250, type: [Number,String] },
    height: { default: 250, type: [Number,String] },
    color: { default: '#111', type: String },
    timeout: { default: 700, type: Number }
  },
  template: `
    <a-scene embedded :style="{
      width: typeof width == 'number' ? width + 'px' : width,
      height: typeof height == 'number' ? height + 'px' : height,
    }">
      <a-camera>
        <a-cursor
          :fuse="true" 
          :fuse-timeout="timeout"
          material="color: #eee"
        />
      </a-camera>
      <a-sky :color="color"></a-sky>
      <slot />
    </a-scene>
  `
};
