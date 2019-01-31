Vue.config.ignoredElements = ["a-scene", "a-sky", "a-box", "a-line"];

export default {
  tag: 'Vr',
  description: `
A basic [A-Frame](https://aframe.io/) wrapper.
  `,
  props: {
    width: { default: 250, type: [Number,String] },
    height: { default: 250, type: [Number,String] },
    backgroundColor: { default: '#111', type: String },
    cursorColor: { default: '#ddd', type: String },
    cursorTimeout: { default: 700, type: Number },
    embed: { default: true, type: Boolean }
  },
  computed: {
    style() {
      if (this.embed) {
        return {
          width: typeof this.width == 'number' ? this.width + 'px' : this.width,
          height: typeof this.height == 'number' ? this.height + 'px' : this.height
        }
      }
    }
  },
  template: `
    <!--a-scene :embedded="embed" :style="style"-->
    <a-scene :embedded="embed" :style="style">
      <a-camera>
        <a-cursor
          :fuse="true" 
          :fuse-timeout="cursorTimeout"
          :material="{color: cursorColor}"
          raycaster="objects: .clickable"
        />
      </a-camera>
      <a-sky :color="backgroundColor"></a-sky>
      <slot />
    </a-scene>
  `
};
