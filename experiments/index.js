import { Init } from "../mixins.js";
import * as components from "../components.js";
import * as utils from "../utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

import FPager from './components/FPager.js'
Vue.component('FPager', FPager);

new Vue({
  components: { FPager },
  el: "#app",
  mixins: [Init],
  methods: { ...utils },
  template: `
  <f-theme theme="yellow">
  <f-fetch url="./index.md">
    <f-content
      slot-scope="data"
      :content="data.value"
      style="height: 100vh;"
    />
  </f-fetch>
</f-theme>
`
});