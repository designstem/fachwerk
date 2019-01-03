# Building patterns

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