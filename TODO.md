# TODO


- rm old content
- prettier
vendor.js:1 [Vue warn]: Error in event handler for "input": "TypeError: Cannot read property 'value' of undefined"

found in

---> <FSlider>
       <FRender>
         <FMarkdown>
           <FContent>
             <FContentEditor>
               <FTheme>
                 <Root>


## Reorg fixes

- cleanup utils (see image)
- depreciate content-slides / document
- organize
```
src/components/2d.js
src/components/3d.js
...
src/mixins/Css.js
...
src/utils/color.js
src/utils/math.js
```
- npx https://github.com/css/csso-cli
- css
```
...
src/css/variables.js?
src/css/html.js?
src/css/grid.js?
```
- move stlExport from 3d to utils
- polary??
- utils shorten documentation

## Content

- VR components
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
- f-youtube / f-vimeo?


## 2D

- f-axis transforms
- f-arc
- f-aframe-slider
- f-slide-transition / f-fade-transition?
- f-compare-image / f-split-image
- f-colorblind-image
- Pager for slider < o o o o o * o >

## 3D

- f-axis3 transforms
- f-line3 closed
- box3 \`stroke\` and \`stroke-width\` are currently ignored
- f-scene3 size string (w / h ?)
- ThreeGroup / opacity
- ThreeGrid / step / opacity
- ThreeBox / :x / :y?
- docs https://github.com/faisalhakim47/vscode-vue-inline-template
- fix *-pattern steps (hex!)
- box3 points?
- circle3 points?
- r for box3
- f-axis3
<f-scene3>
  <f-group3 rotation="20 -10" scale="0.8">
    <f-grid3 />
  	<f-line3
    	points="0 0 0; 2 0 0"
     	:stroke="color('red')"
      stroke-width="1"
    />
    <f-line3
    	points="0 0; 0 2 0"
     	:stroke="color('green')"
      stroke-width="1"
    />
    <f-line3
    	points="0 0; 0 0 2"
     :stroke="color('blue')"
      stroke-width="1"
    />
  </f-group3>
</f-scene3>
- box3 stroke
- unify 3 shading

## Backward comp

- src everywhere
- polarpoints [0,1]

## Other components

- <f-math inline />
- <f-slider inline />

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

- github api https://github.com/octokit/rest.js#browser
- set(key, value, localstore = true) // del // preserve() // save() // remember()
- set(key,value,remember = true)
- slide ids / metadata
- f-iframe :scale -> presentations / preview | http://jsfiddle.net/AwokeKnowing/yy8yb/
- embed?
- copy to clipboard
- Saving https://beta.observablehq.com/@mbostock/saving-svg
```
export const downloadJson = (json, filename) => {
  const fileBlob = new Blob([
    JSON.stringify(json, null, 2),
  ], {type: 'application/json'});

  const url = URL.createObjectURL(fileBlob);

  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
```

## Maybe

- f-triangle?
- dashed lines?
- FMarkdown2 (remark / rehype)?
- f-leftarrow-icon / f-rightarrow-icon?
- f-toggle (o )
- add() / reduce() ?
- f-socketio
- f-qrcode
- harmonize innerWidth="8" / -4 to 4?
- menu animation http://jsfiddle.net/thechrisjordan/3Fc7D/23/
- d3 -> d3-shape
- fix
```
## f-table

A `<table>`, accepting array of objects as `:rows`.

<f-table :rows="[
  { name: 'Klaus', born: 1926 },
  { name: 'Werner', born: 1942 }
]"/>
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
- vendor loader
```

import { require } from "https://unpkg.com/d3-require?module";
import Vue from "https://unpkg.com/vue/dist/vue.esm.browser.js";
import anime from "https://unpkg.com/animejs?module";

const vue = () => Promise.resolve(Vue);


  // const marked = await require("https://unpkg.com/marked/lib/marked.js");
  // const katex = await require("https://unpkg.com/katex/dist/katex.min.js");
  // const THREE = window.THREE = await require('https://unpkg.com/three/build/three.min.js');
  // await require('https://unpkg.com/three/examples/js/controls/OrbitControls.js').catch(() => {});
  // const codemirror = await require("https://unpkg.com/codemirror");
  // await require('https://unpkg.com/codemirror/mode/markdown/markdown.js').catch(() => {});
  // await require('https://unpkg.com/codemirror/mode/gfm/gfm.js').catch(() => {});

  const aframe = () => require('https://unpkg.com/aframe');
  const marked = () => require("https://unpkg.com/marked/lib/marked.js");
  const katex = () => require("https://unpkg.com/katex/dist/katex.min.js");
  //const THREE = window.THREE = await require('https://unpkg.com/three/build/three.min.js');
  //await require('https://unpkg.com/three/examples/js/controls/OrbitControls.js').catch(() => {});
  //const codemirror = await require("https://unpkg.com/codemirror");
  //await require('https://unpkg.com/codemirror/mode/markdown/markdown.js').catch(() => {});
  //await require('https://unpkg.com/codemirror/mode/gfm/gfm.js').catch(() => {});

  // const aframe = await require('https://unpkg.com/aframe');

export { require, vue, anime, marked, katex }
```
- syntax hilight
-- https://prismjs.com/
-- https://craig.is/making/rainbows
-- https://highlightjs.org/
