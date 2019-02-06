import { send } from "../../../fachwerk.js"
;

export default {
  description: `
  Button that navigates to the previous slide.

<f-prev-button />
`,
  props: { title: { default: "", description: "Button title" } },
  methods: { send },
  template: `
  <button
    class="secondary"
    @click="send('prev')"
  >
    {{ title ? '← ' + title : '←' }}
  </button>
  `
};
