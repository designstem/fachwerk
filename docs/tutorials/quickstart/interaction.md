## Add interaction

All content in Fachwerk can be dynamic, so the user can interact with it and modify it on a page.

### Making a slider

One of the most common ways to make content interactive is to make a **slider**. We use the component `f-slider` to do this:

```
<f-slider />
```

<f-slider />

### Assign slider value to a variable

A slider itself has not much use. We need to link it's position to some kind of <var class="gray">variable</var>. Let's call it simply <var>r</var>:

```
<f-slider set="r" />
```

<f-slider set="r" />

To display the value of the slider we need following code to actually *get* the value to the screen:

<pre v-pre>r = {{ get('r') }}</pre>

r = {{ get('r') }}

### Assign a variable to 2d graphics

The key thing to understand is that we can assign <var>r</var> value *to anything in our project*. 

Let's go back to our familiar z-shaped line from the previous section.

First, let's introduce a `rotation` attribute that can be applied to any tag inside `f-scene`. It accepts <var class="gray">degrees</var> as a rotation angle:

```
<f-scene grid>
  <f-line rotation="10" points="-1 -1, 1 -1, -1 1, 1 1" />
</f-scene>
```

<f-scene grid>
  <f-line
    rotation="10"
    points="
      -1 -1, 1 -1, -1 1, 1 1
    "
  />
</f-scene>

Now, let's *connect* the `rotation` attribute to the <var>r</var> value we set previously:

While at it, let's bring back `closed` and `curved` attributes as well.

```
<f-scene grid>
  <f-line
    :rotation="get('r', 0)"
    points="
      -1 -1, 1 -1, -1 1, 1 1
    "
    closed
    curved
  />
</f-scene>
```

<f-scene grid>
  <f-line
    :rotation="get('r', 0)"
    points="
      -1 -1, 1 -1, -1 1, 1 1
    "
    closed
    curved
  />
</f-scene>

### Final code

<f-content-example src="./examples/rotatinghourglass.md" />

> There are many more methods to make project elemements interactive. See <f-link to="/advanced-interaction">Advanced interaction</f-link> guide to learn more.

### Time to go live!

It's now time to show your work to the world.

<f-link class="primary" to="/publish-a-project">Publish your project</f-link>