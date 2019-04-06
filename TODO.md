# TODO

 The main improvement is how `slot` and `slot-scope` work: they are dramatically simplified.
- fix theme background
Alternative you can listen to the event using `receive()` helper in `mounted()` hook in your Javascript component:

    mounted() {
      receive('d', value => console.log(value))
    }
    
# latest
- document str

# tests
- ai tests


## Tools

- prettier
- get a.b
- set a.b
- github api https://github.com/octokit/rest.js#browser

## Scenario components

- f-aframe-slider
- f-compare-image / f-split-image
- f-colorblind-image

## Content

- Pager for slider < o o o o o * o >
- f-slide-transition / f-fade-transition?
- <f-math inline />
- <f-slider inline />
- ESC key

## 2D

- f-axis transforms

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
- box3 stroke
- unify 3 shading

## Backward comp

- src everywhere
- polarpoints [0,1]

## Packaging

- d3 -> d3-shape
- npx https://github.com/css/csso-cli
- real build

## Other stuff

- minify css https://github.com/HenrikJoreteg/rollup-plugin-css
- https://codeplea.com/triangular-interpolation
- http://bl.ocks.org/widged/5780720
- move stlExport from 3d to utils
- set(key, value, localstore = true) // del // preserve() // save() // remember()
- f-iframe :scale -> presentations / preview | http://jsfiddle.net/AwokeKnowing/yy8yb/
- embed
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

- slide ids?
- snapCirclular
- <f-goto-button />
- load SVG in f-image https://blobfolio.com/2018/06/lazy-loading-sprites-inline/
- f-triangle?
- dashed lines?
- FMarkdown2 (remark / rehype)?
- f-leftarrow-icon / f-rightarrow-icon?
- f-toggle (o )
- add() / reduce() ?
- f-socketio
- f-qrcode
- menu animation http://jsfiddle.net/thechrisjordan/3Fc7D/23/
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
<f-fetch
  url="https://unpkg.com/unicode-11.0.0@0.7.8/General_Category/Math_Symbol/symbols.js"
