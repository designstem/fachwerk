<f-scene dots>
	<f-group v-for="y in range(-2,2)">
    <component
    	:is="any('f-circle','f-hexagon')"
      v-for="x in range(-2,2)"
      :x="x"
      :y="y"
      :r="random(0,1,true)"
      :fill="hsl(random(0,360))"
      stroke
      multiply
    />
  </f-group>
</f-scene>