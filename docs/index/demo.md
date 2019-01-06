# Explorative slides

## Slide 1

To create multiple slides, we separate the slides with separator:

`---`

The user can now navigate between slides using <kbd><</kbd>  and <kbd>></kbd> keys, but it is helpful to also create navigational controls.

We create a button and send an event `send('next')` when it is clicked. Try it!

<button class="primary" v-on:click="send('next')">
Next step
</button>

---

## Slide 2

Great, we landed to next slide!

You can skip this part if you are eager to see how the interactivity works. Stay around if you want to learn about the layouts first.

<f-inline>
  <button
    class="secondary"
    v-on:click="send('prev')"
  >Prev step</button>
  <button
    class="primary"
    v-on:click="send('next')"
  >Next step</button>
</f-inline>

<p />

### Layout

If you separate the content using
`-`
separator, the parts will be arranged into columns. Columns can be arranged using following code, this the default setting:

```
❘ 1 2 3 4
```
To organize content into different layout one can try the following:

<pre>
❘ 1 1 1
❘ 2 3 4
❘ 5 5 5
</pre>

| 1 1 1
| 2 3 4
| 5 5 5

**I am cell 1 and I extend over three columns**
-
**I am cell 2**
-
**I am cell 3**
-
**I am cell 4**
-
**I am cell 5 and I extend over three columns**

---

| 1 1
| 2 3

### Slide 3

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