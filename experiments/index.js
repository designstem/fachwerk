import { Init } from "../mixins.js";
import * as components from "../components.js";
import * as utils from "../utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

import FImage from './src/components/FImage.js'

Vue.component('FImage', FImage)

new Vue({
  el: "#app",
  mixins: [Init],
  methods: { ...utils },
  template: `
<div>
  <f-fetch url="./index.md">
    <f-content
      slot-scope="data"
      :content="data.value"
      type="slides"
    />
  </f-fetch>
</div>
  `
});