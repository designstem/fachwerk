import { send } from '../../../utils.js'

export default {
  description: `
Button that navigates to the next slide.

<f-next-button />

  `,
  props: { title: { default: "Next step", description: "Button title" } },
  methods: { send },
  template: `
  <button class="primary" @click="send('next')">{{ title }} →</button>
  `,};
