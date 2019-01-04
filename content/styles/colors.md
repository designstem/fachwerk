## Colors

A compact set of useful colors, available as CSS variables, `var(--purple)` and Javascript functions `color('purple')`

<f-scene
  width="150" height="150"
  v-for="c in [
    'purple', 
    'red',
    'yellow',
    'darkblue',
    'blue',
    'lightblue',
    'darkestgray',
    'darkergray',
    'darkgray',
    'gray',
    'lightgray', 
    'lightergray', 
]">
  <f-circle
    :fill="color(c)"
    stroke="none"
    r="1.8"
  />
  <f-text
    style="font-size: 1.8em"
    :fill="color('white')"
  >{{ c }}</f-text>
</f-scene>
