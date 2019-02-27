#### HSL / Illustrator color wheel

<f-scene grid>
  <f-line 
    v-for="(a,i) in range(0,360,2)" 
    :x1="polarx(a,0.25)"
    :y1="polary(a,0.25)"
    :x2="polarx(a)"
    :y2="polary(a)"
    :stroke="hsl(a)"
    :stroke-width="5"
  />
  <f-line 
    v-for="(a,i) in range(0,360,8)" 
    :x1="polarx(hue2ai(a),1.05)"
    :y1="polary(hue2ai(a),1.05)"
    :x2="polarx(hue2ai(a),1.1)"
    :y2="polary(hue2ai(a),1.1)"
    :stroke-width="2"
  />
</f-scene>

<f-scene grid>
  <f-line 
    v-for="(a,i) in range(0,360,2)" 
    :x1="polarx(a,0.25)"
    :y1="polary(a,0.25)"
    :x2="polarx(a)"
    :y2="polary(a)"
    :stroke="hsl(hue2ai(a))"
    :stroke-width="5"
  />
</f-scene>

<!--
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
    v-for="(h,i) in aihues()" 
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
    v-for="(h,i) in aihues()" 
    :x="polarx(360 / 12 * i)"
    :y="polary(360 / 12 * i)"
    r="0.15"
    :fill="hsl(h)"
  />
  </f-group>
</f-scene>
-->