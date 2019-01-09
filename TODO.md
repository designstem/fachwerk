# TODO

f-fetch src
        <f-github-icon src="https://designstem.github.io/fachwerk"></f-github-icon>

"can navigate with < > keys"
repeat to blue
hexagon <> circle
f-sidebar in dark mode?

ajax to sample content

Unsure about <f-scene v-for="c in ['red','blue']" :key="c" v-on:click="log('a')" width="20" height="20" ><f-circle r="1.8" stroke :fill="color(c)"/></f-scene> ? 

- polary??
- 1 2 3 mobile support
- color("primary") in props
- f-box r
- exportSTL
- f-receive data surfae

- http://jsfiddle.net/thechrisjordan/3Fc7D/23/

- remove scale defaults??
- VR components!
- fix small lineheight
- fix pattern examples
- strong em -> mark

----

  // mounted() {
  //   document.addEventListener("keydown", e => {
  //     if (e.altKey && e.keyCode === 84) {
  //       e.preventDefault()
  //       if (this.theme == 'light' || this.theme == 'dark') {
  //         this.currentTheme = this.currentTheme == 'light' ? 'dark' : 'light'
  //       }
  //     }
  //   });
  // },

---

### Example 1

<div v-for="c in ['f-mirror-x','f-mirror-y','f-repeat-grid','f-repeat-shift','f-repeat-hex','f-repeat-circle','f-repeat-spin','f-repeat-slice']">
<br>
<h4>{{ c }}</h4>
<f-scene grid width="150" height="150"> 
  <component :is="c">
    <f-text style="font-size: 6rem;" opacity="0.5" x="0.5" y="0">a</f-text>
  </component>
  <f-text style="font-size: 6rem;"   :fill="color('red')" opacity="0.5" x="0.5" y="-0">a</f-text>
</f-scene>
</div>

---

# Getting started

Hey, we are prototyping in Markdown! This should become `<f-blockquote>` or `<f-factbox>`.

This is how it looks in closed mode:

> ##### ▶ Technical explanation

... and in open mode:

> ##### ▼ Technical explanation
The user can now navigate between slides using <kbd><</kbd>  and <kbd>></kbd> keys, but it is helpful to also create navigational controls.

---

- math props

- Theme example does not work

