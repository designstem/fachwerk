<f-scene grid responsive>
  <f-group
    v-for="y in range(-1,1,1)"
  >
    <f-circle
      v-for="x in range(-1,1,1)"
      :x="x"
      :y="y"
      :r="random(0,1,true)"
      fill="orange"
      stroke
      multiply
    />
  </f-group>
</f-scene>