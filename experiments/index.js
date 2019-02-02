import { Init } from "../mixins.js";
import * as components from "../components.js";
import * as utils from "../utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

import FArc from './src/components/FArc.js'
Vue.component('FArc', FArc);

new Vue({
  components: { FArc },
  el: "#app",
  mixins: [Init],
  methods: { ...utils },
  template: `
  <f-scene grid>
    <f-arc />
  </f-scene>
`
});