| chapter: Hello
| section: First section


<f-notes2 size="half">

## Yo

</f-notes2>

<f-sidebar2 src="./test.md" size="wide">
  <var>aaaa</var>
</f-sidebar2>

<f-sidebar2>
  <var>aaaa</var>
  <div slot="content">

## Hello world

  </div>
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