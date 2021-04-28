export default {
  description: `
Polyphonic synthesizer emitting basic analog waves.

<f-buttons :buttons="['sine','square','triangle','sawtooth']" set="o" />

<f-synth :osc="['sine','square','triangle','sawtooth'][get('o',0)]" v-slot="{ noteon, noteoff }">
  <f-piano
    v-on:noteon="noteon"
    v-on:noteoff="noteoff"
  />
</f-synth>

<p />

> This component needs extra installation to work. See **Making music** tutorial.
`,
  props: {
    osc: {
      default: "sine",
      type: String,
      description:
        "Oscillator type, either `sine`, `square`, `triangle` or `sawtooth`",
    },
  },
  data: () => ({ synth: null }),
  mounted() {
    this.synth = new Tone.PolySynth(Tone.MonoSynth).toDestination();
    this.$watch(
      "osc",
      (osc) => {
        this.synth.set({
          oscillator: {
            type: osc,
          },
        });
      },
      { immediate: true }
    );
    // filter: {
    //   type: "highpass"
    // },
    // envelope: {
    //   attack: 0.25
    // }
  },
  methods: {
    onNote(note = "C4", length = "8n") {
      this.synth.triggerAttackRelease(note, length);
    },
    onNoteon(note = "C4") {
      this.synth.triggerAttack(note);
    },
    onNoteoff(note = "C4") {
      this.synth.triggerRelease(note);
    },
  },
  template: `
<div>
  <slot :note="onNote" :noteon="onNoteon" :noteoff="onNoteoff" /> 
</div>
`,
};
