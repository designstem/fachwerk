# Global state

### Examples

#### Set the global value on button click

Lets set up a button to set value with `set('a',20)`:

<button v-on:click="set('a',1)">Set a to 1</button>

Note that initially `a` is not set. To overcome this, we passed the second parameter for `get('a',0)`:

<output>a is currently {{ get('a', 0) }}</output>

#### Set the global value with a button group

<f-buttons
  :buttons="['Zero','One']"
  :value="get('b', 0)"
  v-on:input="i => set('b', i)"
/>

<output>b is currently: {{ get('b', 0) }}</output>

#### Set global value with a slider

Lets set up a slider to control value `c`:

<f-slider title="c" :value="get('c', 0)" v-on:input="set('c',$event)" />

Using the `set` parameter the line above can be condensed to

<f-slider set="c" />

<output>c is currently: {{ get('c', 0) }}</output>

#### Set global value with text input

Lets set up a textfield to control value `d`:

<input
  type="text"
  :value="get('d', 0)"
  v-on:input="e => set('d',e.target.value)"
/>

<output>d is currently: {{ get('d', 0) }}</output>

#### Set a global value with a hotkey

Press <kbd>Ctrl + Alt + e</kbd> to set the `e` value:

<f-keyboard ctrl alt character="e" v-on:keydown="set('e', 1)"/>

<output>e is currently: {{ get('e', 0) }}</output>