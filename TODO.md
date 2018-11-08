f-rotation-data -> value[0]
snakecase 

homepage -> utils

const unique = array => [...new Set(array)];
const flatten = array => [].concat(...array);

---

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
- opacity

TwoLine
?- (midagi yhele ja kahele poidile?)

TwoCircle
- r / radius?
- scale = 1 nr

ThreeScene
- size (w / h ?)

ThreeGroup
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
multiple values...

FetchData = SheetData
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

---

Old AnimeData:


```
export default {
  description: `
An animation component, based on [AnimeJS](https://github.com/juliangarnier/anime) library.

Supports most of the animation options AnimeJS provides.

See also avabilable [easing functions](https://github.com/juliangarnier/anime#built-in-functions). 
  `,
  example: `
  <AnimeData :to="99">
<h1
  slot-scope="data"
  class="bullet"
>
    {{ Math.floor(data.value) }}
</h1>
</AnimeData>

<AnimeData :values="[
  {to: 360, duration: 1000 * 60 * 10 },
  {to: 360, duration: 1000 * 60 * 10 },
  {to: 360, duration: 1000 * 60 * 10 }
]">
<ThreeScene slot-scope="data">
<ThreeBox
  :rotation="{ x: data.values[0], y: data.values[1], z: data.values[2] }"
/>
</ThreeScene>
</AnimeData>
  `,
  props: {
    value: { default: 0, type: Number },
    from: { default: 0, type: Number },
    to: { default: 100, type: Number },
    duration: { default: 5000, type: Number },
    playing: { default: true, type: Boolean },
    loop: { default: true, type: Boolean },
    alternate: { default: false, type: Boolean },
    easing: { default: "linear", type: String },
    values: { default: [], type: Array }
  },
  data: () => ({ innerValue: 0, innerValues: [] }),
  mounted() {
    if (this.values.length) {
      this.innerValues = this.values.map(v => {
        return { value: v.value ? v.value : v.from ? v.from : 0 };
      });
      const as = this.values.map((v, i) =>
        anime({
          targets: this.innerValues[i],
          duration: v.duration || this.duration,
          value: v.to || this.to,
          loop: this.loop || this.loop,
          direction: v.alternate ? "alternate" : this.direction,
          easing: v.easing || this.easing,
          autoplay: false
        })
      );
      this.$watch(
        "playing",
        playing => {
          as.forEach(a => {
            if (playing) {
              a.play();
            } else {
              a.pause();
            }
          });
        },
        { immediate: true }
      );
    } else {
      this.innerValue = this.value ? this.value : this.from ? this.from : 0
      const a = anime({
        targets: this,
        innerValue: this.to,
        duration: this.duration,
        loop: this.loop,
        direction: this.alternate ? "alternate" : null,
        easing: this.easing,
        autoplay: false
      });
      this.$watch(
        "playing",
        playing => {
          if (playing) {
            a.play();
          } else {
            a.pause();
          }
        },
        { immediate: true }
      );
    }
  },
  render() {
    return this.$scopedSlots.default
      ? this.$scopedSlots.default(this.values.length ? {
          values: this.innerValues.map(v => v.value)
        } : { value: this.innerValue })
      : "";
  }
};
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