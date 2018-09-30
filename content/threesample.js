export default `# Playground

### Dynamic math

<Slider>
  <div slot-scope="{value}">
    <Math :math="'a = ' + value" />
    <Math :math="
      'c = a^2 + 10 = '
      + value
      + '^2 + 10 = '
      + (Math.pow(value,2) + 10)
    " />
  </div>
</Slider>

---

### Rotating spiral

<ThreeScene>
  <Anime
    :to="deg2rad(360)"
    duration="10000"
  >
  <ThreeMesh
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
  </ThreeMesh>
  </Anime>
</ThreeScene>

---

### Polygon and slider

<Slider :max="360" title="Angle" >
  <ThreeScene slot-scope="{value}">
    <ThreeMesh
      :rotation="{
        x: deg2rad(value),
        y: deg2rad(value),
        z: deg2rad(value)
    }">
      <ThreeRegularPolygon />
    </ThreeMesh>
  </ThreeScene>  
</Slider>

---

### Spinning polygon

<ThreeScene>
  <Anime
    :to="deg2rad(360)"
    duration="10000"
  >
    <ThreeMesh
      slot-scope="{value}"
      :rotation="{z: value}"
    >
      <ThreeRegularPolygon />
    </ThreeMesh>
    </Anime>
</ThreeScene>  

`;