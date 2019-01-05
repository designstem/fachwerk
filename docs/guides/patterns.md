# Making patterns

<f-slider-data value="3" from="3" to="16">
<f-scene grid slot-scope="{value}">
  <f-repeat-circle :count="value">
    <f-regularpolygon :count="value"/>
  </f-repeat-circle>
</f-scene>
</f-slider-data>

<br>

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
