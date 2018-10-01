export default `# Playground

## 2D animations

<Anime :alternate="true">
  <div slot-scope={value}>
  <TwoScene>
      <circle :r="value" />
  </TwoScene>
  <label>
    Radius <code>{{ Math.floor(value) }}px</code>
  </label>
  <input type="range" v-model="value" step="0.01"/>
  </div>
</Anime>

---

## Dynamic math equations

After [killing math](http://worrydream.com/KillMath/) it is time to [bring it back alive](https://beta.observablehq.com/@mbostock/colorized-math)!

<Slider>
<Math
  slot-scope="{value}"
  :value="value"
>
  a = 10
  b = a^2 + \\colorbox{c}{ {{ value }} }
  b = 10^2 + \\colorbox{c}{ {{ value }} }
  b = {{ Math.pow(10,2)+parseInt(value) }}
</Math>
</Slider>

---

## Rotating spiral

<ThreeScene>
  <Anime
    :to="deg2rad(360)"
    duration="10000"
  >
  <ThreeGroup
    slot-scope="{value}"
    :rotation="{x: value, y: value}"
  >
    <ThreeLine
      v-for="(c,i) in 50"
      :key="i"
      :from="{
        x: cx(500 / 100 * c, 0.5),
        y: i / 200,
        z: cy(500 / 100 * c, 0.5)
      }"
      :to="{
        x: cx(500 / 100 * (c + 1), 0.5),
        y: i / 100,
        z: cy(500 / 100 * (c + 1), 0.5)
      }"
    />
  </ThreeGroup>
  </Anime>
</ThreeScene>

---

## Polygon and slider

<Slider :max="360" title="Angle" >
  <ThreeScene slot-scope="{value}">
    <ThreeGroup
      :rotation="{
        x: deg2rad(value),
        y: deg2rad(value),
        z: deg2rad(value)
    }">
      <ThreeRegularPolygon />
    </ThreeGroup>
  </ThreeScene>  
</Slider>

---

## Spinning polygon

<ThreeScene>
  <Anime
    :to="deg2rad(360)"
    duration="10000"
  >
    <ThreeGroup
      slot-scope="{value}"
      :rotation="{z: value}"
    >
      <ThreeRegularPolygon />
    </ThreeGroup>
    </Anime>
</ThreeScene>  

`;