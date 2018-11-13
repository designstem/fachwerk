export default {
  tag: "Layout",
  description: `
Allows to create a simple slider, to be used with \`v-model\`.

Technically it is a combination of  \`label\` and \`<input type="range" />\` tags.
  `,
  example: `
<f-slider
  title="Some variable"
  v-model="someVariable"
/>
  `,
  props: {
    title: { default: "Value", type: String },
    value: { default: 0, type: Number },
    from: { default: 0, type: Number },
    to: { default: 100, type: Number },
    step: { default: 1, type: Number },
  },
  template: `
  <div>
    <label>{{ title }} <code>{{ value }}</code></label>
    <input
      type="range"
      :value="value"
      :min="from"
      :max="to"
      :step="step"
      @input="$emit('input', $event.target.value)"
    />
  </div>
  `
}