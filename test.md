| 1 2 2

## A sample scenario

> Tweak a knob, yo

<div>
  <f-slider
    title="Radius"
    from="0.1"
    to="2"
    step="0.01"
    @input.native="e => send('r',e.target.value)"
  />
  <f-slider
    title="Hue"
    from="0"
    to="360"
    @input.native="e => send('hue',e.target.value)"
  />
</div>

<f-receive-data channel="hue">
<div
  slot-scope="hue" 
  v-if="hue.value > 100"
  class="button_primary"
  @click="send('next')"
>
Next
</div>
</f-receive-data>

-

<f-receive-data channel="hue">
<f-receive-data channel="r" slot-scope="hue">
  <f-scene grid step="0.25" slot-scope="r" width="500" height="500">
    <f-circle
      :r="r.value || 0.1"
      :fill="hsl(hue.value || 0)"
    />
  </f-scene>
</f-receive-data>

---

| 1 2 2

## A sample scenario II

> Tweak some more knobs yo

<div>
  <f-slider
    from="-2"
    to="2"
    step="0.01"
    @input.native="e => send('r',e.target.value)"
  />
</div>

<div class="button_primary" @click="send('prev')">Prev</div>

-

<f-receive-data channel="r">
  <f-scene grid step="0.25" slot-scope="r" width="500" height="500">
    <f-repeat-grid>
      <f-regularpolygon
        :rotation="{x: r.value * 100}"
        slot-scope="grid"
        :r="(r.value || 1)"
        opacity="0.6"
        :fill="hsl(grid.value[2] * 10)"
      />
    </f-repeat-grid>
  </f-scene>
</f-receive-data>

---
