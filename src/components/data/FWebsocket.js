import { Vue } from "../../../fachwerk.js";

export default {
  description: `
Sends and receives messages from websocket.

***Note*** Websocket library socket.io is not included in standard Fachwerk release. Add following line to \`index.html\` to load websocket support:

    <script src="https://unpkg.com/socket.io-client/dist/socket.io.slim.js"></script>

### Example

<f-websocket
  src="https://eka-server.now.sh"
  v-slot="{ send }"
  v-on:message="m => set('m',m)">

  <button v-on:click="send('Hello')">
    Send message "Hello"
  </button>

</f-websocket>

<p />

<output>Received message: {{ get('m') }}</output>

  `,
  props: {
    src: {
      default: "https://eka-server.now.sh",
      type: String,
      description: "Websocket server URL"
    },
    name: {
      default: "message",
      type: String,
      description: "Websocket event name"
    },
    set: {
      default: "",
      type: String,
      description: "Name for a global value to set"
    }
  },
  data: () => ({ socket: null }),
  mounted() {
    this.socket = io.connect(this.src);
    this.socket.on(this.name, message => {
      this.$emit("receive", message);
      if (
        this.set &&
        typeof message === "object" &&
        message.hasOwnProperty(this.set)
      ) {
        Vue.set(this.$global.$data.state, this.set, message[this.set]);
      }
    });
  },
  methods: {
    onSend(key, message) {
      if (this.socket) {
        this.socket.emit(this.name, { [key]: message });
      }
    }
  },
  template: `
  <div>
    <slot :send="onSend" /> 
  </div>
  `
};
