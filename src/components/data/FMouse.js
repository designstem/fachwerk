import { Vue, makeNumber, scale } from "../../../fachwerk.js";

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
    from: {
      default: 0,
      type: [Boolean, Number, String]
    },
    to: {
      default: false,
      type: [Boolean, Number, String]
    }
  },
  data: () => ({ x: 0, y: 0 }),
  computed: {
    currentMouse() {
      if (this.to) {
        return [
          scale(
            this.x,
            0,
            window.innerWidth,
            makeNumber(this.from),
            makeNumber(this.to)
          ),
          scale(
            this.y,
            0,
            window.innerHeight,
            makeNumber(this.from),
            makeNumber(this.to)
          )
        ];
      }
      return [this.x, this.y];
    }
  },
  methods: {
    onMouse({ pageX: x, pageY: y }) {
      this.x = x;
      this.y = y;
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

/*

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
    from: {
      default: 0,
      type: [Boolean, Number]
    },
    to: {
      default: false,
      type: [Boolean, Number]
    }
  },
  data: () => ({ x: 0, y: 0, pressed: false }),
  computed: {
    currentMouse() {
      if (this.to) {
        return {
          x: scale(this.x, 0, window.innerWidth, this.from, this.to),
          y: scale(this.x, 0, window.innerHeight, this.from, this.to)
        };
      }
      return { x: this.x, y: this.y };
    }
  },
  methods: {
    onMouseMove({ pageX: x, pageY: y }) {
      this.mouse = { x, y };
      this.$emit("value", this.currentMouse);
      this.$emit("input", this.currentMouse);
      if (this.send) {
        console.log(this.x, this.y);

        this.$global.$emit(this.send, this.currentMouse);
      }
      if (this.set) {
        Vue.set(this.$global.$data.state, this.set, this.currentMouse);
      }
    },
    onMousePressStart() {
      this.pressed = true;
    },
    onMousePressEnd() {
      this.pressed = false;
    }
  },

  mounted() {
    window.addEventListener("mousemove", this.onMouseMove);
    // window.addEventListener("mousedown", this.onMousePressStart);
    // window.addEventListener("mouseup", this.onMousePressEnd);
    // window.addEventListener("touchstart", this.onMousePressStart);
    // window.addEventListener("touchend", this.onMousePressEnd);
  },

  destroyed: function() {
    window.removeEventListener("mousemove", this.onMouseMove);
    // window.removeEventListener("mousedown", this.onMousePressStart);
    // window.removeEventListener("mouseup", this.onMousePressEnd);
    // window.removeEventListener("touchstart", this.onMousePressStart);
    // window.removeEventListener("touchend", this.onMousePressEnd);
  },
  template: `
  <div :value="{...currentMouse, pressed}" />
  `
};

*/
