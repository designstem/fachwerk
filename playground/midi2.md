<f-slider title="BPM" from="50" to="200" value="120" set="bpm" step="0.5" />

<f-sequencer
	:bpm="get('bpm', 120)"
  v-on:beat1="log('beat1')"
  v-on:beat2="log('beat2')"
  v-on:beat3="log('beat3')"
  v-on:beat4="log('beat4')"
/>

<!--
<span
	:style="{ borderRadius: 0, background: i == get('c') ? 'yellow' : '' }"
	v-for="c,i in chords()"
  @click="() => set('c',i)">
  {{ c }}
</span>

<f-slider integer :to="chords().length" set="c" />

#### Root note: {{ octave()[get('r', 0)] }}

<f-slider integer :to="octave().length" set="r" />

<f-midi-out class="grid" channel="1" v-slot="{ noteon, noteoff }">

<f-midi-in
  v-on:noteon="() => chord(chords()[get('c','C')], octave()[get('r', 0)]).forEach(note => noteon(note))"
/>

<f-midi-in
  cc="7"
  v-on:cc="value => set('r', round(scale(value, 0, 127, 0, octave().length)))"
/>

	{{ chord(chords()[get('c','C')], octave()[get('r', 0)]) }}
  
  <button
  	v-on:mousedown="() => chord(chords()[get('c','C')], octave()[get('r', 0)]).forEach(note => noteon(note))"
  	v-on:mouseup="() => chord(chords()[get('c','C')], octave()[get('r', 0)]).forEach(note => noteoff(note))">
    Play chord</button>
  
</f-midi-out>


-->

<!--
<f-midi-out class="grid" channel="1" v-slot="{ noteon, noteoff }">
  <f-card v-for="c in chords()" :key="c" :title="'Chord: C ' + c">
  <button
  	v-on:mousedown="() => chord(c).forEach(note => noteon(note))"
  	v-on:mouseup="() => chord(c).forEach(note => noteoff(note))"
  >Play chord</button>
  <h5>Individual keys</h5>
  <button
  	v-for="note in chord(c)"
    :key="note"
  	v-on:mousedown="() => noteon(note)"
  	v-on:mouseup="() => noteoff(note)"
  >{{ note }}</button>
  <p />
  </f-card>
</f-midi-out>
-->

<!--f-midi-out class="grid" channel="1" v-slot="{ noteon, noteoff }">
	<f-card
  	v-for="key in ['C5','D5','E5']"
  	v-on:mousedown.native="() => noteon(key)"
  	v-on:mouseup.native="() => noteoff(key)"
  >{{ key }}</f-card>
</f-midi-out-->
ß
<!--

<f-midi-in
  cc="5"
  v-on:cc="value => set('y', value)"
/>

<f-midi-in
  cc="7"
  v-on:cc="value => set('x', value)"
/>

<f-canvas width="256" height="256" grid>
	<f-pixel
  	:x="round(scale(get('a',0), 0, 127, 0, 255))"
  	:y="round(scale(get('y',0), 0, 127, 255, 0))"
  />
</f-canvas>

<!--f-artboard :width="127 * 2" :height="127 * 2" grid>
	<f-circle
  	:x="get('x',0) * 2"
  	:y="(127 - get('y',0)) * 2"
    r="10"
  />
</f-artboard-->

-->
    
<!--

<f-midi-in
  cc="5"
  v-on:cc="value => set('y', value)"
/>
  
<f-synth v-slot="{ noteon, noteoff }">
  <f-midi-in
    v-on:noteon="n => noteon(({'D#1': 'C3', 'E1': 'D#3', 'F1': 'G3','F#1': 'C4','G0': 'D#4', 'G#0': 'G4', 'A0': 'C5','A#0': 'D#5'})[n])"
    v-on:noteoff="n => noteoff(({'D#1': 'C3', 'E1': 'D#3', 'F1': 'G3','F#1': 'C4','G0': 'D#4', 'G#0': 'G4', 'A0': 'C5','A#0': 'D#5'})[n])"
    cc="5"
  	v-on:cc="value => { noteon(notes()[value].note); set('a',get('a',0) + 1); }"
  />
</f-synth>

<f-midi-in
  v-on:noteon="note => set('note', note)"
/>

<pre>Last reveived note: {{ get('note','') }}</pre>

<f-artboard>
  <f-line
    v-for="(note,i) in notes()"
    :x1="i * 4 + 2"
    y1="0"
    :x2="i * 4 + 2"
    :y2="note.sharp ? 50 : 100"
    :stroke="note.note == get('note','') ? 'red' : note.sharp ? 'black' : 'var(--lightgray)'"
  />
</f-artboard>

-->

<!--f-midi-in
  v-on:noteon="note => log('on ' + note)"
  v-on:notoff="note => log('off ' + note)"
/-->

<!--
<f-midi-in
	cc="all"
  v-on:cc="x => log(x)"
/>

<f-midi-in
	cc="all"
  v-on:cc="x => set('x',x)"
/>

<f-midi-in
	cc="all"
  v-on:cc="y => set('y',y)"
/>

Value: {{ get('a') }}
  
<f-scene grid>
	<f-circle
  	:x="scale(get('x',0),0,127,-2,2)"
    :y="scale(get('y',0),0,127,-2,2)"
  />
</f-scene>
-->