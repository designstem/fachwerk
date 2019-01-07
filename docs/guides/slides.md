# Slides and navigation

## Slide 1

To create multiple slides, we separate the content with a separator:

`---`

The user can now navigate between slides using <kbd>&lt;</kbd>  and <kbd>&gt;</kbd> keys, but it is helpful to also create navigational controls.

We create a button and send an event `send('next')` when it is clicked. Try it!

<button class="primary" v-on:click="send('next')">
Next step
</button>

---

| 1 1
| 2 3

### Slide 2

Now try to set the value higher than `1.5` to move to the next step.

-

#### Controls

<f-slider
  from="1"
  to="2"
  step="0.001"
  :value="get('r', 0)"
  v-on:input="set('r', $event)"
/>

<f-inline>
  <button
    class="secondary"
    v-on:click="send('prev')"
  >Prev step</button>
  <button
    v-if="get('r', 0) > 1.5"
    class="primary"
    v-on:click="send('next')"
  >Next step</button>
</f-inline>
-

#### Scene

<f-scene grid>
  <f-circle :r="get('r', 0)" />
</f-scene>

---

## Slide 3

We are done here, let's reset the global state,`set('r', 0)` and send the user back to the first page, `send('first')`.

<button
  class="secondary"
  v-on:click="set('r', 0); send('first')"
>
Back to start
</button>