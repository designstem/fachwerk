# Bringing math alive

For highlighting variables and  writing math equations we can use `<var>` tags and `<f-math>` components. `<f-math>` equations are written in classic LaTex syntax.

### Examples

#### Circle diameter <f-math inline red>d</f-math> and radius <f-math inline blue>r</f-math>

Let's draw a simple graph and set of equations to represent circle's diameter <f-math inline red>d</f-math>, <f-math inline green>\pi</f-math> and radius <f-math inline blue>r</f-math>:  

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

#### Circle area <f-math inline orange>a</f-math> and radius <f-math inline blue>r</f-math>

Let's explore further, this time circle area <f-math inline orange>a</f-math> and radius <f-math inline blue>r</f-math>, but let's make <f-math inline blue>r</f-math> an adjustable parameter:

<f-math :update="get('r')">\color{blue} r \color{black} = \color{blue} {{ get('r') }}</f-math>

<f-slider
  from="0.5"
  to="2"
  step="0.01"
  set="r"
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
  \color{orange} a \color{black} = \color{green} \pi \color{black} \cdot \color{blue} r \color{black} ^2
</f-math>

<f-math :update="get('r')">
  \color{orange} a \color{black} = \color{green} {{ Math.PI }} \color{black} \times \color{black} \color{blue} {{ get('r',1) }} \color{black} ^2 = \color{orange} {{ Math.PI * Math.pow(get('r',1),2) }}
</f-math>
