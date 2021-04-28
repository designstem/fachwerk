import { Vue, range } from "../../../fachwerk.js";

export default {
  description: `
Step sequencer emitting eight-note \`beat1\` / \`beat2\` / \`...\` events based on the \`bpm\`.

<f-inline>
  <button v-on:click="send('start')">Start</button>
  <button v-on:click="send('stop')">Stop</button>
</f-inline>

<f-sequencer
  beats="4"
  v-on:beat="beat => set('beat', beat)"
/>

    Beat: {{ get('beat') }}

> This component needs extra installation to work. See **Making music** tutorial.
    `,
  props: {
    bpm: { default: "120", type: [Number, String] },
    beats: { default: "8", type: [Number, String] },
  },
  mounted() {
    new Tone.Sequence(
      (_, i) => {
        this.$emit("beat", i);
        this.$emit(`beat${i}`);
      },
      range(1, this.beats),
      `${this.beats}n`
    ).start(0);

    this.$watch("bpm", (bpm) => (Tone.Transport.bpm.value = parseFloat(bpm)), {
      immediate: true,
    });

    Vue.prototype.$global.$on("start", () => {
      Tone.start().then(() => Tone.Transport.start());
    });
    Vue.prototype.$global.$on("stop", () => Tone.Transport.stop());
  },
  template: `
  <div>
    <slot /> 
  </div>
  `,
};
