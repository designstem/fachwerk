import { Vue, get, goto, send } from "../../../fachwerk.js";

export default {
  description: ` 

Shows a navigation card that navigate the user to particular page.

<f-section-card
  title="Example section"
  section="example"
>
  Contents of example section
</f-section-card>

<p />
  `,
  props: {
    title: { default: "", type: String },
    section: { default: "", type: String },
    border: { default: "var(--transparent)", type: String },
    background: { default: "var(--yellow)", type: String },
  },
  methods: {
    get,
    send,
    goto
  },
  template: `
  <f-card
	  @click.native="send('closemenu'); goto(section);"
    :title="title"
    :border="get('section') == section ? 'var(--primary)' : border"
    :background="background"
  >
	  <slot />
  </f-card>
  `
};
