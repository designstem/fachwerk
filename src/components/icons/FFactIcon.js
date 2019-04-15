export default {
  description: `
Fact icon.
  
<f-fact-icon />

<p />
    `,
  props: {
    size: { default: "medium", type: String, description: "Icon size: `small` `medium` `large`" }
  },
  template: `
  <f-icon icon="fact" :size="size" />
  `
}