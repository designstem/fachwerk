### Downloading a named SVG file

To download a single SVG file from `f-scene` or `f-artboard`, you will first have a `id` prop on the component (this will be the name of the downloaded file).

<f-artboard id="test" width="300" height="300">
  <f-circle r="100" x="150" y="150" />
</f-artboard>

Then emit a `download` event with `test` as a parameter.

<button v-on:click="send('download', 'test')">Download test.svg</button>

### Downloading an unnamed SVG file

You do not have to specify the `id` prop, it is assumed to be `scene` by default. In this case the download will be even simpler:

<f-artboard width="300" height="300">
  <f-box r="100" x="150" y="150
  " />
</f-artboard>

<button v-on:click="send('download')">Download scene.svg</button>

***Note:*** If there are multiple unnamed SVG files, all of them will be downloaded. Your browser might warn you about downloading multiple files though.
