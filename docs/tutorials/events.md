## Handling events

> This tutorial works best in edit mode <f-edit-icon  />

### Sending events

You can send events from any part of the code to any part of the code using `send(name, value)` helper:

<f-inline>
  <button v-on:click="send('hey', 1)">
    Send message "hey" with value 1
  </button>
</f-inline>

### Receiving events

To receive events, use `<f-receive>` component:

<f-receive name="hey" v-slot="{ value }">
  <output >{{ value ? 'Received ' + value : 'Waiting for event "hey"' }}</output>
</f-receive>

### System events

There are series system events that Fachwerk uses for communication between the components. Here are some examples:

Event|Description|Payload
---|---|---
<button @click="send('first')">first</button> | Goes to first slide |
<button @click="send('prev')">prev</button> | Goes to previous slide |
<button @click="send('next')">next</button> | Goes to next slide |
<button @click="send('last')">last</button> | Goes to last slide |
<button @click="send('goto', 0)">goto</button> | Goes to slide with index `0` | `0`
<button @click="send('goto', 'example')">goto </button> | Goes to slide with id `"example"` |  `"example"`
<button @click="send('edit')">edit</button> | Toggles the editor on and off |
<button @click="send('save')">save</button> | Saves the content in editor |
<button @click="send('type')">type</button> | Toggles between content modes | `"document"` or `"slides"` (optional)