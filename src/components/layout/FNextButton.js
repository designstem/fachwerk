import { send } from '../../../fachwerk.js'

export default {
  description: `
Button that navigates to the next slide.

<f-next-button />

<p />
  `,
  props: { title: { default: "Next step", description: "Button title" } },
  methods: { send },
  template: `
  <button class="primary" @click="send('next')">{{ title }} <f-rightarrow-icon /></button>
  `,};
