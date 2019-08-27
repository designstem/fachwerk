import { send, get } from '../../../fachwerk.js'

export default {
  description: `
Button that navigates to the next slide.

<f-next-button />

<p />
  `,
  props: { title: { default: "Next step", description: "Button title" } },
  methods: { send, get },
  template: `
  <button v-show="get('type','slides') == 'slides'" class="primary" @click="send('next')">{{ title }} <f-rightarrow-icon /></button>
  `,};
