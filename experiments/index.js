//import { fachwerk } from "https://designstem.github.io/fachwerk/fachwerk.js";
//import { fachwerk } from "../src/fachwerk.js";
// Import Vue library, builtin components and utils:

import {
  Vue,
  components,
  utils
} from "https://designstem.github.io/fachwerk/fachwerk.js";

// Register components globally

for (const name in components) {
  Vue.component(name, components[name]);
}

// If you have custom components,
// install them here:
//
import CustomComponent from "./CustomComponent.js";
Vue.component("custom-component", CustomComponent);

// Set up global event bus

Vue.prototype.$global = new Vue({ data: { state: {} } });

// Initialize VueJS

new Vue({
  // HTML id where the content goes

  el: "#fachwerk",

  // Allow utils to be used in templates

  methods: {
    ...utils,
    // Custom methods go here
  },

  // Reactive data will be here
  // Note that it will be only accessible
  // in the template, not inside Markdown
  // Use get() / set() helpers to
  // pass values to Markdown

  data: {},

  // In the main template fetch and
  // display index.md. This template
  // can be totally custom and can
  // mix and match Fachwerk and custom
  // components and utilities.

  template: `
  <f-fetch url="./index.md">
    <f-content
      slot-scope="{ value }"
      :content="value"
    />
  </f-fetch>
`
});
