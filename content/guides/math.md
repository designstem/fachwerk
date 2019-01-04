# Math basics

For graphs and equations we use `<f-scene>` and `<f-math>` components:

#### Circle diameter <var>d</var> and radius <var>r</var> 

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

  <f-line y2="-1" :stroke="color('blue')" />
</f-scene>

<f-math>
  \colorbox{red}{ d } = 2 \cdot \pi \cdot \colorbox{blue}{ r }
</f-math>

<f-math>
  \colorbox{red}{ d } = 2 \cdot {{ String(Math.PI).slice(0,6) }} \cdot 1 = {{ String(2 * Math.PI * 1).slice(0,6) }}
</f-math>

#### Circle area <var>a</var> and radius <var>r</var>

<f-scene grid step="1">
  <f-circle
    :fill="color('orange')"
    stroke-width="0"
    opacity="0.8"
  />
  <f-line y2="-1" :stroke="color('blue')" />
</f-scene>

<f-math>
  \colorbox{orange}{ a } = \pi \cdot \colorbox{blue}{ r }^2
</f-math>

<f-math>
  \colorbox{orange}{ a } = {{ String(Math.PI).slice(0,6) }} \cdot 1^2 = {{ String(Math.PI * Math.pow(1,2)).slice(0,6) }}
</f-math>