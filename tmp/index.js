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
  <f-slider :value="get('x1')" @value="x => set('x1',x)" />
  {{ parseFloat(get('x1', 1)) }}
         
  <f-scene3 :width="400" :height="500">
    <f-group rotation="0 20 40">
    <f-grid3 />
    <f-lathe3
      scale="0.5"
      :points="range(-4,4,0.1).map(y => [Math.sin(y),y])"
    />
    </f-group>
  </f-scene3>
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
