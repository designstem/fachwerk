# Global events

> Events are most useful as oneoff commands. For setting a global state it is more useful to use `get()` and `set()` instead.

### Examples

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
  <output >{{ value ? 'Received ' + value : 'Waiting for "hey"' }}</output>
</f-receive>