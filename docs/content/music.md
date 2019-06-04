# Making music

### Requirements

Music libraries are not included with default Fachwerk installation. You will need to add following lines to the `<head>` section it your `index.html` file:

<p />

    <script src="https://unpkg.com/tone"></script>
    <script src="https://unpkg.com/webmidi"></script>
    <script src="https://raw.githack.com/danigb/tonal/master/dist/tonal.min.js"></script>
    
You will also need to set [Chrome autoplay policy](chrome://flags/#autoplay-policy) to *No user gesture is required*.

</blockquote>

### Generate beats

Let's use `<f-sequencer>` to generate the beats on each 1/8 note.

<f-inline>
  <button v-on:click="send('start')">Start</button>
  <button v-on:click="send('stop')">Stop</button>
</f-inline>

<f-sequencer
  beats="8"
  v-on:beat="beat => set('beat', beat)"
/>

    Beat: {{ get('beat') }}

### Play beats

Note that sequencer only emits beat events, you will need to hook it up to actual sound generator. Let's use `<f-drum>` for this.

<f-inline>
  <button v-on:click="send('start')">Start</button>
  <button v-on:click="send('stop')">Stop</button>
</f-inline>

<f-slider title="BPM" value="120" from="1" to="300" integer set="bpm" />

> 🔈 You should be hearing 1/8 note hihat sound 
    
<f-drum v-slot="{ hihat }">
  <f-sequencer
  	:bpm="get('bpm',120)"
    beats="8"
    v-on:beat="beat => hihat()"
  />
</f-drum>

### Draw the beats

How to represent those 1/8 beats visually? The classic approach is to show show them in line as in classic analog sequencers and drum machines.

<f-artboard width="300" height="50">
	<f-circle 
  	v-for="i in 8"
    r="10"
    :x="i * 25"
    y="25"
    :fill="color(get('beat',1) == i ? 'red' : 'white')"
  />
</f-artboard>

We could also be more experimental and visualize beats in circle.

<f-scene width="250" height="250">
	<f-circle
  	v-for="(p,i) in polarpoints(8,1.5)"
    :position="p"
    r="0.17"
    :fill="color(get('beat',1) == i + 1 ? 'red' : 'white')"
  />
</f-scene>

### Work with MIDI devices

First let's do a quick status check, `<f-midi-info />` gives us an idea which MIDI devices we have available.

<f-midi-info />

If so, let's hook a `f-midi-in` with `f-synth` and play some notes.

<f-synth v-slot="{ noteon, noteoff }">
  <f-midi-in
    v-on:noteon="noteon"
    v-on:noteoff="noteoff"
  />
</f-synth>

> 🔈You should be hearing notes when external MIDI instrument is played

We can also do it other way around: control external MIDI devices from virtual keyboard

<f-midi-out v-slot="{ noteon, noteoff }">
  <f-piano
    v-on:noteon="noteon"
    v-on:noteoff="noteoff"
  />
</f-midi-out>

<p />

> 🎹 You should external MIDI instrument playing when onscreen keyboard is touched