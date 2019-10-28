import { Vue, set as setGlobal, send } from "../../../fachwerk.js";
import { scale } from "../../utils/math.js";

export default {
  props: {
    set: {
      default: "",
      type: String,
      description: "Name for global value to set"
    },
    send: {
      default: "",
      type: String,
      description: "Name for global event channel to send values to"
    },
    float: {
      default: false,
      type: Boolean,
      description:
        "Instead pixel values, return mouse coordinates as a floating point number between `0` and `1`"
    }
  },
  data: () => ({ mouse: { x: 0, y: 0 } }),
  computed: {
    currentMouse() {
      if (this.float) {
        return {
          mouse: {
            x: scale(this.mouse.x, 0, window.innerWidth, 0, 1),
            y: scale(this.mouse.x, 0, window.innerHeight, 0, 1)
          }
        };
      }
      return { mouse: { x: this.mouse.x, y: this.y } };
    }
  },
  methods: {
    onMouse({ pageX: x, pageY: y }) {
      this.mouse = { x, y };
      this.$emit("value", this.currentMouse);
      this.$emit("input", this.currentMouse);
      if (this.send) {
        this.$global.$emit(this.send, this.currentMouse);
      }
      if (this.set) {
        Vue.set(this.$global.$data.state, this.set, this.currentMouse);
      }
    }
  },

  mounted() {
    window.addEventListener("mousemove", this.onMouse);
  },

  destroyed: function() {
    window.removeEventListener("mousemove", this.onMouse);
  },
  template: `
  <div :value="currentMouse" />
  `
};
