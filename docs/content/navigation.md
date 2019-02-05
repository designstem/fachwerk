# Adding  navigation

## Slide 1

To create multiple slides, we separate the content with a separator and add button to move to a next slide.

`---`

<f-inline>
  <f-next-button />
</f-inline>

<details>

<summary>How this button works?</summary>

`<f-next-button>` is a simple wrapper around `<button>` element that emits an event `send('next')` when it is clicked. The button above can also be written as:

```
<button class="primary" v-on:click="send('next')">
Next step →
</button>
```

</details>

---

| 1 1
| 2 3

### Slide 2

Now try to set the value higher than `1.5` to move to the next step.

-

#### Controls

<f-slider
  from="0.5"
  to="2"
  :value="get('r', 0.5)"
  v-on:value="value => set('r', value)"
/>

<f-inline>
  <f-prev-button />
  <f-next-button v-if="get('r',0.5) > 1.5" />
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
← Back to start
</button>