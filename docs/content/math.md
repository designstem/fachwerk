# Bringing math alive

For highlighting variables and  writing math equations we can use `<var>` tags and `<f-math>` components. `<f-math>` equations are written in classic LaTex syntax.

> A good tutorial on LaTeX format can be found here:  https://en.wikibooks.org/wiki/LaTeX/Mathematics

### Examples

#### Circle <var>diameter</var> and <var class="blue">radius</var>

Let's draw a simple graph and set of equations to represent circle's diameter <var>d</var>, <var class="green">π</var> and radius <var class="blue">r</var>:  

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

#### Circle <var class="orange">area</var> and <var class="blue">radius</var>

Let's explore further, this time circle area <var class="orange">a</var> and radius <var class="blue">r</var>, but let's make <var class="blue">r</var> an adjustable parameter:

<var class="blue">r</var> value is <var class="blue">{{ get('r') }}</var>

<f-slider
  from="0.5"
  to="2"
  step="0.01"
  set="r"
/>
  
<f-scene grid width="200" height="200">
  <f-circle
    :fill="color('orange')"
    stroke-width="0"
    opacity="0.8"
    :r="get('r',1)"
  />
  <f-line :x2="get('r',1)" :stroke="color('blue')" />
</f-scene>

<f-scene grid width="200" height="200">
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

### Color variables in text

Variables in text can be marked as such: <var>variable</var>.

There is a range of colors available for `<var>` tags:

<var class="orange">orange</var>
<var class="yellow">yellow</var>
<var class="blue">blue</var>
<var class="purple">purple</var>
<var class="blue">blue</var>
<var class="green">green</var>
<var class="gray">gray</var>

### Color variables math equations

In `<f-math>` component same colors are available:

<f-math>
	color = \color{red} red \color{black}
  color = \color{orange} orange \color{black}
  color = \color{blue} purple \color{black}
  color = \color{purple} purple \color{black}
  color = \color{green} green \color{black}
  color = \color{gray} gray  \color{black}
</f-math>

***Note*** Setting `\color{red}` or any other color acts as a *trigger*: if you set it, it will populate through the rest of the equation.

To stop the population, you will have to add another symbol `\color{black}` to the point where coloring should be ending.

Compare this

<f-math>
	\color{red} a \cdot b \cdot c
</f-math>

to this

<f-math>
	\color{red} a \color{black} \cdot b \cdot c
</f-math>