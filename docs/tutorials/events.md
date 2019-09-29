# Global events

#### Sending events

You can send events from any part of the code to any part of the code using `send(name, value)` helper:

<f-inline>
  <button v-on:click="send('hey', 1)">
    Send message "hey" with value 1
  </button>
</f-inline>

#### Receiving events

Inside the Markdown components, use `<f-receive>` component:

<f-receive name="hey" v-slot="{ value }">
  <output >{{ value ? 'Received ' + value : 'Waiting for event "hey"' }}</output>
</f-receive>

Alternative you can listen to the event using `receive()` helper in `mounted()` hook in your Javascript component:

    mounted() {
      receive('d', value => console.log(value))
    }