vendor.js:1 [Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "position"

found in

---> <FPoint>
       <FGroup>
         <FSvg>
           <FScene>
             <Render>
               <Markdown>
                 <FContentDocument>
                   <FContentEditor>
                     <ComponentRow>
                       <FTheme>
                         <Root>
3vendor.js:1 [Vue warn]: Duplicate presence of slot "default" found in the same render tree - this will likely cause render errors.

found in

---> <FScene>

coming out the components

- < next >
- --emphasis: var(--primary)
- * ** ** * 
- cite ``?
- mark
- " "
- 0 1 1 0 ?
- slider primary / slider secondary 

<f-content-slides style="--em: var(--blue)">

<div class="grid" style="--col: 1fr 3fr; --row: 1fr 3fr">
  <div>A</div>
  <div>B</div>
</div>

FMarkdown FRender
hex grid step?
2d simple transforms
3d grid prop

fix array coordinates

blends
https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode
https://threejs.org/docs/#api/en/constants/Materials ?

filters

flip
rotaterepeat

// circle snap https://math.stackexchange.com/questions/127613/closest-point-on-circle-edge-from-point-outside-inside-the-circle

box3 ⚠️ \`stroke\` and \`stroke-width\` are currently ignored

// farraydata fmatrix fmatrix3

point3 x y z fill!

ThreeScene
- size (w / h ?)

ThreeGroup
- opacity

ThreeGrid
- step
- opacity

ThreeLine 
- closed

ThreeBox
:x?
:y?

AnimeData // AniData // AnimationData // MotionData
multiple values...

//FetchData = SheetData
//update=""
//update-frequency=""

WebsocketData

//f-text3 ???

blendmoded?

///blindRgb()
//blindHsl()

//canIuse

d-canvas (alligator)

---

// homepage -> utils

Layout:

- `vsplit`, `hsplit`?

Components:

- `Tooltip`?
- `Collapsible`?
- `Pager`
- `Carousel`?

### Future

```html
<StateData :length="100 * 100">
  <PixelScene slot-scope="data">
    <Pixel
      v-for="(p,i) in data.value"
      :offset="i"
      color="p ? 'black' : 'white'"
      @click="data.update(i, !p)"
    />
  </PixelScene>
</StateData>
```

---

<array-data :length="10" :dimensions="2">
  <three-scene slot-scope="data">
<three-group
    :rotation="{ y: -0.5, x: 0.5 }"
    :scale="{x: 0.5,y: 0.5, z: 0.5}"
  >
<three-group v-for="(col, x) in data.value">
  <three-box
    v-for="(value, y) in col"
    :key="x * y"
    :position="{ x: 4 / 10 * x - 2, y: 4 / 10 * y - 2 }"
    :width="4 / 10"
    :height="4 / 10"
    :depth="4 / 10"
  />
  </three-group>
  </three-group>
  </three-scene>
</array-data>

---

--

### Build

```sh
npx rollup -f iife -i index.js | npx uglifyjs > build.js
```

### Suggested IDE plugins

https://github.com/faisalhakim47/vscode-vue-inline-template

### Todo

<!--
<f-scene grid>
  <f-point
    :points="
      range(-4,4,0.05).map(x => ({ x, y: Math.cos(x) }))
    "
    :stroke="color('red')"
  />
  <f-point
    :points="
      range(-4,4,0.05).map(x => ({ x, y: Math.sin(x) }))
    "
    :stroke="color('blue')"
  />
</f-scene>
-->


<f-fetch-data
  url="https://unpkg.com/unicode-11.0.0@0.7.8/General_Category/Math_Symbol/symbols.js"
>
  <code slot-scope="{value}">
    {{ log(value.trim().replace('module.exports=','').replace(/'/g,'"').replace(/\\/g,'\\')) }}
  </code>
</f-fetch-data>

----

multiple sliders?

export default {
  description: `
Adds a slider next to the content and passing the slider value as <code>data.value</code> 

<f-slider-data>
  <h1 class="bullet" slot-scope="data">
    {{ data.value }}
  </h1>
</f-slider-data>

<f-slider-data :sliders="[
  { title: 'X', from: -2, to: 2, value: 0, float: true },
  { title: 'Y', from: -2, to: 2, value: 0, float: true },
]">
  <f-scene slot-scope="data">
    <f-grid />
    <f-circle :position="{
      x: data.value[0],
      y: data.value[1]
    }" />
  </f-scene>
</f-slider-data>
  `,
  props: {
    value: { default: 0, type: [Number,String] },
    title: { default: "Value", type: String },
    from: { default: 0, type: [Number,String] },
    to: { default: 360, type: [Number,String] },
    step: { default: 1, type: [Number,String] },
    float: { default: false, type: Boolean },
    sliders: { default: () => [], type: [Array] },
  },
  data: function() {
    return {
      innerValue: this.value,
      innerValues: this.sliders.length
        ? this.sliders.map(v => (v.value ? v.value : 0))
        : null
    };
  },
  template: `
    <div>
      <div v-if="sliders.length" v-for="(v,i) in sliders" :key="i">
        <label>{{ v.title ? v.title : 'Values ' + i }} <code>{{ innerValues[i] }}</code></label>
        <input
          style="margin-bottom: 1rem;"
          type="range"
          v-model="innerValues[i]"
          :min="v.from || this.from"
          :max="v.to || this.to"
          :step="v.step ? v.step : this.step ? this.step : v.float ? 0.000001 : 1"
        />
      </div>
      <slot v-if="sliders.length" :value="innerValues" />
      <div v-if="!sliders.length">
        <label>{{ title }} <code>{{ innerValue }}</code></label>
        <input style="margin-bottom: 1rem;" type="range" v-model="innerValue" :min="from" :max="to" :step="step ? step : float ? 0.001 : 1" />
      </div>
      <slot v-if="!sliders.length" :value="innerValue" />
    </div>
  `
};
