<f-scene grid responsive>
  <f-circle
    v-for="x in range(-1,1,0.5)"
    :x="x"
    y="0"
    r="0.5"
    fill="orange"
    stroke
    multiply
  />
</f-scene>