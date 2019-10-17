## Creating pages: Page 1

> This tutorial works best when you are in slides mode <f-slides-icon  />

To create multiple slides, separate the content with a separator.

`---`


You can navigate to the next page using keyboard <kbd>←</kbd> and <kbd>→</kbd> arrows. 

When editing is active, you can navigate with <kbd>Alt</kbd> <kbd>←</kbd> and <kbd>Alt</kbd> <kbd>→</kbd>

Having to rely just on keyboard is not convinient, so let's add a `<f-pager />` (this setting is on by default)

<f-pager />

It is even more convinient to click one *Groß* button, so let's add `<f-next-button />`:

<f-next-button />

---

## Creating pages: Page 2

Let's make the navigation more interesting. First, we need to set up a slider... 

    <f-next-button v-if="get('a') > 180" />

...and allow to move to the next page only if the user has set the value <var>a</var> more than <var>180</var>

Current <var>a</var> value is <var>{{ get('a') }} </var>


<f-slider set="a" />

<f-next-button v-if="get('a') > 180" />

---

## Creating pages: Page 3

#### Back to previous step

Let's have a button to move to the previous page:

<f-prev-button />

#### Back to beginning

Let's have button that takes us back to the first slide. Note that there is no special component for this but we can create our own:

    <button 
      class="primary"
      v-on:click="send('first')"
    >
    ← Back to start
    </button>

<button 
  class="primary"
  v-on:click="send('first')"
>
← Back to start
</button>