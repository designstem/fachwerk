export default {
  description: `
<f-midi-out v-slot="{ noteon, noteoff, cc }">
  <button
    v-on:mousedown="() => noteon('C4')"
    v-on:mouseup="() => noteoff('C4')"
  >
    Send C4
  </button>
  <button
    v-on:mousedown="() => noteon('D4')"
    v-on:mouseup="() => noteoff('D4')"
  >
    Send D4
  </button>
  <p />
  <f-slider
    title="Send CC 2"
    to="127"
    integer
    v-on:value="value => cc(value, 2)"
  />
</f-midi-out>

> This component needs extra installation to work. See **Making music** tutorial.
  `,
  props: {
    cc: { default: 0, type: [Number, String] },
    channel: { default: 1, type: [Number, String] },
    device: { default: "all", type: [Number, String] }
  },
  data: () => ({
    outputs: []
  }),
  mounted() {
    WebMidi.enable(() => {
      this.outputs = WebMidi.outputs;
    });
  },
  methods: {
    sendNoteon(note = "C4", velocity = 127) {
      // Handle pointer events
      if (typeof note == "object") {
        note = "C4";
      }
      this.outputs
        .filter((_, i) => (this.device == "all" ? true : this.device == i))
        .forEach(output => {
          output.playNote(note, parseInt(this.channel), {
            rawVelocity: true,
            velocity
          });
        });
    },
    sendNoteoff(note = "C4") {
      this.outputs
        .filter((_, i) => (this.device == "all" ? true : this.device == i))
        .forEach(output => {
          output.stopNote(note, parseInt(this.channel));
        });
    },
    sendCc(value, cc = null) {
      this.outputs
        .filter((_, i) => (this.device == "all" ? true : this.device == i))
        .forEach(output => {
          output.sendControlChange(
            parseInt(cc || this.cc),
            value,
            parseInt(this.channel)
          );
        });
    }
  },
  template: `
  <div>
    <slot :cc="sendCc" :noteon="sendNoteon" :noteoff="sendNoteoff" /> 
  </div>
  `
};
