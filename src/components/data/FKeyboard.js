import { titlecase } from '../../../fachwerk.js'

export default {
  props: {
    character: { default: "a", type: String },
    alt: { default: false, type: [Boolean, String] },
    ctrl: { default: false, type: [Boolean, String] }
  },
  description: `
Listens keypresses and emits \`v-on:keydown\` and \`v-on:keyup\` events.

<f-keyboard
  ctrl
  alt
  character="a"
  v-on:keydown="set('keyboard', 1 - get('keyboard', 0))"
/>

Press <kbd>Ctrl</kbd> <kbd>Alt</kbd> <kbd>a</kbd>

<h1 v-if="get('keyboard',0)"><big>💥</big></h1>

  `,
  computed: {
    code() {
      if (this.character == 'top' ||  this.character == 'right' ||  this.character == 'bottom' ||  this.character == 'left') {
        return `Arrow${titlecase(this.character)}`
      }
      return `Key${titlecase(this.character)}`
    }
  },
  mounted() {
    document.addEventListener("keydown", e => {
      if ((e.altKey || !this.alt) && (e.ctrlKey || !this.ctrl) && e.code == this.code) {
        this.$emit("keydown");
        e.preventDefault();
      }
    });
    document.addEventListener("keyup", e => {
      if ((e.altKey || !this.alt) && (e.ctrlKey || !this.ctrl) && e.code == this.code) {
        this.$emit("keyup");
        e.preventDefault();
      }
    });
  },
  render() {
    return;
  }
};