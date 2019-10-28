import { Vue, makeNumber, scale } from "../../../fachwerk.js";

export default {
  description: `
Sends and receives a global event with a payload (value).

To send an event, use \`send(name, value)\` helper:

<button v-on:click="send('hey', 1)">
  Send event with name "hey" with value 1
</button>

<p />

To receive event, use \`f-receive\` component with corresponding \`receive\` parameter:

<f-receive receive="hey" v-slot="{ value }">
  <output >{{ value ? 'Received ' + value : 'Waiting for event "hey"' }}</output>
</f-receive>
  `,
  props: {
    receive: {
      default: "value",
      type: String,
      description: "Value name to receive"
    },
    set: {
      default: "",
      type: String,
      description: "Name for global value to set"
    }
  },
  slots: {
    value: {
      type: "value",
      description: "Received event payload value"
    }
  },
  data: () => ({ value: null }),
  mounted() {
    if (this.$global) {
      this.$global.$on(this.receive, value => {
        this.value = value;
        this.$emit("value", value);
        this.$emit("input", value);
        if (this.set) {
          Vue.set(this.$global.$data.state, this.set, this.value);
        }
      });
    }
  },
  template: `
    <div>
      <slot :value="value" />
    </div>
  `
};
