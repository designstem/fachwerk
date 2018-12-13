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