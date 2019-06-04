export default {
  description: `
Synthesizer emitting drum sounds.

<f-drum v-slot="{ kick, snare, hihat }">
  <f-inline>
    <button @mousedown="kick">Kick</button>
    <button @mousedown="snare">Snare</button>
    <button @mousedown="hihat">Hihat</button>
  </f-inline>
</f-drum>

> This component needs extra installation to work. See **Making music** tutorial.

`,
  data: () => ({ kick: null, snare: null, hihat: null }),
  mounted() {
    this.kick = new Tone.MembraneSynth({
      envelope: {
        sustain: 0,
        attack: 0.02,
        decay: 0.8
      },
      octaves: 10
    }).toMaster();
    this.snare = new Tone.NoiseSynth({
      envelope: {
        attack: 0.001,
        decay: 0.3,
        sustain: 0
      },
      filterEnvelope: {
        attack: 0.001,
        decay: 0.1,
        sustain: 0
      }
    }).toMaster();
    this.hihat = new Tone.NoiseSynth({
			"filter" : {
				"Q" : 10
			},
			"envelope" : {
				"attack" : 0.01,
				"decay" : 0.04
			},
			"filterEnvelope" : {
				"attack" : 0.01,
				"decay" : 0.03,
				"baseFrequency" : 10000,
				"octaves" : -2.5,
				"exponent" : 4,
			}
    }).toMaster();
  },
  methods: {
    onKick() {
      this.kick.triggerAttackRelease("C2", "8n");
    },
    onSnare() {
      this.snare.triggerAttack();
    },
    onHihat() {
      this.hihat.triggerAttack();
    }
  },
  template: `
  <div>
    <slot :kick="onKick" :snare="onSnare" :hihat="onHihat" /> 
  </div>
  `
};
