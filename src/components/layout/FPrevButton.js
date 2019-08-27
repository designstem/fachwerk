import { send, get } from "../../../fachwerk.js";

export default {
  description: `
Button that navigates to the previous slide.

<f-prev-button />

<p />

`,
  props: { title: { default: "", description: "Button title" } },
  methods: { send, get },
  template: `
  <button
    v-show="get('type','slides') == 'slides'"
    class="secondary"
    @click.prevent="send('prev')"
  >
    <f-leftarrow-icon />
    {{ title }}&nbsp;
  </button>
  `
};
