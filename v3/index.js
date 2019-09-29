import {
  Vue,
  components,
  utils
} from "../fachwerk.js";

// Register components globally

for (const name in components) {
  Vue.component(name, components[name]);
}

// If you have custom components,
// install them here:
//
// import CustomComponent from "./CustomComponent.js";
// Vue.component("custom-component", CustomComponent);

// Set up a global event bus

Vue.prototype.$global = new Vue({ data: { state: {} } });

// Initialize VueJS

new Vue({
  
  // HTML tag id the content goes into

  el: "#fachwerk",

  methods: {
    
    // Allow utils to be used in templates
    
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
  <div> 
    <div style="
      position: sticky;
      top: 0;
      padding: var(--base3) var(--base4);
      z-index: 1000;
      background: var(--yellow);
      border-bottom: 2px solid var(--primary);
      box-shadow: 0 4px 4px rgba(0,0,0,0.0);
    ">
      <f-inline style="--inline-justify: space-between; margin: 0">
      <f-inline style="--inline-gap: var(--base2)">
        <a href="../v3">Fachwerk</a>
        <a href="../v2">Documentation</a>
        <a href="https://designstem.github.io/scenarios" target="_blank">Example projects</a>
        <a href="https://github.com/designstem/fachwerk" target="_blank">Github</a>
      </f-inline>
      <f-github-icon />
      </f-inline>
    </div>
  <f-fetch src="./index.md" v-slot="{ value }">
    <f-content
      type="document"
      :content="value"
    />
  </f-fetch>
  </div>
  `
});