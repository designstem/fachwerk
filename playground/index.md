<f-websocket
  src="https://eka-server.now.sh"
  v-slot="{ send }"
  @message="m => set('m',m)">
  <button v-on:click="send('Hello')">Send</button>
</f-websocket>

Message {{ get('m') }}
