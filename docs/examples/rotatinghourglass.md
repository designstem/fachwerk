<f-slider set="r" />

r = {{ get('r') }}

<f-scene grid>
  <f-line
    :rotation="get('r', 0)"
    points="
      -1 -1, 1 -1, -1 1, 1 1
    "
    closed
    curved
  />
</f-scene>

