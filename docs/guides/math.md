# Math and graphs

For graphs and equations we use `<f-scene>` and `<f-math>` components.

## Diameter and radius

~Let's draw a simple graph and set of equations to represent circle's diameter <var>d</var> and radius <var class="blue">r</var>~

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

<br><br>

### Area and radius, brought alive

~Let's explore further, this time circle area <var class="orange">a</var> and radius <var class="blue">r</var>, but let's make r an adjustable parameter:~

{{ set('r',1) }}

<f-slider
  title="r"
  from="0.5"
  to="2"
  step="0.01"
  :value="get('r')"
  v-on:input="i => set('r', i)"
/>
  
<f-scene grid step="1">
  <f-circle
    :fill="color('orange')"
    stroke-width="0"
    opacity="0.8"
    :r="get('r')"
  />
  <f-line :x2="get('r')" :stroke="color('blue')" />
</f-scene>

<f-math>
  \colorbox{orange}{ a } = \pi \cdot \colorbox{blue}{ r }^2
</f-math>

<f-math :update="get('r')">
  \colorbox{orange}{ a } = {{ String(Math.PI).slice(0,6) }} \cdot {{ get('r',1) }} ^2 = {{ String(Math.PI * Math.pow(get('r'),2)).slice(0,6) }}
</f-math>

#### Variable colors

There is a range of `<var>` colors available such as <var>red</var> <var class="orange">orange</var> <var class="purple">purple</var> <var class="blue">blue</var> <var class="green">green</var> <var class="gray">gray</var>.

<f-math>
	color = \colorbox{red}{ red }
  color = \colorbox{orange}{ orange }
  color = \colorbox{purple}{ purple }
  color = \colorbox{green}{ green }
  color = \colorbox{gray}{ gray }
</f-math>
