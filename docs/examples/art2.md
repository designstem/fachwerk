<f-scene grid responsive>
  <f-circle
    v-for="x in [-1,0,1]"
    :x="x"
    y="0"
    r="0.5"
    fill="orange"
    stroke
    multiply
  />
</f-scene>