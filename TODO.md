# TODO

## Fixes

- clean f-content
- <f-next-button :title="back" />
- f-buttons v=on:input
- <h1 v-if="get('keyboard',0)"><big>💥</big></h1>
- fix
```
## f-table

A `<table>`, accepting array of objects as `:rows`.

<f-table :rows="[
  { name: 'Klaus', born: 1926 },
  { name: 'Werner', born: 1942 }
]"/>
```
- event goto(1)
- responsive f-inline

| Name        | Born  |
| ----------- | ----- |
| Klaus       | 1926  |
| Werner      | 1942  |  

- html \s{4}
- get / set with strings!
- index.html -> model!!!
- d3 -> d3-shape
- src
```
src/components/2d.js
src/components/3d.js
...
src/mixins/Css.js
...
src/utils/color.js
src/utils/math.js
```
- menu top() fix
- src everywhere
- f-hexagon
- <f-math inline />
- <f-slider inline />
- https://en.wikibooks.org/wiki/LaTeX/Mathematics
- details styling
- f-brick-pattern
- "can navigate with < > keys"
- repeat examples to purple
- f-sidebar in dark mode?
- polary??
- 1 2 3 mobile support
- ' => " color("primary") in props
- f-box r
- exportSTL from patternmaker?
- menu animation http://jsfiddle.net/thechrisjordan/3Fc7D/23/
- remove scale defaults??
- VR components
- cleanup utils (see image)
- depreciate content-slides / document
- 3d grid prop??
- box3 \`stroke\` and \`stroke-width\` are currently ignored
- f-scene3 size (w / h ?)
- ThreeGroup / opacity
- ThreeGrid / step / opacity
- ThreeLine  / closed
- ThreeBox / :x / :y?
- docs https://github.com/faisalhakim47/vscode-vue-inline-template
- || vs | / | table |
- fix -pattern steps (hex!)

- FIX THIS
```
vendor.js:1 [Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "position"

found in

---> <FPoint>
       <FGroup>
         <FSvg>
           <FScene>
```

# Features

- set(key, value, localstore = true) // del // preserve() // save() // remember()
- <f-mirror set="a">
- x="0.5"
- slide ids / metadata
- css
```
...
src/css/variables.js?
src/css/html.js?
src/css/grid.js?
```
- real build

- f-iframe :scale -> presentations / preview | http://jsfiddle.net/AwokeKnowing/yy8yb/
- embed?
- transform fix >>> f-rotation-slider3
- f-position-slider3
- f-scale-slider3
- f-image(s)

<f-image>
  http://sasa
</f-image>

<f-images layout="
1 1 1
2 3 3
">
  http://sasa
  http://sasa
  http://sasa
  http://sasa
</f-images>


---

1 1 1
2 3 3

-

<f-image></f-image>

-

- f-arc
- f-triangle?
- f-hexagon?
- f-youtube / f-vimeo
- f-aframe-slider
- set(key,value,remember = true)
- f-slide-transition / f-fade-transition?
- f-leftarrow-icon / f-rightarrow-icon
- f-toggle (o )
- add() / reduce() ?
- f-compare-image / f-split-image
- f-colorblind-image
- Pager for slider < o o o o o * o >
- FMarkdown2 (remark / rehype)?

```
var unified = require("unified");
var markdown = require("remark-parse");
var remark2rehype = require("remark-rehype");
var format = require('rehype-format')
var stringify = require("rehype-stringify");
var raw = require("rehype-raw");

const file = `# Math basics

For graphs and equations we use \`<f-scene>\` and \`<f-math>\` components:

#### Circle diameter <var>d</var> and radius <var>r</var> 

<f-scene
  grid
  step="1"
>

  <f-circle
    v-model="bla"
    @click="hello()"
    opacity="0.8"
    :stroke="color('red')"
  />
</f-scene>

# Wow!

`;

unified()
  .use(markdown, { blocks: ['f-scene']})
  .use(remark2rehype, { allowDangerousHTML: true })
  .use(raw)
  .use(format)
  .use(stringify, {
    collapseEmptyAttributes: true
  })
  .process(file, (err, file) => {
    const f = file.contents.replace(/&#x27;/g, "'");
    console.log(f);
  });
```

- blends https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode
- https://threejs.org/docs/#api/en/constants/Materials ?
- filters
- svg patterns?
- circle snap https://math.stackexchange.com/questions/127613/closest-point-on-circle-edge-from-point-outside-inside-the-circle
- f-knob
- distance(x1 y1 x2 y2)
- f-array api ? f-array2 f-array3 / f-array fmatrix fmatrix3
- FetchData = SheetData / update / update-frequency
- WebsocketData
- f-text3
- f-blend3
- blindRgb() / blindHsl()
- FTooltip
- FCarousel?
- d-canvas https://alligator.io/vuejs/vue-html5-canvas/
```
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
- unicode
```
<f-fetch-data
  url="https://unpkg.com/unicode-11.0.0@0.7.8/General_Category/Math_Symbol/symbols.js"
>
  <code slot-scope="{value}">
    {{ log(value.trim().replace('module.exports=','').replace(/'/g,'"').replace(/\\/g,'\\')) }}
  </code>
</f-fetch-data>
```
- 
`Object.getOwnPropertyNames(Math)`
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/Sin
