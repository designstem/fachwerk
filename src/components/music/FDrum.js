export default {
  description: `
Synthesizer emitting drum sounds.

<f-drum v-slot="{ kick, snare, closedhihat, openhihat  }">
  <f-inline>
    <button @mousedown="kick">Kick</button>
    <button @mousedown="snare">Snare</button>
    <button @mousedown="closedhihat">Closed hihat</button>
    <button @mousedown="openhihat">Open hihat</button>
  </f-inline>
</f-drum>

> This component needs extra installation to work. See **Making music** tutorial.

`,
  data: () => ({ kick: null, snare: null, openhihat: null, closedhihat: null }),
  mounted() {

    // from https://github.com/Tonejs/Tone.js/blob/dev/examples/shiny.html

    const compressor = new Tone.Compressor({
			"threshold" : -30,
			"ratio" : 6,
			"attack" : 0.3,
			"release" : 0.1
    }).toMaster();
    
    this.kick = new Tone.MembraneSynth({
			"pitchDecay" : 0.01,
			"octaves" : 6,
			"oscillator" : {
				"type" : "square4"
			},
			"envelope" : {
				"attack" : 0.001,
				"decay" : 0.2,
				"sustain" : 0
			}
		}).connect(compressor);

    // From https://github.com/Tonejs/Tone.js/blob/dev/examples/events.html

    this.snare = new Tone.NoiseSynth({
			"volume" : -5,
			"envelope" : {
				"attack" : 0.001,
				"decay" : 0.4,
				"sustain" : 0
			},
			"filterEnvelope" : {
				"attack" : 0.001,
				"decay" : 0.2,
				"sustain" : 0
			}
		}).toMaster();

    // From https://github.com/Tonejs/Tone.js/blob/dev/examples/funkyShape.html

    const lowpassFilter = new Tone.Filter({
      frequency: 12000
    }).toMaster();

    this.closedhihat = new Tone.NoiseSynth({
      volume: -10,
      filter: {
        Q: 2
      },
      envelope: {
        attack: 0.01,
        decay: 0.01
      },
      filterEnvelope: {
        attack: 0.01,
        decay: 0.03,
        baseFrequency: 4000,
        octaves: -2.5,
        exponent: 4
      }
    }).connect(lowpassFilter);

    this.openhihat = new Tone.NoiseSynth({
      volume: -10,
      filter: {
        Q: 2
      },
      envelope: {
        attack: 0.01,
        decay: 0.2
      },
      filterEnvelope: {
        attack: 0.01,
        decay: 0.03,
        baseFrequency: 4000,
        octaves: -2.5,
        exponent: 4
      }
    }).connect(lowpassFilter);

  },
  methods: {
    onKick() {
      this.kick.triggerAttackRelease("C1", "8n");
    },
    onSnare() {
      this.snare.triggerAttack();
    },
    onClosedhihat() {
      this.closedhihat.triggerAttack();
    },
    onOpenhihat() {
      this.openhihat.triggerAttack();
    },
  },
  template: `
  <div>
    <slot :kick="onKick" :snare="onSnare" :closedhihat="onClosedhihat" :openhihat="onOpenhihat" /> 
  </div>
  `
};
