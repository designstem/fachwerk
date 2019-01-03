# Building patterns

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

### Example 2

<f-slider-data value="3" from="3" to="16">
<f-scene grid slot-scope="{value}">
  <f-repeat-circle :count="value">
    <f-regularpolygon :count="value"/>
  </f-repeat-circle>
</f-scene>
</f-slider-data>

<br>

### Example 2

<f-scene grid> 
    <f-repeat-hex step="1">
    <f-repeat-slice :count="3" r="3">
      <f-group slot-scope="data2">
        <f-circle
          x="0.1"
          y="0.25"
          :r="0.46"
          :fill="color('orange')"
        />
      </f-group>
    </f-repeat-slice>
  </f-repeat-hex>
</f-scene>
