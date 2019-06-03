import { range } from "../../../fachwerk.js"

export default {
  description: `
Step sequencer emitting eight-note \`beat1\` / \`beat2\` / \`...\` events based on the \`bpm\`.

<f-sequencer
  beats="4"
  v-on:beat="beat => set('beat', beat)"
/>

    Beat: {{ get('beat') }}

<blockquote>

Music libraries are not included with default Fachwerk installation. This component requires adding following libraries to your HTML file:

<p />

    <script src="https://unpkg.com/tone"></script>
    <script src="https://unpkg.com/webmidi"></script>
    
You will also need to set [Chrome autoplay policy](chrome://flags/#autoplay-policy) to *No user gesture is required*.

</blockquote>
  `,
  props: {
    bpm: { default: "120", type: [Number, String] },
    beats: { default: "8", type: [Number, String] }
  },
  mounted() {
    new Tone.Sequence(
      (_, i) => {
        this.$emit("beat", i);
        this.$emit(`beat${i}`);
      },
      range(1,this.beats),
      `${this.beats}n`
    ).start(0);

    Tone.Transport.start();

    this.$watch("bpm", bpm => (Tone.Transport.bpm.value = parseFloat(bpm)), {
      immediate: true
    });
  },
  template: `
  <div>
    <slot /> 
  </div>
  `
};
