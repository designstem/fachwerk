# Bringing math alive

For highlighting variables and  writing math equations we can use `<var>` tags and `<f-math>` components.

### Diameter and radius

~Let's draw a simple graph and set of equations to represent circle's diameter <var>d</var>, <var class="green">π</var> and radius <var class="blue">r</var>~

<f-scene grid >
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

~Let's explore further, this time circle area <var class="orange">a</var> and radius <var class="blue">r</var>, but let's make <var class="blue">r</var> an adjustable parameter:~

<f-slider
  title="r"
  from="0.5"
  to="2"
  step="0.01"
  :value="get('r',1)"
  v-on:input="i => set('r', i)"
/>
  
<f-scene grid>
  <f-circle
    :fill="color('orange')"
    stroke-width="0"
    opacity="0.8"
    :r="get('r',1)"
  />
  <f-line :x2="get('r',1)" :stroke="color('blue')" />
</f-scene>

<f-scene grid>
  <f-box
    :fill="color('orange')"
    stroke-width="0"
    opacity="0.8"
    :width="Math.sqrt(Math.PI * Math.pow(get('r',1),2))"
    :height="Math.sqrt(Math.PI * Math.pow(get('r',1),2))"
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

There is a range of colors available, both for `<var>` tags, <var>red</var> <var class="orange">orange</var> <var class="yellow">yellow</var> <var class="blue">blue</var> <var class="purple">purple</var> <var class="blue">blue</var> <var class="green">green</var> <var class="gray">gray</var> and also for `<f-math>` coloring:

<f-math>
	color = \color{red} red \color{black}
  color = \color{orange} orange \color{black}
  color = \color{blue} purple \color{black}
  color = \color{purple} purple \color{black}
  color = \color{green} green \color{black}
  color = \color{gray} gray  \color{black}
</f-math>

Note that `\color{red}` symbol acts as a trigger: if you set it, it will populate through the rest of the equation. To stop the population, you will have to add another symbol `\color{black}` to the point where coloring should be ending.

Compare this

<f-math>
	\color{red} a \cdot b \cdot c
</f-math>

to this

<f-math>
	\color{red} a \color{black} \cdot b \cdot c
</f-math>

