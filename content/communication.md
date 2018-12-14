# Component communication

## Global state

### Get and set values

First lets set and get a simple value, `a`:

Setting it up to be `10`... {{ set('a',10) }} 

```
a is currently {{ get('a') }}
```

### Using the button

Lets set up a button to set value `b`

```
b is currently {{ get('b', 0) }}
```

Note that initially `b` is not set. To overcome this, we passed the default parameter for `get('b',0)`:

<button v-on:click="set('b',20)">Set b to 20</button>

### Using the slider

Lets set up a slider to control value `c`:

<f-slider :value="get('c', 0)" v-on:input="set('c',$event)" />

```
c is currently: {{ get('c', 0) }}
```

## Global events

### Sending events

You can send events from any part of the code to any part of the code using `send(name, value)` helper:

<button v-on:click="send('d', 1)">
Send d = 1 message
</button>

<p />

Events are most useful as one-off commands, for example there are several events for navigation: `send('next')`,  `send('prev')` etc. For setting a global state its more useful to use `get()` and `set()` instead.

### Receiving events

Inside the Markdown components, use `<f-receive-data>`:

<f-receive-data name="d">
  <pre slot-scope="data">{{ data.value }}</pre>
</f-receive-data>

Alternative you can listen to the event using `receive()` helper in `mounted()` hook in your Javascript component:

<pre>
mounted() {
  receive('d', value => console.log(value))
}
</pre>