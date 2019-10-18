## Make art with code

Let's start with two ingredients:

1. A simple visual element, say a **circle**.

2. A bunch of **numbers**. 

Let's see how two very different worlds can be combined for creative results.

---

### The circle

To draw a circle, the minimum amount of Fachwerk code is this:

```
<f-scene>
  <f-circle />
</f-scene>
```

By default, the center position of the circle is `x="0"` and `y="0"` and radius is `r="1"`.

---

### The improved circle

Let's adjust the position, radius, and styling of the circle, so we get something more usable. While at it, let's also add a background grid.

<f-content-example src="./examples/art1.md" />

> Play around with values in the `x`, `y` and `r` parameters to feel how they work.

---

### The numbers

Next, we need a set of numbers, let's say ranging from `-1` to `1`, with step `1`. We can express it as an <f-link to="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Array_literals"><var>array literal</var></f-link> that looks like this:

<output>[-1, 0, 1]</output>

---

### The loop

Great, now let's put those numbers to work. 

Let's draw three circles, and our three numbers will be their <var class="blue">x</var> coordinates.

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

---

### The bind

To link the `x` value from the loop to the actual <var class="blue">x</var> coordinate, we need to <var>bind</var> the value to the `x=` attribute. To do this, we prefix the `x=` with a colon `:x=` to indicate a live, binded value.

```
<f-circle v-for="x in [-1,0,1]" :x="x" />
```

Note that the name `x` for the loop's value can be chosen arbitrarily. The this code will work as well:

```
<f-circle v-for="donnerwetter in [-1,0,1]" :x="donnerwetter" />
```

---

### The result

So, our three dots will look like this:

<f-content-example src="./examples/art2.md" />

> Play around with array literal values `[-1,0,1]` to feel how the work. Try to add more values!

🤔 Why we use `v-for` when everywhere else we use `f-` (f for Fachwerk)? The loop code is actually not part of the Fachwerk; it's from the underlying framework VueJS, where `v-` stands for Vue. Read more about `v-for` <f-link to="https://vuejs.org/v2/guide/list.html">here</f-link>.

---

### Back to the numbers

Let's draw more circles — time for more numbers. 

We *could* write those numbers by hand but why not make the computer to do the work? Fachwerk has many useful <var>helper functions</var> for number generation, working with arrays, texts, colors, and more.

We gonna use a <f-link to="/range">`range()`</f-link> function. The function takes following parameters:

```
range(from, to, step = 1)
```

Just run the function with parameters `from = -1` and `to = 1` and let's see what it does:

<pre v-pre>{{ range(-1,1) }}</pre>

Looks familiar?

<output>{{ range(-1,1) }}</output>

Now let's generate more numbers *in between the same range*. We introduce the third, `step` parameter and set it to something less than the default `1`. Say, `0.5`:

<pre v-pre>{{ range(-1,1,0.5) }}</pre>

<output>{{ range(-1,1,0.5) }}</output>

---

### Back to the circles

Let's bring back the circle-generating code but now we replace hand-coded array `[-1,0,1]` with new shiny `range(-1,1,0.5)`:

<f-content-example src="./examples/art3.md" />

> Try to tweak the `step` parameter to something even smaller, say `0.2` or `0.1`

---

### The second dimension

So far we only worked in <var class="blue">x</var> axis. How to add another loop so we can repeat the circles in <var class="green">y</var> axis as well?

Unfortunately, **we can not have multiple loops in the single component**. 

To put a loop inside another loop, we need a new outer component, often called a <var>wrapper</var> component. 

It can be any component, but for our case, `<f-group>` is perfect.

<f-content-example src="./examples/art4.md" />

---

### Bring in the fun

Our circles look fine, but they are too ... *Standardisiert*. 

To bring in the fun and creativity we need something *unexpected*. As we base everything on numbers, let's have <var>random</var> numbers, with the help of  <f-link to="/random">`random()`</f-link> function. Similar to `range()` it expects `from` and `to` parameters but it returns a single number in between the range:

<pre v-pre>{{ random(0,1,true) }}</pre> 

So we get

<output>{{ random(0,1,true) }}</output>

Let's <var class="gray">bind</var> up this random number to the circle's radius `r`:

```
<circle :r="random(0,1,true)" />
```

---

### The unexpectedness

<f-content-example src="./examples/art5.md" />

> If you edit the code, you will see that the circle radiuses are randomly choosen on each keystroke.

---

### Time for colors

Orange is great but gets a little bit too 🍊. Let's first see how to generate color in code. Fachwerk has a wide range of color helper functions, but for now, we just need `hsl()`.

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

Here is the code to <var class="gray">bind</var> the random colors to  random circles:

```
<f-circle :fill="hsl(random(0,360))" />
```

---

### Finishing up

To finish our work, let's remove the grid from `<f-scene>` and downloadable with `download` attribute:

<f-content-example src="./examples/art6.md" />

---

### Profit!

Time to hang the work to the gallery.

<f-scene responsive download>
  <f-group
    v-for="y in range(-1.5,1.5,0.3)"
  >
    <component
      :is="any('f-circle','f-hexagon')"
      v-for="x in range(-1.5,1.5,0.3)"
      :x="x"
      :y="y"
      :r="random(0,0.5,true)"
      :fill="hsl(random(0,360))"
      stroke
      multiply
    />
  </f-group>
</f-scene>