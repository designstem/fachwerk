## Adding graphics

Enough of text, let's add some 2D graphics. Fachwerk offers several graphic components, suitable for graph drawing, vector art and bitmap generation.

### Drawing graphs

#### Point

Let's start with a simple 2D scene and draw a simple **point**. We draw using HTML-like tags, but they are custom, Fachwerk tags, starting with `f-`.

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


Not much of a looker but you can probably guess the coordinate system alread: we are using standard <var class="gray">cartesian coordinate system</var> for graph drawing. 

Let's add more **points** to the graph with coordinates to verify we have figured our where <var>x</var> and <var class="green">y</var> are in the graph.

```
<f-scene grid>
  <f-point position="-1 -1" />
  <f-point position=" 1 -1" />
  <f-point position="-1  1" />
  <f-point position=" 1  1" />
</f-scene>
```

For specifying a set of multiple points, there is actually a shortcut, we can draw multiple points in one go by specifing `position` attribute:

```
<f-scene grid>
  <f-point position="-1 -1, 1 -1, -1 1, 1 1" />
</f-scene>
```

So we get the following:

<f-scene grid>
  <f-point position="-1 -1" />
  <f-point position=" 1 -1" />
  <f-point position="-1  1" />
  <f-point position=" 1  1" />
</f-scene>

#### Line

Time to draw a **line** on the graph!.

```
<f-scene grid responsve>
  <f-line points="-1 -1, 1 1" />
</f-scene>
```

This code gives us the line below. 

<f-scene grid>
	<f-line points="-1 -1, 1 1" />
</f-scene>
