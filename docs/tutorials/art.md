## Make art with code

> This tutorial works best in edit mode <f-edit-icon  />

Let's start with two ingredients, a simple **visual element**, say a circle, and a bunch of **numbers**. 

Let's see how two very different worlds can be combined for creative results.

### The circle

By default, the circle is drawn in position `x="0"` and `y="0"` with radius `r="1"`.

<f-scene grid>
  <f-circle />
</f-scene>

Let's adjust the position, radius, and styling of the circle, so we get something more usable:

<f-scene grid>
  <f-circle
    x="-1"
    y="0"
    r="0.5"
    fill="orange"
    stroke
    multiply
  />
</f-scene>

### The numbers

Next, we need a set of numbers, let's say ranging from `-1` to `1`, with step `1`. We can express it as an <f-link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Array_literals"><var>array literal</var></f-link> that looks like this:

<output>[-1, 0, 1]</output>

### The loop

Great, now let's put those numbers to work. Let's draw three circles, and our numbers will be their `x` coordinates.

To draw the actual circles, we need to <var>loop</var> over the three numbers. At each step in the loop, the `x` value will increase.

Which step?|Current `x` value in the array
---|---
First|`-1`
Second|`0`
Third|`1`

The code for the loop looks like this:

```
<f-circle v-for="x in [-1,0,1]" />
```

To link the `x` value from the loop to the actual <var class="gray">x</var> coordinate, we need to <var>bind</var> the value to the `x=` attribute. To do this, we prefix the `x=` with a colon `:x=` to indicate a live, binded value.

```
<f-circle v-for="x in [-1,0,1]" :x="x" />
```

> Note that the name `x` for the loop's value can be chosen arbitrarily. The this code will work as well:

```
<f-circle v-for="donnerwetter in [-1,0,1]" :x="donnerwetter" />
```

### The result

So, our three dots will look like this:

<f-scene grid>
  <f-circle
    v-for="x in [-1,0,1]"
    :x="x"
    y="0"
    r="0.5"
    fill="orange"
    stroke
    multiply
  />
</f-scene>

> Why we use `v-` when everywhere else we use `f-`? That code is actually not part of the Fachwerk; it's from the underlying framework VueJS, where `v-` stands for Vue. Read more about `v-for` <f-link to="https://vuejs.org/v2/guide/list.html">here</f-link>.

### Back to the numbers

Let's draw more circles — time for more numbers. 

We *could* write those numbers by hand but why not make the computer to do the work. Fachwerk has many useful <var>helper functions</var> for number generation, working with arrays, texts, colors, and more.

We gonna use a <f-link to="/range">`range()`</f-link> function. The function takes following parameters:

```
range(from, to, step = 1)
```

Just run the function with parameters `from = -1` and `to = 1` and let's see what it does:

<pre v-pre>{{ range(-1,1) }}</pre>

Look familiar?

<output>{{ range(-1,1) }}</output>

Now let's generate more numbers *in between the same range*. We introduce the third, `step` parameter and set it to something less than the default `1`. Say, `0.5`:

<pre v-pre>{{ range(-1,1,0.5) }}</pre>

<output>{{ range(-1,1,0.5) }}</output>

### Back to the circles

Let's bring back the circle-generating code but now we replace handcoded array `[-1,0,1]` with new shiny `range(-1,1,0.5)`:

<f-scene grid>
  <f-circle
    v-for="x in range(-1,1,0.5)"
    :x="x"
    y="0"
    r="0.5"
    fill="orange"
    stroke
    multiply
  />
</f-scene>

> Try to tweak the `step` parameter to something even smaller, say `0.2` or `0.1`

### The second dimension

So far we only worked in <var>x</var> axis. How to add another loop so we can repeat the circles in <var>y</var> axis as well?

Unfortunately, **we can not have multiple loops in the single component**. 

To put a loop inside another loop, we need a new outer component, often called a <var>wrapper</var> component. 

It can be any component, but for our case, `<f-group>` is perfect.

<f-scene grid>
  <f-group v-for="y in range(-1,1,1)">
    <f-circle
      v-for="x in range(-1,1,1)"
      :x="x"
      :y="y"
      r="0.5"
      fill="orange"
      stroke
      multiply
    />
  </f-group>
</f-scene>

### Bring in the fun

Our circles look fine, but they are too ... *standardisiert*. 

To bring in the fun and creativity we need something *unexpected*. As we base everything on numbers, let's have <var>random</var> numbers, with the help of  <f-link to="/random">`random()`</f-link> function. Similar to `range()` it expects `from` and `to` paramters but it returns a single number inbetween:

<pre v-pre>{{ random(0,1,true) }}</pre> 

So we get

<output>{{ random(0,1,true) }}</output>

> If you edit the code, you will see that the number is refreshed on each keystroke.

Let's <var class="gray">bind</var> up this random number to the circle's radius `r`:

```
<circle :r="random(0,1,true)" />
```

So we get the fun:

<f-scene grid>
  <f-group v-for="y in range(-1,1,1)">
    <f-circle
      v-for="x in range(-1,1,1)"
      :x="x"
      :y="y"
      :r="random(0,1,true)"
      fill="orange"
      stroke
      multiply
    />
  </f-group>
</f-scene>

### Time for colors

Orange is great but get's a little bit too 🍊. Let's first see how to generate color in code. Fachwerk has a wide range of color helper functions, but for now, we just need `hsl()`.

**HSL** stands for **H**ue, **S**aturation and **B**rightess, but let's focus on just the **H**ue, the value that indicates the color position in the <var>spectrum</var> and ranges from `0` to `360`.

Here are some examples:

<code
  v-for="h in range(0,360, 360 / 5)"
  :style="{background: hsl(h), color: 'black'}"
>hsl({{ h }})</code>

If we couple the `hsl()` with `random()` function, we can generate a random colors:

<code
  :style="{background: hsl(random(0,360)), color: 'black'}"
>hsl(random(0,360))</code>

Let's now <var class="gray">bind</var> the random colors to  random circles:

```
<f-circle :fill="hsl(random(0,360))" />
```

Finally, let's remove the grid from `<f-scene>`, make it full width with `responsive` attribute, downloadable with `download` attribute and hang it to the gallery:

<f-scene responsive download>
  <f-group v-for="y in range(-1,1,0.5)">
    <f-circle
      v-for="x in range(-1,1,0.5)"
      :x="x"
      :y="y"
      :r="random(0,1,true)"
      :fill="hsl(random(0,360))"
      stroke
      multiply
    />
  </f-group>
</f-scene>
