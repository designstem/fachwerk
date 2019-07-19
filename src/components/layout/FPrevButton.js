import { send } from "../../../fachwerk.js";

export default {
  description: `
Button that navigates to the previous slide.

<f-prev-button />

<p />

`,
  props: { title: { default: "", description: "Button title" } },
  methods: { send },
  template: `
  <button
    class="secondary"
    @click.prevent="send('prev')"
  >
    <f-leftarrow-icon />
    {{ title }}&nbsp;
  </button>
  `
};
