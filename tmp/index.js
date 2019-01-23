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
      <f-triangle3
        x1="1"
        y1="1"
        z1="0"
        x2="1"
        y2="0"
        z2="1"
        x3="1"
        y3="-1"
        z3="0"
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
