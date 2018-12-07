## Music visualization

Inspired by https://kottke.org/17/11/classical-music-scores-as-colorful-data-visualizations

<f-scene width="500" height="500">
  <template v-for="d in 20">
    <f-circle
      v-for="r in 20"
      :x="cx(
        scale(d,0,20,0,360),
        scale(r,0,20,0.5,1.5)
      )"
      :y="cy(
        scale(d,0,20,0,360),
        scale(r,0,20,0.5,1.5)
      )"
      :r="any(
        random(0.05,0.06,true),
        random(0.05,0.06,true),
        random(0.1,0.10,true)
      )"
      :fill="hsl(random(160,360),100,50,0.25)"
      stroke="none"
    />
  </template>
</f-scene>

### Hexagon

<f-scene grid>
  <f-regularpolygon :fill="hsl(0,100,50,0.5)" />
  <f-regularpolygon count="3" :fill="hsl(25,100,50,0.5)" />
  <f-regularpolygon count="3" rotation="180" :fill="hsl(50,100,50,0.5)" />
  <f-line  
     v-for="a in range(0,360,60)"
     rotation=""
     :x2="polarx(a)"
     :y2="polary(a)"
    
  />
    