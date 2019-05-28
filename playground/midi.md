<f-synth v-slot="{ noteon, noteoff }">
  <f-midi-in
    v-on:noteon="n => noteon(n.replace('0','2').replace('1','3'))"
    v-on:noteoff="n => noteoff(n.replace('0','2').replace('1','3'))"
  />
</f-synth>

<f-midi-in
  v-on:noteon="note => set('note', note)"
/>

<pre>Last reveived note: {{ get('note','') }}</pre>

<f-artboard>
  <f-line
    v-for="(note,i) in notes()"
    :x1="i * 6 + 2"
    y1="0"
    :x2="i * 6 + 2"
    :y2="note.sharp ? 50 : 100"
    :stroke="note.note == get('note','') ? 'red' : note.sharp ? 'black' : 'var(--lightgray)'"
  />
</f-artboard>

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