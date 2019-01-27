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

  <f-scene grid :points="[[-1,-1],[0,0],[1,1]]" @input="({ points }) => set('p', points)">
    <f-line slot-scope="{ points }" :points="points" closed />
  </f-scene>

  <f-scene grid>
    <f-grid-pattern>
      <f-line
        slot-scope="s"
        :points="get('p',[])"
        :fill="color('yellow')"
        closed
        opacity="0.5"
      />
    </f-grid-pattern>
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
