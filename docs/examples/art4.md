<f-scene grid responsive>
  <f-group
    v-for="y in range(-1,1,1)"
  >
    <f-circle
      v-for="x in range(-1,1,1)"
      :x="x"
      :y="y"
      r="0.5"
      fill="orange"
      stroke
      multiply
    />
  </f-group>
</f-scene>