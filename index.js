import * as components from "./framework.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

import { sortedComponents } from "./framework.js";

import Colors from "./homepage/Colors.js";
import Styles from "./homepage/Styles.js";
import ComponentRow from "./homepage/ComponentRow.js";
import Utils from "./homepage/Utils.js";
import Faq from "./homepage/Faq.js";

new Vue({
  el: "#app",
  data: {
    sortedComponents,
    tags: ["2D", "3D", "Data", "Transitions", "Content", "Layout"],
    activeTag: 0
  },
  components: { ComponentRow, Colors, Styles, Utils, Faq },
  template: `
    <f-theme>

      <f-hr />

      <div style="padding: var(--base5);">
        <h1>Typograhphy & Forms</h1>
        <div class="intro">
          A case full of moving type for laying out documents.
        </div>
        <br><br>
        <Styles />
      </div>

      <f-hr />
  
      <div style="padding: var(--base5);">
        <h1>Colors</h1>
        <div class="intro">
          A compact set of useful colors, available as CSS variables, <code>var(--purple)</code> and Javascript functions <code>color('purple')</code>.
        </div>
        <br/><br/>
        <Colors />
      </div>

      <f-hr />
  
      <a id="components" style="font-weight: normal;">
        <div style="padding: var(--base5);">
          <h1>Components</h1>
          <div class="intro">
            The essential building blocks of Fachwerk. The code samples are editable ✏️ so try them out out!
          </div>
        </div>
      </a>

      <f-hr />
      
      <f-tabs
        :buttons="tags"
        v-model="activeTag"
      />

      <div style="padding: var(--base5);">
        <ComponentRow
          v-for="(c,i) in sortedComponents.map(c => Object.values(c)[0]).filter(c => c.tag == tags[activeTag])"
          :component="c"
          :nopreview="c.hasOwnProperty('Editor')"
          :key="i"
          style="margin-bottom: calc(var(--base) * 10);"
        />
      </div>

      <f-hr />
      
      <div style="padding: var(--base5);">
        <h1>Grid</h1>
        <div class="intro">
          A <a href="https://learncssgrid.com/" target="_blank">CSS grid</a> and CSS variables based grid system. The code below is editable ✏️ so try it out!
        </div>
        <br/>
        <f-fetch-data url="./contents/grid.md">
          <f-content-editor
            slot-scope="data"
            :content="data.value"
            autosave-id="grid"
          ><f-content-document slot-scope="{content}" :content="content" /></f-content-editor> 
        </f-fetch-data>
      </div>

      <f-hr />
      
      <div style="padding: var(--base5);">
        <h1>Utils</h1>
        <div class="intro">A set of Javascript helper functions. Use them like this:</div>
        <br/>

        <pre>
// Import just a single function
import { random } from 'https://designstem.github.io/framework/utils.js'

// Import all under utils namespace
import * as utils from 'https://designstem.github.io/framework/utils.js'

// Make all utils available for Vue templates
new Vue({
  methods: { ...utils }
})
        </pre>

        <Utils />
      </div>

      <f-hr />
  
      <div style="padding: var(--base5);">
        <h1>FAQ</h1>
        <Faq />
      </div>

    </f-theme>
  `
});
