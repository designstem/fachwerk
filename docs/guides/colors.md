# Using colors

### Preset colors

A compact set of useful colors are available as CSS variables, `var(--purple)` and Javascript functions `color('purple')`:

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
    y="0.3"
  >{{ c }}</f-text>
  <f-text
    style="font-size: 1.8em"
    :fill="color('white')"
    y="-0.3"
  >{{ color(c) }}</f-text>
</f-scene>
