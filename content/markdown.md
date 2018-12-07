# Big header

## Medium header

### Small header

#### Smaller header

It supports **simple** *formatting*, ~striking~ text, links like https://help.github.com/articles/basic-writing-and-formatting-syntax/ and also [named](https://help.github.com/articles/basic-writing-and-formatting-syntax/) links.

Adding images is currently tricky, we have to rely on either a  complex Markdown sytanx like `![]\(image_link_here.jpg\)` but we are working on a simpler alternative.

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

<f-scene grid>
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