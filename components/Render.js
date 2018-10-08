// TODO: publish the public functions

import { rad2deg, deg2rad, cx, cy } from "../utils.js";
import * as utils from "../utils.js";

import componentList from "./internal/componentList.js";

export default {
  name: 'Render',
  components: componentList,
  props: { t: String },
  data: () => ({
    render: null,
    someVariable: 0
  }),
  methods: {...utils},
  mounted() {
    this.$watch(
      "t",
      value => {
        const template = Vue.compile(value);
        this.render = template.render;
        this.$options.staticRenderFns = [];
        this._staticTrees = [];
        for (var i in template.staticRenderFns) {
          this.$options.staticRenderFns.push(template.staticRenderFns[i]);
        }
      },
      { immediate: true }
    );
  },
  render: function(h) {
    return this.render ? this.render() : h();
  }
};
