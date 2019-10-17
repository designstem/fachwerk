import { send, get } from '../../../fachwerk.js'

export default {
  description: `

> This page works best in slides mode <f-slides-icon  />

Button that navigates to the next slide.

<f-next-button />

---

  `,
  props: { title: { default: "Next step", description: "Button title" } },
  methods: { send, get },
  template: `
  <button v-show="get('type','slides') == 'slides'" class="primary" @click="send('next')">{{ title }} <f-rightarrow-icon /></button>
  `,};
