## Music visualization

Inspired by https://kottke.org/17/11/classical-music-scores-as-colorful-data-visualizations

<f-scene width="500" height="500">
  <f-group v-for="(d,i) in 20" :key="i">
    <f-circle
      v-for="(r,j) in 20" :key="j"
      :x="polarx(
        scale(d,0,20,0,360),
        scale(r,0,20,0.5,1.5)
      )"
      :y="polary(
        scale(d,0,20,0,360),
        scale(r,0,20,0.5,1.5)
      )"
      :r="any(
        random(0.01,0.06,true),
        random(0.01,0.1,true),
      )"
      :fill="hsl(random(160,360),100,50,0.25)"
      stroke="none"
    />
  </f-group>
</f-scene>