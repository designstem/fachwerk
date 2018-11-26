<f-scene grid v-for="easing in Object.keys(anime.easings)">
  <f-point v-for="x in range(0,1,0.01)"
    :x="x"
    :y="anime.easings[easing](x,1)"
  />
</f-scene>

<f-scene grid v-for="easing in Object.keys(anime.easings).filter(e => !e.endsWith('Elastic'))">
  <f-point v-for="x in range(0,1,0.01)"
    :x="x"
    :y="anime.easings[easing](x)"
  />
</f-scene>