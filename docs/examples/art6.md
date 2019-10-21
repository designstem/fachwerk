<f-scene responsive download>
  <f-group
    v-for="y in range(-1,1,0.5)"
  >
    <f-circle
      v-for="x in range(-1,1,0.5)"
      :x="x"
      :y="y"
      :r="random(0,0.5,true)"
      :fill="hsl(random(0,360))"
      stroke
      multiply
    />
  </f-group>
</f-scene>