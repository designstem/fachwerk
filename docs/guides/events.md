# Global events

> Events are most useful as oneoff commands. For setting a global state it is more useful to use `get()` and `set()` instead.

### Examples

#### Sending events

You can send events from any part of the code to any part of the code using `send(name, value)` helper:

<button v-on:click="send('d', 1)">
Send message d with value 1
</button>

<p />

#### Receiving events

Inside the Markdown components, use `<f-receive-data>`:

<f-receive-data name="d">
  <pre slot-scope="data">{{ data.value ? data.value : 'Waiting for event...' }}</pre>
</f-receive-data>

Alternative you can listen to the event using `receive()` helper in `mounted()` hook in your Javascript component:

<pre>
mounted() {
  receive('d', value => console.log(value))
}
</pre>