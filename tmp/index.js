import { Init } from "../mixins.js";
import * as components from "../components.js";
import * as utils from "../utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

const { titleCase } = utils;

const FKeyboard = {
  props: {
    code: { default: "a", type: String },
    alt: { default: false, type: Boolean },
    ctrl: { default: false, type: Boolean }
  },
  description: `
Listens keypresses and emits \`@keydown\` and \`@keyup\` events.
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

Vue.component("FKeyboard", FKeyboard);

new Vue({
  el: "#app",
  mixins: [Init],
  methods: { ...utils },
  template: `                         
  <div>
    <f-keyboard code="e" @keydown="set('key', 1 - get('key', 0))" />
    <f-keyboard code="e" @keyup="set('key2', 1 - get('key2', 0))" />
    {{ get('key', 0) }} / 
    {{ get('key2', 0) }}
  </div>
`
});

// new Vue({
//   // Attaching Vue to <div id="app"></div>
//   el: "#app",

//   // Adding a mixin
//   mixins: [Init],

//   // Making utilities accessible to templates
//   methods: { ...utils },

//   // Fetching the index.md and rendering it
//   template: `
//   <f-fetch-data url="./test.md">
//     <f-content slot-scope="data" :content="data.value" type="slides" />
//   </f-fetch-data>
// `
// });
