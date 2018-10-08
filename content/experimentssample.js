export default ` # Misc experiments

## Music visualization

Inspired by https://kottke.org/17/11/classical-music-scores-as-colorful-data-visualizations

<TwoScene>
  <template v-for="d in 20">
    <circle
      v-for="r in 20"
      :cx="cx(
        scale(d,0,20,0,360),
        scale(r,0,20,0.5,1.5)
      )"
      :cy="cy(
        scale(d,0,20,0,360),
        scale(r,0,20,0.5,1.5)
      )"
      :r="any(
        random(0.05,0.1,true),
        random(0.05,0.1,true),
        random(0.1,0.15,true)
      )"
      :fill="hsl(random(160,360),100,50,0.25)"
    />
  </template>
</TwoScene>

---

## 2D groups and rotations

<AnimeData :to="360">
<TwoScene slot-scope="{value}">
  <TwoGrid />
  <!-- Group and then rotate -->
  <TwoGroup :rotation="{ z: value } ">
    <TwoBox :x="x" v-for="x in [-1,0,1]" />
  </TwoGroup>
  <!-- Rotate and then group -->
  <TwoGroup
    v-for="x in [-1,0,1]"
    :rotation="{ z: value }"
    :position="{ x }"
  >
    <TwoBox fill="var(--color-red)" :opacity="0.5" />
  </TwoGroup>
</TwoScene>
</AnimeData>

---

## Rotating spiral

<ThreeScene>
<ThreeGrid />
  <AnimeData
    :to="deg2rad(360)"
    :duration="10000"
  >
  <ThreeGroup
    slot-scope="{value}"
    :rotation="{x: value, y: value}"
  >
    <ThreeLine
      v-for="(c,i) in 100"
      :key="i"
      :points="[
        {
          x: cx(500 / 100 * c, 2),
          y: i / 150 - 1,
          z: cy(500 / 100 * c, 2)
        },
        {
          x: cx(500 / 100 * (c + 1), 1),
          y: i / 5,
          z: cy(500 / 100 * (c + 1), 1)
        }
      ]"
    /><ThreeGrid />
  </ThreeGroup>
  </AnimeData>
</ThreeScene>

---

## Dynamic math equations

After [killing math](http://worrydream.com/KillMath/) it is time to [bring it back alive](https://beta.observablehq.com/@mbostock/colorized-math)!

<SliderData>
<Math
  slot-scope="data"
  :update="data.value"
>
  a = 10
  b = a^2 + \\colorbox{c}{ {{ data.value }} }
  b = 10^2 + \\colorbox{c}{ {{ data.value }} }
  b = {{ Math.pow(10,2)+parseInt(data.value) }}
</Math>
</SliderData>

---

## VR scene

<VrScene>
  <VrGrid />
  <VrLine />
  <a-sphere position="0 0 0" radius="0.5" color="red"/>
</VrScene>
`;