>
  <code slot-scope="{value}">
    {{ log(value.trim().replace('module.exports=','').replace(/'/g,'"').replace(/\\/g,'\\')) }}
  </code>
</f-fetch>
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

```
#!/bin/bash

# Temporary duplicates

cp components.js framework.js

npx rollup --silent -f iife -i index.js | npx uglifyjs > build.js
npx rollup --silent -f iife -i docs/index.js | npx uglifyjs > docs/build.js

rm -f vendor.js
curl -L https://unpkg.com/vue@2.5/dist/vue.js | npx uglifyjs >> vendor.js
curl -L https://unpkg.com/animejs@2/anime.min.js | npx uglifyjs >> vendor.js
curl -L https://unpkg.com/store@2.0.12/dist/store.modern.min.js | npx uglifyjs >> vendor.js
curl -L https://unpkg.com/katex/dist/katex.min.js >> vendor.js
curl -L https://unpkg.com/marked/marked.min.js >> vendor.js
curl -L --compressed https://bundle.run/color-blind@0.1.1 >> vendor.js
curl -L https://unpkg.com/chroma-js@2.0.2/chroma.js | npx uglifyjs >> vendor.js
curl -L https://unpkg.com/d3 >> vendor.js
curl -L https://unpkg.com/three/build/three.min.js >> vendor.js
curl -L https://unpkg.com/codemirror | npx uglifyjs >> vendor.js
curl -L https://unpkg.com/codemirror/mode/xml/xml.js | npx uglifyjs >> vendor.js
curl -L https://unpkg.com/codemirror/mode/css/css.js | npx uglifyjs >> vendor.js
curl -L https://unpkg.com/codemirror/mode/javascript/javascript.js | npx uglifyjs >> vendor.js
curl -L https://unpkg.com/codemirror/mode/htmlmixed/htmlmixed.js | npx uglifyjs >> vendor.js
curl -L https://unpkg.com/codemirror/addon/mode/overlay.js | npx uglifyjs >> vendor.js
curl -L https://unpkg.com/codemirror/mode/markdown/markdown.js | npx uglifyjs >> vendor.js
curl -L https://unpkg.com/codemirror/mode/gfm/gfm.js | npx uglifyjs >> vendor.js
#curl -L https://unpkg.com/prettier/standalone.js | npx uglifyjs >> vendor.js
#curl -L https://unpkg.com/prettier/parser-babylon.js | npx uglifyjs >> vendor.js
#curl -L https://unpkg.com/prettier/parser-postcss.js | npx uglifyjs >> vendor.js
#curl -L https://unpkg.com/prettier/parser-markdown.js | npx uglifyjs >> vendor.js

cat ./src/thirdparty/svgrenderer.js | npx uglifyjs >> vendor.js

rm -f vendor_aframe.js
curl -L https://unpkg.com/vue@2.5/dist/vue.js | npx uglifyjs >> vendor_aframe.js
curl -L https://unpkg.com/animejs@2/anime.min.js | npx uglifyjs >> vendor_aframe.js
curl -L https://unpkg.com/store@2.0.12/dist/store.modern.min.js | npx uglifyjs >> vendor_aframe.js
curl -L https://unpkg.com/katex/dist/katex.min.js >> vendor_aframe.js
curl -L https://unpkg.com/marked/marked.min.js >> vendor_aframe.js
curl -L --compressed https://bundle.run/color-blind@0.1.1 >> vendor_aframe.js
curl -L https://unpkg.com/chroma-js@2.0.2/chroma.js | npx uglifyjs >> vendor_aframe.js
curl -L https://unpkg.com/d3 >> vendor_aframe.js
curl -L https://unpkg.com/aframe | npx uglifyjs >> vendor_aframe.js
curl -L https://unpkg.com/aframe-rounded | npx uglifyjs >> vendor_aframe.js
curl -L https://unpkg.com/codemirror | npx uglifyjs >> vendor_aframe.js
curl -L https://unpkg.com/codemirror/mode/xml/xml.js | npx uglifyjs >> vendor_aframe.js
curl -L https://unpkg.com/codemirror/mode/css/css.js | npx uglifyjs >> vendor_aframe.js
curl -L https://unpkg.com/codemirror/mode/javascript/javascript.js | npx uglifyjs >> vendor_aframe.js
curl -L https://unpkg.com/codemirror/mode/htmlmixed/htmlmixed.js | npx uglifyjs >> vendor_aframe.js
curl -L https://unpkg.com/codemirror/addon/mode/overlay.js | npx uglifyjs >> vendor_aframe.js
curl -L https://unpkg.com/codemirror/mode/markdown/markdown.js | npx uglifyjs >> vendor_aframe.js
curl -L https://unpkg.com/codemirror/mode/gfm/gfm.js | npx uglifyjs >> vendor_aframe.js
#curl -L https://unpkg.com/prettier/standalone.js | npx uglifyjs >> vendor_aframe.js
#curl -L https://unpkg.com/prettier/parser-babylon.js | npx uglifyjs >> vendor_aframe.js
#curl -L https://unpkg.com/prettier/parser-postcss.js | npx uglifyjs >> vendor_aframe.js
#curl -L https://unpkg.com/prettier/parser-markdown.js | npx uglifyjs >> vendor_aframe.js
cat ./src/thirdparty/svgrenderer.js | npx uglifyjs >> vendor_aframe.js

# Offline

npx rollup -f es -i framework.js | npx uglifyjs > ../templates/offline/components.js
npx rollup -f es -i utils.js | npx uglifyjs > ../templates/offline/../fachwerk.js
npx rollup -f es -i mixins.js | npx uglifyjs > ../templates/offline/../fachwerk.js
cp vendor.js ../templates/offline/.
cp vendor_aframe.js ../templates/offline/.
cp styles.css ../templates/offline/.
```

