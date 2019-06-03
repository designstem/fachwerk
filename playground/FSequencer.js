export default {
  props: { bpm: { default: "120", type: [Number, String] } },
  mounted() {
    /*
    new Tone.MembraneSynth({
      envelope: {
        sustain: 0,
        attack: 0.02,
        decay: 0.8
      },
      octaves: 10
    }).toMaster();

    new Tone.Loop(t => {
      kick.triggerAttackRelease("C2", "8n", t);
    }, "4n").start(0);

    new Tone.NoiseSynth({
      volume: -5,
      envelope: {
        attack: 0.001,
        decay: 0.2,
        sustain: 0
      },
      filterEnvelope: {
        attack: 0.001,
        decay: 0.1,
        sustain: 0
      }
    }).toMaster();

    */

    var loop = new Tone.Sequence(
      (_, i) => {
        this.$emit(`beat${i + 1}`);
      },
      [0, 1, 2, 3, 4, 5, 6, 7],
      "8n"
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
