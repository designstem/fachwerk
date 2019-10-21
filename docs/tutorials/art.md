## Make art with code

Let's start with two ingredients:

1. A simple visual element, say a **circle**.

2. A bunch of random or not-so-random **numbers**. 

Let's see how two very different worlds can be combined for creative results.

---

### The circle

To draw a circle, this amount of Fachwerk code is needed:

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

> Play around with values in the `x`, `y`, and `r` parameters to feel how they work.

---

### More circles

When we want to have multiple circles, we can simply copy-paste our circle code and adjust the `x=` value to on each copy:

<f-content-example src="./examples/art1b.md" />

> Try to make circles partially overlap

---

### The array

Fine, we got the three circles, but if you look at the code above, it feels ... **wasteful**. We copied *almost* the same code three times, but the only thing that is different about them is the `x` value. Squint, and you will see it:

`x="-1"` in first circle
` x="0"` in second circle
` x="1"` in third circle

In coding, we think about the group of values an <var>array of values</var>, and it looks like this:

```
[value, value, value]
```

In our circle-drawing case, our array of `x` values looks like this:

```
[-1,0,1]
```

Arrays are very useful for all data manipulation, but we focus on the task at hand: we want to *automate the repetitive circle drawing*, avoiding unnecessary copying and pasting.

---

### The loop

Arrays itself are not that useful. To make them them work, the most common way is to <var>loop over the array</var>. At each step in the loop, the `x` value will refer to the current element in the array:

<f-content-example src="./examples/art1c.md" />

> Try to add, remove, and reorder the numbers in the array. Keep them comma-separated.<br>Do not mind the `<pre>` tag, it's there to draw those blue boxes.

---

### Circles in the loop

Let's now connect our **circle**, **array of x values** and the **loop**.

If we could simply say out loud what we were doing while drawing the circles it goes like this:

<br>

<big>~*First, draw a circle with <var class="green">x</var> in <var class="green">-1</var> position*~</big>

<big>~*Second, draw a circle with <var class="green">x</var> in <var class="green">0</var> position*~</big>

 <big>~*Third, draw a circle with <var class="green">x</var> in <var class="green">1</var> position*~</big>

---

This is how it looks in code:

<f-content-example src="./examples/art2.md" />

> Play around with array values `[-1,0,1]` to feel how they affect the circles.

---

### Some notes

Note one small detail: when we replaced manually entered values `x="-1"`, `x="0"`, `x="1"` with the looped value we had to add a colon `:` in front of the x.

It is there to indicate a "live" value, in coding it's called a <var>binded value</var>. Notice the `:x="x"`

```
<f-circle v-for="x in [-1,0,1]" :x="x" />
```

Also note that the name `x` for the current value in the loop can be chosen arbitrarily. The this code will work as well:

```
<f-circle v-for="donnerwetter in [-1,0,1]" :x="donnerwetter" />
```

🤔 Also, why we use `v-for` when everywhere else we use `f-` (f for Fachwerk)? The loop code is not part of the Fachwerk; it's from the underlying framework VueJS, where `v-` stands for Vue. Read more about `v-for` <f-link to="https://vuejs.org/v2/guide/list.html">here</f-link>.

---

### Back to the numbers

Let's draw more circles — time for more numbers!

We *could* write those numbers by hand but why not make the computer do the work? Fachwerk has many useful <var>helper functions</var> for number generation, working with arrays, texts, colors, and more.

We gonna use a <f-link to="/range">`range()`</f-link> function. The function takes following parameters:

```
range(from, to, step)
```

Just run the function with parameters `from = -1` and `to = 1` and `step = 1` and let's see what it does. Looks familiar?

<f-content-example src="./examples/art2b.md" />

> Try to adjust range parameters so something else, say `from = -2` and `to = 2`. What happens when you make a third, `step` parameter smaller, for example, `0.5`?

---

### Back to the circles

Let's bring back the circle-generating code but now we replace hand-coded array `[-1,0,1]` with new shiny `range(-1,1,0.5)`:

<f-content-example src="./examples/art3.md" />

> Try to tweak the `step` parameter to something really small, say `0.1`

### The second dimension

So far we only worked in <var class="blue">x</var> axis. How to add another loop so we can repeat the circles in <var class="green">y</var> axis as well?

Unfortunately, **we can not have multiple loops in the single component**. 

To put a loop inside another loop, we need a new outer component, often called a *wrapper component*. 

It can be any component, but for our case, `<f-group>` is perfect.

<f-content-example src="./examples/art4.md" />

---

### Bring in the fun

Our circles look fine, but they are too ... *Standardisiert*. 

To bring in the fun and creativity we need something *unexpected*. As we base everything on numbers, let's have <var>random</var> numbers, with the help of  <f-link to="/random">`random()`</f-link> function. 

```
random(from, to)
```

Similar to `range()` it expects `from` and `to` parameters but it returns a single number in between the range:

<f-content-example src="./examples/art4b.md" />

> Tweak the `0` and `1` values to see what kind of the number the `random()` function returns

What we need is to <var class="gray">bind</var> this random number to the circle's radius `r`:

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