import * as components from "./framework.js";
import * as utils from "./utils.js";
for (const name in components) {
  Vue.component(name, components[name]);
}

import Init from './components/Init.js'

new Vue({
  mixins: [Init],
  el: "#app",
  methods: { ...utils },
  data: { b: 0 },
  template: `
<div>
  <f-slider :value="b" @input="send('b',$event)" />
  <f-slider :value="get('a')" @input="set('a',$event)" />
  {{ get('a') }}
  {{ b }}
</div>
  `,
  mounted() {
    this.receive('b', b => this.b = parseInt(b))
  }
});
