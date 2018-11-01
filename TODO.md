### Build

```sh
npx rollup -f iife -i index.js | npx uglifyjs > build.js
```

### Suggested IDE plugins

https://github.com/faisalhakim47/vscode-vue-inline-template

### Todo

Layout:

- `vsplit`, `hsplit`?

Components:

- `Sidebar` (for theory)
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

TwoScene
- width / height
- viewBox

TwoGrid
- step
- opacity (koigil)

TwoLine
?- (midagi yhele ja kahele poidile?)
- closed -> <TwoPolygon :closed="true"...
- fill: none
- stroke-width

TwoCircle
- r / radius
- stroke-width
- scale = 1 nr

TwoBox
- x y maha?
- stroke

TwoPoylgon
- sisuliselt TwoLine closed

TwoRegularPolygon
- sisuliselt cpoints + Twoline closed

ThreeScene
- size (w / h ?)

ThreeGroup
- :scale="{ x: 0.2, y: 0.2, z: 0.2 }"
- opacity

ThreeGrid
- step
- opacity

ThreeTriangle
- stroke
- strokeWidth

ThreeLine 
- closed

ThreeCircle
- fill
- stroke

ThreeBox

:x?
:y?
:width	1	number
:height	1	number
:fill
:opacity	1	number

ThreePolygon

:points	[]	array
:fill	var(--secondary)	string
:stroke	var(--primary)	string
opacity 

ThreePolyhedron
 opacity

ThreeRegulaPolygon

:count	6	number
:radius	1	number
:position	{}	object
:rotation	{}	object
:scale	{}	object

AnimeData // AniData // AnimationData // MotionData

SliderData
:count = 2
:values="{
  from, to, value, title, name: x
}
?

data.x
data.value[1]

data.value1
data.value2

FetchData = SheetData
text="true"
update=""
update-frequency=""

---

<StateData :length="3">
  <TwoScene slot-scope="data">
    <circle
      v-for="(x,i) in data.value"
      :key="i"
      :cx="i - 1"
      r="0.5"
      :fill="
      data.value[i] ? 'var(--red)' : 'var(--primary)'
      "
      @click="data.update(i, 1 - data.value[i])"
    />
  </TwoScene>
</StateData>

---

import('https://unpkg.com/d3-shape@1.2.2/src/index.js?module')

---

TwoText

---

rgbdata
hsldata
blendmoded

blindRgb()
blindHsl()

canIuse

d-scene2d canvas="maybe"