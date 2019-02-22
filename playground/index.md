#### HSL / Illustrator color wheel

<f-scene grid>
  <f-group rotation="120">
  <f-point 
    v-for="(h,i) in polarpoints(64,1)" 
    :x="h.x"
    :y="h.y"
    stroke-width="12"
    :stroke="hsl(360 / 64 * i)"
  />
  <f-circle 
    v-for="(h,i) in aiHues()" 
    :x="polarx(h)"
    :y="polary(h)"
    r="0.15"
    :fill="hsl(h)"
  />
  </f-group>
</f-scene>

<f-scene grid>
  <f-group rotation="60">
  <f-circle 
    v-for="(h,i) in aiHues()" 
    :x="polarx(360 / 12 * i)"
    :y="polary(360 / 12 * i)"
    r="0.15"
    :fill="hsl(h)"
  />
  </f-group>
</f-scene>
