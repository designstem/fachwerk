export default {
  description: `
> This component requires ToneJS libray to installed https://unpkg.com/tone. You will also need to set [Chrome autoplay policy](chrome://flags/#autoplay-policy) to "No user gesture is required".

Polyphonic synthesizer emitting basic analog waves.

<f-synth v-slot="{ noteon, noteoff }">
  <button
    @mousedown="() => noteon('C4')"
    @mouseup="() => noteoff('C4')"
  >
    Play C4
  </button>
  <button
    @mousedown="() => noteon('D4')"
    @mouseup="() => noteoff('D4')"
  >
    Play D4
  </button>
</f-synth>

<p />
`,
  data: () => ({ synth: null }),
  mounted() {
    this.synth = new Tone.PolySynth(10, Tone.Synth).toMaster();
  },
  methods: {
    onNoteon(note = "C4") {
      this.synth.triggerAttack(note);
    },
    onNoteoff(note = "C4") {
      this.synth.triggerRelease(note);
    }
  },
  template: `
<div>
  <slot :noteon="onNoteon" :noteoff="onNoteoff" /> 
</div>
`
};
