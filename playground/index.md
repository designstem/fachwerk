| chapter: Hello
| section: First section


<f-notes size="half">

## Yo

</f-notes>

<f-sidebar src="./test.md" size="wide">
  <var>aaaa</var>
</f-sidebar>

<f-sidebar>
  <var>aaaa</var>
  <div slot="content">

## Hello world

  </div>
</f-sidebar>

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