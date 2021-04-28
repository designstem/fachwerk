## Making music

### Requirements

Music libraries are not included with default Fachwerk installation. You will need to add following lines to the `<head>` section it your `index.html` file:

<p />

    <script src="https://unpkg.com/tone"></script>
    <script src="https://unpkg.com/webmidi"></script>
    <script src="https://raw.githack.com/danigb/tonal/master/dist/tonal.min.js"></script>

You will also need to set [Chrome autoplay policy](chrome://flags/#autoplay-policy) to _No user gesture is required_.

</blockquote>

### Make beats

Let's use `<f-sequencer>` to generate the beats on each 1/8 note.

<f-sequencer />

It seems nothing happens at this point. We need to do some additional setup.

By default sequencer only _emits_ `beat` event, you will need to hook it up to actual sound generator that take beat event as input and play sounds. Let's wrap sequencer to `<f-drum>` components and on each `beat` event let's play closed hihat sound.

<f-drum v-slot="{ closedhihat }">
  <f-sequencer
  	:bpm="get('bpm',120)"
    beats="8"
    v-on:beat="beat => { closedhihat(); set('beat', beat) }"
  />
</f-drum>

    {{ get('beat') }}

Also, let's set up some controls. We need to send `start` and `stop` event so the sequencer will start (is is stopped by default).

<f-inline>
  <button v-on:click="send('start')">Start</button>
  <button v-on:click="send('stop')">Stop</button>
</f-inline>

White at it, let's also control **BPM** or _beats per minute_ value dynamically.

<f-slider title="BPM" value="120" from="1" to="300" integer set="bpm" />

> 🔈 When pressing 'Start" you should be hear 1/8 note hihat sound

### Draw beats

How to represent those 1/8 beats visually? The traditional approach is to show show them in line as in classic [analog sequencers](http://www.vintagesynth.com/arp/arpseq.php) and [drum machines](https://en.wikipedia.org/wiki/Roland_TR-808).

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

<f-scene width="150" height="150">
	<f-circle
  	v-for="(p,i) in polarpoints(8,1.5)"
    :position="p"
    r="0.3"
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

### Chords

<div v-for="c in chords().filter(c => c.length < 2)">
<p>C{{ c }}</p>
<f-piano
  :notes="chord(c)"
/>
</div>
