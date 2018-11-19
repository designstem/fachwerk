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