import { Init } from "../mixins.js";
import * as components from "../components.js";
import * as utils from "../utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

import { Css } from '../../mixins.js'

const FRotation3 = {
  props: {
    duration: { default: 50000, type: [Number, String]
  },
  template: `
  <f-animation :duration="duration">
    <f-group3
      slot-scope="{ value }"
      :rotation="[value,value,value]"
    >
      <slot  />
    </f-group3>
  </f-animation>
  `
}

new Vue({
  el: "#app",
  mixins: [Init],
  methods: { ...utils },
  components: { FRotation3 },
  template: `
<f-scene3>
  <FRotation3>
  <f-grid3 />
  <f-lathe3
    points="1 1 ; -1 -1"
  />
  </FRotation3>
</f-scene3>
`
});