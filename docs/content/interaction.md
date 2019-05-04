# Adding interaction

### Using a slider

All content in Fachwerk can be dynamic and interactive. Let's start with the simplest example: a slider that sets value `r1`:

<f-slider set="r1" />

To display and use the value we can use `get` function and we wrap it to curly parentheses: <code v-pre>{{ get('r1') }}</code>

<pre>Slider value is: {{ get('r1') }}</pre>

Showing the raw value is not that exiting so let's hook up `r1` value to the 2D graphics:

<f-scene grid>
	<f-box :rotation="get('r1', 0)" />
</f-scene>

### Adding animation

Why set the slider manually when machine can do the work? This is where `<f-animation>` comes in. It's usage is very similar to `<f-slider>` so they can be used interchangeably:

  
<f-animation set="r2" />

<pre>Slider value is: {{ get('r2') }}</pre>

<f-scene grid>
	<f-box :rotation="get('r2', 0)" />
</f-scene>

### Using buttons

Values can be also set with buttons, lets use buttons to set the `r3` to `1` and `2`:

<button v-on:click="set('r3',1)">Set r3 to 1</button> <button v-on:click="set('r3',1.5)">Set r3 to 1.5</button>

<pre>r3 is currently {{ get('r3', 1) }}</pre>

Note that we use a second parameter for `get('r3', 1)` to set a default parameter when it is not yet set.

<f-scene grid>
	<f-circle :r="get('r3', 1)" />
</f-scene>

### Using buttons group

Sometimes you need a group of buttons setting a certain value:

<f-buttons
  :buttons="['Small circle','Large circle']"
  set="r4"
/>

<p />

<pre>r4 (index) is currently {{ get('r4', 0) }}</pre>

Note that `r4` is either `0` or `1`: this represent which button is currently active. To convert this *index* value to something useful one can use following code:

<pre>The actual radius is {{ [1,1.5][get('r4',0)] }}</pre>

<f-scene grid>
	<f-circle :r="[1,1.5][get('r4',0)]" />
</f-scene>

#### Set a global value with a hotkey

To wrap things up, the values can be also set using a keyboard.

Use <kbd>Ctrl + Alt + r</kbd> to set the `r5` value:

<f-keyboard ctrl alt character="r" v-on:keydown="set('r5', 1.5)"/>

<pre>r5 is currently {{ get('r5', 1) }}</pre>

<f-scene grid>
	<f-circle :r="get('r5', 1)" />
</f-scene>









































