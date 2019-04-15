export default {
  description: `
Note icon.
  
<f-note-icon />

<p />
    `,
  props: {
    size: { default: "medium", type: String, description: "Icon size: `small` `medium` `large`" }
  },
  template: `
  <f-icon icon="note" :size="size" />
  `
}