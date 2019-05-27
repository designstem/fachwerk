<f-animation set="a" />

<f-scene3 grid webgl>
  <f-extrude3
    scale="0.3"
    rotation="-30 0 30"
    position="0 -0.5 0"
    points="
      -1 -1, -1 1, 1 1, 1 -1, 2 -2, -1 -1
    "
    length="4"
  />
</f-scene3>

<!--
# Hallo Welt

Here is a simple interactive scene to get you started.

See the [docs](../docs) for reference, click **Save locally** to save your explorations to your browser.

Slider value is `{{ get('a') }}`

<f-slider set="a" />

<f-scene grid>
  <f-box :rotation="get('a', 0)" />
</f-scene>
-->
