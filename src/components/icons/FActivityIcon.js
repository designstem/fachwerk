export default {
  description: `
Activity icon.
  
<f-activity-icon />

<p />
    `,
  props: {
    size: { default: "medium", type: String, description: "Icon size: `small` `medium` `large`" }
  },
  template: `
  <f-icon icon="activity" :size="size" />
  `
}