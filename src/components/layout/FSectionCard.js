import { get, goto } from "../../../fachwerk.js";

export default {
  description: ` 

Card that navigates the user to particular section in slides.

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
    goto
  },
  template: `
  <f-card
	  @click.native="goto(section);"
    :title="title"
    :border="get('section') == section ? 'var(--primary)' : border"
    :background="background"
  >
	  <slot />
  </f-card>
  `
};
