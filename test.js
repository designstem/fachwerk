import * as components from "./framework.js";
import * as utils from "./utils.js";
for (const name in components) {
  Vue.component(name, components[name]);
}

const Init = {
  beforeCreate() {
    Vue.prototype.$global = new Vue({ data: { state: {} } });
    Vue.config.errorHandler = (err, vm, info) => {
      console.log(err);
    };
  }
};

new Vue({
  mixins: [Init],
  el: "#app",
  methods: { ...utils },
  template: `
<div>
  <button @click="send('a',1)">a</button>
  <f-receive-data channel="a">
  <pre
    slot-scope="data"
    v-html="data"
  />
</f-receive-data>
</div>
  `,
  mounted() {
    utils.receive('a', () => console.log('aaa'))
  }
});
