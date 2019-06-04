export default {
  description: `
Outputs MIDI input and output info.

<f-midi-info />
  `,
  data: () => ({ inputs: [], outputs: [] }),
  mounted() {
    WebMidi.enable(() => {
      this.inputs = WebMidi.inputs.map(i => i.name || "Unknown MIDI input");
      this.outputs = WebMidi.outputs.map(i => i.name || "Unknown MIDI output");
    });
  },
  methods: {
    defaultInput() {
      return [{
        Usage: `\`<f-midi-in />\``,
        Description: "**Receives input from all MIDI in devices**"
      }]
    },
    formatInput(name, i) {
      return { Usage: `\`<f-midi-in device="${i}" />\``, Description: name };
    },
    defaultOutput() {
      return [{
        Usage: `\`<f-midi-out />\``,
        Description: "**Sends output to all MIDI out devices**"
      }]
    },
    formatOutput(name, i) {
      return { Usage: `\`<f-midi-out device="${i}" />\``, Description: name };
    }
  },
  template: `
<div>
  <h4>Inputs</h4>
  <f-table
    v-if="inputs.length"
    :rows="defaultInput().concat(inputs.map(formatInput))"
  />
  <blockquote v-else>No MIDI inputs</blockquote>
  <h4>Outputs</h4>
  <f-table
    v-if="outputs.length"
    :rows="defaultOutput().concat(outputs.map(formatOutput))"
  />
  <blockquote v-else>No MIDI outputs</blockquote>
</div>
  `
};
