### Download a SVG file 

To download a single SVG file from `f-scene` or `f-artboard`, you will have to set a `download` and `id` prop on the component (the latter will be the name of the downloaded file).

<f-scene grid download id="2d">
  <f-box  />
</f-scene>

<f-scene3 grid download id="3d">
  <f-rotation3>
    <f-box3 />
  </f-rotation3>
</f-scene3>

### Download SVG file on an event

Sometimes you want to trigger a download from somewhere else in the document. In this case, you will need to `send` a `download` event with `id` referring to particular scene or artboard on the document.

<f-inline>
  <button v-on:click="send('download', '2d')">Download 2d.svg</button>
  <button v-on:click="send('download', '3d')">Download 3d.svg</button>
</f-inline>