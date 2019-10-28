<f-scene>
  <f-polargrid count="20" />
  <f-line
    v-for="r in range(0,2,0.25)"
    :key="r"
    closed
    :points="
      array(10,360 / 10)
      	.map((a, i) => 
        	polarxy(
          	a,
            [r, 2 - r][i % 2]
          )
        )
  	"
  />
</f-scene>
