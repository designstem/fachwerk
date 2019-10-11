## Add 2D graphics

Let's add some 2D graphics. Fachwerk offers several graphic components suitable for graph drawing, vector art, and bitmap generation.

### Drawing graphs

#### Point

Let's start with a simple 2D scene and draw a simple **point**. We use HTML-like tags, but they are custom, Fachwerk tags, starting with `f-`.

```
<f-scene>
  <f-point />
</f-scene>
```

> Note that `<f-point />` is a shorthand for longer code `<f-point></f-point>`. We use the short syntax in all the examples.

We get the following graph:

<f-scene grid>
  <f-point />
</f-scene>


Not much of a looker, but you can probably guess the coordinate system already: we are using standard <var class="gray">cartesian coordinate system</var> for graph drawing. 

Let's add more **points** to the graph with coordinates to verify we have figured our where <var>x</var> and <var class="green">y</var> are in the graph.

```
<f-scene grid>
  <f-point position="-1 -1" />
  <f-point position=" 1 -1" />
  <f-point position="-1  1" />
  <f-point position=" 1  1" />
</f-scene>
```

For specifying a set of multiple points, there is a shortcut; we can draw multiple points in one go by specifying `points` attribute:


```
<f-scene grid>
  <f-point points="-1 -1, 1 -1, -1 1, 1 1" />
 </f-scene>
```

Also, let's tweak the look of the points a little bit:

* Use `fill` attribute to color the points orange

* Use `r` attribute to make the points a little bit bigger:

* Use `opacity` attribute to make the points semi-transparent

Here is our final code:

```
<f-scene grid>
  <f-point
    points="-1 -1, 1 -1, -1 1, 1 1"
    fill="orange"
    r="5"
    opacity="0.5"
  />
 </f-scene>
```

So we get the following:

<f-scene grid>
  <f-point
    points="-1 -1, 1 -1, -1 1, 1 1"
    fill="orange"
    r="5"
    opacity="0.5"
  />
</f-scene>

#### Line

Time to draw a **line** on the graph!. Let's reuse the points we used in previous steps; just use `f-line` instead of `f-point`:

```
<f-scene grid>
  <f-line points="-1 -1, 1 -1, -1 1, 1 1" />
  <f-point
    points="-1 -1, 1 -1, -1 1, 1 1"
    fill="orange"
    r="5"
    opacity="0.5"
  />
</f-scene>
```

This code gives us the line and the points.

<f-scene grid>
  <f-line points="-1 -1, 1 -1, -1 1, 1 1" />
  <f-point
    points="-1 -1, 1 -1, -1 1, 1 1"
    fill="orange"
    r="5"
    opacity="0.5"
  />
</f-scene>

Let's play around with the line a little bit. There is a `curved` attribute that smoothens the curve:

```
<f-scene grid>
  <f-line points="-1 -1, 1 -1, -1 1, 1 1" curved />
</f-scene>
```

<f-scene grid>
  <f-line points="-1 -1, 1 -1, -1 1, 1 1" curved />
</f-scene>

There is also a `closed` attribute that closes the line:

```
<f-scene grid>
  <f-line points="-1 -1, 1 -1, -1 1, 1 1" closed />
</f-scene>
```

<f-scene grid>
  <f-line points="-1 -1, 1 -1, -1 1, 1 1" closed />
</f-scene>


By combining `curved` and `closed`, we get something hourglass-like. To shape it up, let's set `fill` and `opacity` attributes:

<f-scene grid>
  <f-line
    points="-1 -1, 1 -1, -1 1, 1 1"
    curved
    closed
    fill="orange"
    opacity="0.5"
  />
</f-scene>

> `f-line` have many more features available. See <f-link to="/f-line">f-line documentation</f-link> for more info.

#### Other geometrical shapes

There is a wide variety of other geometrical shapes available, here are some of them:

<div class="grid">

<f-scene grid responsive>
  <f-circle />
  <f-text>f-circle</f-text>
</f-scene>

<f-scene grid responsive>
  <f-box r="2" />
  <f-text>f-box</f-text>
</f-scene>

<f-scene grid responsive>
  <f-hexagon />
  <f-text>f-hexagon</f-text>
</f-scene>

</div>

<f-link class="tertiary" to="/add-interaction">Let's add some interaction</f-link>