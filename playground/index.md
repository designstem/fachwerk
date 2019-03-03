| theme: light

# <big><big>DesignSTEM</big></big>

<big><big>Science, Technology, Engineering and Math for future designers and craftsmen. Learn STEM topics in fun, visual and interactive way. Our learning scenarios are powered by <a href="https://designstem.github.io/fachwerk"> designstem.github.io/fachwerk</a> framework, development progress can be tracked here <a href="https://designstem.github.io/homepage"> designstem.github.io/homepage</a></big></big>

<br><br>

## Featured scenarios

<div class="grid" style="--cols: 1fr 1fr 1fr">

<div v-for="(s,i) in [
  {title: 'Algorithms we live by', url: 'algorithms', desc: 'If it walks like an algorithm, if it walks like an alorithm it is proably an algorithm', d1: 10, d2: 30, tags: ['Math', 'Algorithms', 'Generative art','Parametric design']},
  {title: 'Smart Tattoo', d1: 20, d2: 40, url: 'tattoo',desc: 'Design, simulate and apply a biosensitive tatoo, reacting to your body condition', tags: ['Biology', 'Biosensors','Data visualization', 'Universal design']},
  {title: 'Frequency & Movement', d1: 10, d2: 60, url: 'frequency', desc: 'Learn about the illusion of movement from early cinema to the latest GIF memes',tags:['Physics','Optics','Vision','Movement','Motion design']},
]" :key="i" >
<a :href="'./' + s.url">
<f-card style="border: 0px solid var(--primary); font-weight: normal;" >
<center style="height: 250px"><f-flower /></center>

<h3 style="color: var(--darkgray);">{{ s.title }}</h3>

<p style="color: var(--darkgray);">{{ s.desc }}</p>

<p>
<mark v-for="tag in s.tags" style="
  font-size: calc(var(--base) * 1.5);
  padding: 2px 6px;
  background: var(--purple);
  color: hsl(270,50%,90%);
  margin-right: 5px;
"> {{ tag }} </mark>
</p>

<f-inline>
<f-clock
  style="transform: translate(0 -2px)"
  :duration="s.d1"
  :duration2="s.d2"
/>
<small style="opacity: 0.75">
Quickrun <b>{{ s.d1 }}min</b>&nbsp;&nbsp;&nbsp;Complete <b>{{ s.d2 }}m</b>
</small>
</f-inline>

</f-card>
</a>
</div>

</div>


<br><br>

## All scenarios

<div class="grid" style="--cols: 1fr 1fr 1fr 1fr 1fr">

<div v-for="(s,i) in ['From bits to channels to colors','Color blindness and design','Message with matural dyes','Easing and stop motion', 'Bees and packaging','Magic of Metamerism','Patterns in three dimensions','Swim in Plastic soup','(Do not) blow up you pottery oven','Build your own RGB lamp','Throw the dice down the stairs','Design with pyramds','From geometry to organic objects']" :key="i">
<a :href="'./' + s.url">
<f-card style="border: 0px solid var(--primary); font-weight: normal;" :color="color('yellow')">
<center style="height: 150px"><f-flower2 /></center>

<h5 style="color: var(--darkgray);">{{ s }}</h5>

<f-inline>
<f-clock
  style="transform: translate(0 -2px)"
  :duration="any(10,20,30)"
  :duration2="any(45,60)"
/>
<small style="opacity: 0.75; color: var(--darkgray);">
<b style="color: var(--darkgray);">{{ any(10,20,30) }}m</b> / <b  style="color: var(--darkgray);">{{ any(45,60) }}m</b>
</small>
</f-inline>

</f-card>
</a>
</div>

</div>

<br><br>

## Who are we?

<big><big>DesignSTEM is an education initiative that creates immersive experiences for future learning. We are educators, teachers, designers and engineers from 10 countries around Europe: 🇬🇧 🇩🇪 🇬🇷 🇮🇹 🇳🇱 🇵🇹 🇸🇮 🇫🇮 🇪🇪</big></big>





