export default `## 3D playground

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