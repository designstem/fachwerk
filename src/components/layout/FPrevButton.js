import { send, get } from "../../../fachwerk.js";

export default {
  description: `

> This page works best in slides mode <f-slides-icon  />

<a @click="() => send('next')">Go to next slide</a>

---

Button that navigates to the previous slide.

<f-prev-button />
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
