export default {
  props: {
    cc: { default: 0, type: [Number, String] },
    channel: { default: 1, type: [Number, String] },
    device: { default: "", type: [Number, String] }
  },
  data: () => ({
    outputs: []
  }),
  mounted() {
    WebMidi.enable(() => {
      this.outputs = WebMidi.outputs
    });
  },
  methods: {
    sendCc(value) {
      this.outputs.forEach(output => {
        output.sendControlChange(parseInt(this.cc), value, parseInt(this.channel))
      });
    },
    sendNoteon(note = "C5", velocity = 127) {
      // Handle pointer events
      if (typeof note == 'object') {
        note = 'C5'
      }
      this.outputs.forEach(output => {
        output.playNote(note, parseInt(this.channel), {
          rawVelocity: true,
          velocity
        });
      });
    },
    sendNoteoff(note = 'C5') {
      this.outputs.forEach(output => {
        output.stopNote(note, parseInt(this.channel))
      });
    }
  },
  template: `
  <div>
    <slot :cc="sendCc" :noteon="sendNoteon" :noteoff="sendNoteoff" /> 
  </div>
  `
};


/*

export default {
  props: {
    cc: { default: 0, type: [Number, String] },
    channel: { default: 1, type: [Number, String] },
    device: { default: "", type: [Number, String] }
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
    sendCc(value) {
      this.outputs.forEach(output => {
        output.sendControlChange(this.cc, value, parseInt(this.channel));
      });
    },
    sendNoteon(note = "C5", velocity = 127) {
      // Handle pointer events
      // if (typeof note == 'object') {
      //   note = 'C5'
      // }
      this.outputs.forEach(output => {
        output.playNote(note, parseInt(this.channel), /*{
          rawVelocity: true,
          velocity
        });
      });
    },
    sendNoteoff(note = "C5") {
      this.outputs.forEach(output => {
        output.stopNote(note, parseInt(this.channel));
      });
    }
  },
  template: `
  <div>
    <slot :cc="sendCc" :noteon="sendNoteon" :noteoff="sendNoteoff" /> 
  </div>
  `
};

*/