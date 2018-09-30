export default `# 3D playground

### Polygon and slider

<Slider>
  <ThreeScene slot-scope="{value}">
    <ThreeMesh
      :rotation="{x: value, y: value, z: value}"
    >
      <ThreeRegularPolygon />
    </ThreeMesh>
  </ThreeScene>  
</Slider>

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