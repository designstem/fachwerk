import { Init } from "../mixins.js";
import * as components from "../components.js";
import * as utils from "../utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

new Vue({
  el: "#app",
  mixins: [Init],
  methods: { ...utils },
  template: `                         
  <f-scene3 grid>
    <f-grid3 />
    <f-box3 opacity="0.2" />
    <f-box3 position="1" rotation="3" scale="0.2" />
  </f-scene3>
`
});

// new Vue({
//   el: "#app",
//   mixins: [Init],
//   methods: { ...utils },
//   template: `                         
//   <f-fetch-data url="./index.md">
//     <f-content slot-scope="data" :content="data.value" type="slides" />
//   </f-fetch-data>
// `
// });
