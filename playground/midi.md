| theme: dark

<f-midi-out v-slot="{ noteon: n }">
<f-sequencer
	bpm="160"
  v-on:beat1="n('C2')											"
  v-on:beat2="n('C2');										"
  v-on:beat3="														"
  v-on:beat4="									         	"
  v-on:beat5="				n('D2');					 	"
  v-on:beat6="n('C2');          					"
  v-on:beat7="									 	        "
  v-on:beat8="									n('D#2'); "
/>
</f-midi-out>

<!--f-drum v-slot="{ kick, snare }">
  <button v-on:click="kick">Extra kick</button>
  <button v-on:click="snare">Extra snare</button>
  <f-sequencer
    v-on:beat1="kick"
    v-on:beat2="kick"
    v-on:beat3="kick"
  />
</f-drum->

<!--f-sequencer
  v-on:beat1="log('1')"
  v-on:beat2="log('2')"
/-->

<!--
<f-slider title="BPM" from="1" to="300" value="120" set="bpm" step="0.5" />

<f-sequencer
	:bpm="get('bpm', 120)"
  v-on:beat1="set('beat',0); set('a', get('a',0) + 10)"
  v-on:beat2="set('beat',1)"
/>

<f-scene width="600" height="600">
	<f-hex-pattern>
  <f-rotation>
	<f-circle-pattern
  	count="12"
  	:r="[0.2,0.4][get('beat',0)]" :rotation="360 -get('a',0)"
  >
	<f-hexagon
    stroke="red"
    :r="[0.5,1.5][get('beat',0)]"
    :rotation="360 -get('a',0)"
    :scale="get('a',0) / 400"
    stroke-width="1"
  />
  </f-circle-pattern>
  </f-rotation>
	</f-hex-pattern>
</f-scene>

-->