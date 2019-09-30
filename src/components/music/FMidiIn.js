export default {
  description: `
Receives MIDI notes and control channel messages from MIDI input.

<f-midi-in
    @noteon="note => set('noteon', note)"
    @noteoff="note => set('noteoff', note)"
    @cc="cc => set('cc', cc)"
/>

<pre>
Noteon: {{ get('noteon') }}
Noteoff: {{ get('noteoff') }}
CC: {{ get('cc') }}
</pre>

> This component needs extra installation to work. See **Making music** tutorial.
`,
  props: {
    cc: { default: "all", type: [Number, String] },
    device: { default: "all", type: [Number, String] }
  },
  mounted() {
    WebMidi.enable(() => {
      WebMidi.inputs
        .filter((_, i) => (this.device == "all" ? true : this.device == i))
        .forEach((input, i) => {
          input.addListener("controlchange", "all", ({ value, controller }) => {
            this.$emit("data", {
              type: "cc",
              cc: controller.number,
              name: controller.name,
              value,
              device: i
            });
            if (this.cc == "all") {
              this.$emit("cc", value);
            } else {
              if (controller.number == this.cc) {
                this.$emit("cc", value);
              }
            }
          });
          input.addListener("noteon", "all", ({ note }) => {
            const { name, octave, number } = note;
            this.$emit("data", {
              type: "noteon",
              name,
              octave,
              number,
              note: name + octave,
              device: i
            });
            this.$emit("noteon", name + octave);
          });
          input.addListener("noteoff", "all", ({ note }) => {
            const { name, octave, number } = note;
            this.$emit("data", {
              type: "noteoff",
              name,
              octave,
              number,
              note: name + octave,
              device: i
            });
            this.$emit("noteoff", name + octave);
          });
        });
    });
  },
  template: `
  <div>
    <slot /> 
  </div>
  `
};
