## Music visualization

Inspired by https://kottke.org/17/11/classical-music-scores-as-colorful-data-visualizations

<f-scene width="500" height="500">
  <f-group v-for="(d,i) in 20" :key="i">
    <f-circle
      v-for="(r,j) in 20" :key="j"
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
  </f-group>
</f-scene>