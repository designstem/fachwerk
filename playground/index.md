| chapter: Hello
| section: First section

<f-sidebar2 src="./index.md">
  <var>aaaa</var>
</f-sidebar2>

## Hallo Welt

Here is a simple interactive scene to get you started.

See the [docs](../docs) for reference, click **Save locally** to save your explorations to your browser.

Slider value is `{{ get('a') }}`

<f-slider set="a" />

<f-scene grid>
  <f-box :rotation="get('a', 0)" />
</f-scene>

---

| section: Second section

## Ahaa

Here is a simple interactive scene to get you started.

See the [docs](../docs) for reference, click **Save locally** to save your explorations to your browser.

Slider value is `{{ get('a') }}`

<f-slider set="a" />

<f-scene grid>
  <f-box :rotation="get('a', 0)" />
</f-scene>