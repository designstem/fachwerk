export default {
  props: {
    name: { default: 'value', type: String}
  },
  description: `
Sends and receives a global event with a payload (value).

To send an event, use \`send(name, value)\` helper:

<button v-on:click="send('hey', 1)">
  Send event with name "hey" with value 1
</button>

<p />

To receive event, use \`f-receive\` component with corresponding \`name\`:

<f-receive name="hey" v-slot="{ value }">
  <output >{{ value ? 'Received ' + value : 'Waiting for event "hey"' }}</output>
</f-receive>
  `,
  slots: {
    value: {
      type: "value",
      description: "Received event payload value"
    }
  },
  data: () => ({ value: null }),
  mounted() {
    if (this.$global) {
      this.$global.$on(this.name, value => this.value = value)
    }
  },
  template: `
    <div>
      <slot :value="value" />
    </div>
  `
}