# Global state

### Examples

#### Set the global value on button click

Lets set up a button to set value with `set('a',20)`:

<button v-on:click="set('a',1)">Set a to 1</button>

Note that initially `a` is not set. To overcome this, we passed the second parameter for `get('a',0)`:

```
a is currently {{ get('a', 0) }}
```

#### Set the global value with a button group

<f-buttons
  :buttons="['Zero','One']"
  :value="get('b', 0)"
  v-on:input="i => set('b', i)"
/>

```
b is currently: {{ get('b', 0) }}
```

#### Set global value with a slider

Lets set up a slider to control value `c`:

<f-slider :value="get('c', 0)" v-on:input="set('c',$event)" />

```
c is currently: {{ get('c', 0) }}
```

#### Set a global value with a hotkey

>Press <kbd>Ctrl + Alt + d</kbd> to set the `d` value

<f-keyboard
  ctrl
  alt
  code="d"
  v-on:keydown="set('d', 1)"
/>

```
d is currently: {{ get('d', 0) }}
```