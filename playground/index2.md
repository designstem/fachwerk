<f-slider set="d" to="60" integer />
<f-slider set="d2" to="60" integer />

<f-inline>
<f-clock :duration="get('d')" :duration2="get('d2')" />

Short duration {{ get('d') }}min, long duration duration {{ get('d2') }}min

#### Itten color wheel (original and mapped to hsl)

<f-scene grid>
	<f-group rotation="180">
  <f-line
    :x1="polarx(240,0.1)"
    :y1="polary(240,0.1)"
    :x2="polarx(240,1)"
    :y2="polary(240,1)"
    :stroke="hsl(0)"
    stroke-width="20"
  />
  <f-line
    :x1="polarx(0,0.1)"
    :y1="polary(0,0.1)"
    :x2="polarx(0,1)"
    :y2="polary(0,1)"
    :stroke="hsl(60)"
    stroke-width="20"
  />
  <f-line
    :x1="polarx(120,0.1)"
    :y1="polary(120,0.1)"
    :x2="polarx(120,1)"
    :y2="polary(120,1)"
    :stroke="hsl(240)"
    stroke-width="20"
  />
  <f-point 
    v-for="(c,i) in colorscale('yellow','blue', 6)" 
    :x="polarx(360 / 12 * i)"
    :y="polary(360 / 12 * i)"
    stroke-width="20"
    :stroke="c"
  />
  <f-point 
    v-for="(c,i) in colorscale('blue','red', 6)" 
    :x="polarx(360 / 12 * i + 120)"
    :y="polary(360 / 12 * i + 120)"
    stroke-width="20"
    :stroke="c"
  />
  <f-point 
    v-for="(c,i) in colorscale('red','yellow', 5)" 
    :x="polarx(360 / 12 * i + 120 + 120)"
    :y="polary(360 / 12 * i + 120 + 120)"
    stroke-width="20"
    :stroke="c"
  />
  </f-group>
</f-scene>

<f-scene grid>
	<f-group rotation="120">
  <f-line
    :x1="polarx(0,0.1)"
    :y1="polary(0,0.1)"
    :x2="polarx(0,1)"
    :y2="polary(0,1)"
    :stroke="hsl(0)"
    stroke-width="20"
  />
  <f-line
    :x1="polarx(60,0.1)"
    :y1="polary(60,0.1)"
    :x2="polarx(60,1)"
    :y2="polary(60,1)"
    :stroke="hsl(60)"
    stroke-width="20"
  />
  <f-line
    :x1="polarx(240,0.1)"
    :y1="polary(240,0.1)"
    :x2="polarx(240,1)"
    :y2="polary(240,1)"
    :stroke="hsl(240)"
    stroke-width="20"
  />
  <f-point
  	v-for="(p,i) in polarpoints(12,1)"
    :position="p"
    stroke-width="20"
    :stroke="hsl(((360 / 12) * i))"
  />
  </f-group>
</f-scene>


### RGB, CMY and Itten in 3D

<f-scene3>
	<f-group3 rotation="10 -20 0">
  <f-grid3 />
  <f-line3 x2="1" y2="1" />
  <f-line3 x2="1" y2="0" />
  <f-line3 z2="1" />
	<f-point3
  	position="0 0 0"
    :stroke="rgb(0,0,0)"
    stroke-width="20"
  />
  <f-point3
  	position="1 0 0"
    :stroke="rgb(255,0,0)"
    stroke-width="20"
  />
  <f-point3
  	position="0 1 0"
    :stroke="rgb(0,255,0)"
    stroke-width="20"
  />
  <f-point3
  	position="0 0 1"
    :stroke="rgb(0,0,255)"
    stroke-width="20"
  />
  <f-point3
  	position="1 1 0"
    :stroke="rgb(255,255,0)"
    stroke-width="20"
  />
  <f-point3
  	position="1 0 1"
    :stroke="rgb(255,0,255)"
    stroke-width="20"
  />
  <f-point3
  	position="0 1 1"
    :stroke="rgb(0,255,255)"
    stroke-width="20"
  />
  <f-point3
  	position="1 1 1"
    :stroke="rgb(240,240,240)"
    stroke-width="20"
  />
  </f-group3>
  </f-scene3>