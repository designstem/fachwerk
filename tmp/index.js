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
  <div>                     
  <f-scene3>
    <f-group3 rotation="10 10">
      <f-grid3 />
      <f-line3
        :points="polarpoints()"
      />
    </f-group3>
  </f-scene3>
  <f-scene grid>
    <f-box />
  </f-scene>
</div>
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
