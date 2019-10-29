import { Vue, makeNumber, scale } from "../../../fachwerk.js";

export default {
  description: `

Returns mouse coordinates

#### Setting a global value

<f-mouse set="m1" />

    {{ get('m1') }}

#### Setting a local value

<f-mouse v-slot="{ value: m2 }">

	  {{ m2 }}

</f-mouse>

#### Sending and receiving events

Simplest way to send mouse events to other listeners is to use \`send\` parameter when you have to specify event channel name:

<f-mouse send="m3" />

<f-receive receive="m3" v-slot="{ value: m3 }">

    {{ m3 }}

</f-receive>

#### Custom mouse events handling

To set up a custom way to handle \`<f-mouse>\` events, you have to listen \`@value\` event, define event callback function and do anything there with mouse data.

Here is a sample where we just use mouse x-coordinate, use \`set\` helper to set global state \`x\` and \`send\` helper send the mouse events to other listeners.

<f-mouse 
  @value="([x,y]) => { set('x', x); send('x', x) }"
/>

    {{ get('x') }}

<f-receive receive="x" v-slot="{ value: x }">

    {{ x }}

</f-receive>


  `,
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
  <div><slot :value="currentMouse" /></div>
  `
};
