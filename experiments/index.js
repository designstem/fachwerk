import { Init } from "../mixins.js";
import * as components from "../components.js";
import * as utils from "../utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

<<<<<<< HEAD
import FVideo from './src/components/FVideo.js'
Vue.component('FVideo', FVideo)
=======
import FImage from './src/components/FImage.js'

Vue.component('FImage', FImage)
>>>>>>> master

new Vue({
  el: "#app",
  mixins: [Init],
  methods: { ...utils },
  template: `
<<<<<<< HEAD
=======
<div>
  <f-pager />
>>>>>>> master
  <f-fetch url="./index.md">
    <f-content
      slot-scope="data"
      :content="data.value"
<<<<<<< HEAD
    />
  </f-fetch>
=======
      type="slides"
    />
  </f-fetch>
</div>
>>>>>>> master
  `
});