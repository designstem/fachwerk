export default {
  description: `
VR icon.
  
<f-vr-icon />

<p />
    `,
  props: {
    size: { default: "medium", type: String, description: "Icon size: `small` `medium` `large`" }
  },
  template: `
  <f-icon icon="vr" :size="size" />
  `
}