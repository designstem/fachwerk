# Markdown tutorial

Markdown is a simple text format that is converted to HTML automatically.

It supports **simple** *formatting*, ~striking~ text.

Links in text are automatically clickable https://help.github.com/articles/basic-writing-and-formatting-syntax/ and on can also use links with [custom text](https://help.github.com/articles/basic-writing-and-formatting-syntax/).

For headers use this format:

# h1
## h2
### h3
#### h4
##### h5

Adding images is currently tricky, we rely on complex syntanx like `![](image_link_here.jpg)` but we are working on a simpler alternative.

For bulletpoints one can use

  * Simple
  * Unordered

and

  1. Ordered
  2. Lists

For codings there are markup for `shorter` and
```
longer
blocks
of code
```
Also, all <sub>all</sub> HTML <sup>tags</sup> are supported.


In addition to Markdown markup and HTML we also support Fachwerk custom components.

Let's start with simple `f-scene` and dash of `f-math`:

<f-scene grid step="1">
  <f-circle
    opacity="0.8"
    :stroke="color('red')"
  />
  <f-line
    :x1="Math.PI/-2"
    y1="1"
    :x2="Math.PI/2"
    y2="1"
    :stroke="color('red')"
    opacity="0.3"
  />
  <f-line
    :x1="Math.PI/-2"
    y1="-1"
    :x2="Math.PI/2"
    y2="-1"
    :stroke="color('red')"
    opacity="0.3"
  />

  <f-line x2="1" :stroke="color('blue')" />
</f-scene>

<f-math>
  \colorbox{red}{ d } = 2 \cdot \pi \cdot \colorbox{blue}{ r }
</f-math>

<f-math>
  \colorbox{red}{ d } = 2 \cdot {{ String(Math.PI).slice(0,6) }} \cdot 1 = {{ String(2 * Math.PI * 1).slice(0,6) }}
</f-math>

<f-scene grid step="1">
  <f-circle
    :fill="color('orange')"
    stroke-width="0"
    opacity="0.8"
  />
  <f-line x2="1" :stroke="color('blue')" />
</f-scene>

<f-math>
  \colorbox{orange}{ a } = \pi \cdot \colorbox{blue}{ r }^2
</f-math>

<f-math>
  \colorbox{orange}{ a } = {{ String(Math.PI).slice(0,6) }} \cdot 1^2 = {{ String(Math.PI * Math.pow(1,2)).slice(0,6) }}
</f-math>