import { titleCase } from '../../utils.js'

export default {
  props: {
    code: { default: "a", type: String },
    alt: { default: false, type: [Boolean, String] },
    ctrl: { default: false, type: [Boolean, String] }
  },
  description: `

Listens keypresses and emits \`@keydown\` and \`@keyup\` events.

<f-keyboard
  ctrl
  alt
  code="a"
  v-on:keydown="set('keyboard', 1 - get('keyboard', 0))"
/>

Press <var :class="['gray','red'][get('keyboard',0)]">Ctrl + Alt + a</var>

  `,
  computed: {
    parsedCode() {
      if (this.code == 'top' ||  this.code == 'right' ||  this.code == 'bottom' ||  this.code == 'left') {
        return `Arrow${titleCase(this.code)}`
      }
      return `Key${titleCase(this.code)}`
    }
  },
  mounted() {
    document.addEventListener("keydown", e => {
      if ((e.altKey || !this.alt) && (e.ctrlKey || !this.ctrl) && e.code == this.parsedCode) {
        this.$emit("keydown");
      }
    });
    document.addEventListener("keyup", e => {
      if ((e.altKey || !this.alt) && (e.ctrlKey || !this.ctrl) && e.code == this.parsedCode) {
        this.$emit("keyup");
      }
    });
  },
  render() {
    return;
  }
};