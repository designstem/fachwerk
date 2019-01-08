# Math and graphs

For graphs and equations we use `<f-scene>` and `<f-math>` components.

### Diameter and radius

~Let's draw a simple graph and set of equations to represent circle's diameter <var>d</var>, <var class="green">π</var> and radius <var class="blue">r</var>~

<f-scene grid step="1">
  <f-line
    :x1="Math.PI/-2"
    y1="1"
    :x2="Math.PI/2"
    y2="1"
    :stroke="color('green')"
  />
  <f-line
    :x1="Math.PI/-2"
    y1="-1"
    :x2="Math.PI/2"
    y2="-1"
    :stroke="color('green')"
  />
  <f-circle
    opacity="0.8"
    :stroke="color('red')"
  />
  <f-line x2="1" :stroke="color('blue')" />
</f-scene>

<f-math>
  \color{red}{ d } \color{black} = 2 \cdot \color{green} \pi \color{black} \cdot \color{blue}{ r }
</f-math>

<f-math>
  \color{red}{ d } \color {black} = 2 \cdot \color{green} {{ Math.PI }} \color{black} \cdot \color{blue} 1 \color{black} = \color{red} {{ 2 * Math.PI * 1 }}
</f-math>

<br><br>

### Area and radius, brought alive

~Let's explore further, this time circle area <var class="orange">a</var> and radius <var class="blue">r</var>, but let's make r<var class="blue">r</var> an adjustable parameter:~

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
    :r="get('r',1)"
  />
  <f-line :x2="get('r',1)" :stroke="color('blue')" />
</f-scene>

<f-math>
  \color{orange} a \color{black} = \pi \cdot \color{blue} r \color{black} ^2
</f-math>

<f-math :update="get('r')">
  \color{orange} a \color{black} = {{ Math.PI }} \cdot \color{blue} {{ get('r',1) }} \color{black} ^2 = \color{orange} {{ Math.PI * Math.pow(get('r',1),2) }}
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
