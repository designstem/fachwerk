<f-sequencer
  beats="8"
  v-on:beat="beat => set('beat', beat)"
/>

    Beat: {{ get('beat') }}

<f-artboard width="400" height="100">
	<f-circle 
  	v-for="i in 8"
    r="20"
    :x="i * 50"
    y="50"
    :fill="color(get('beat',1) == i ? 'red' : 'white')"
  />
</f-artboard>