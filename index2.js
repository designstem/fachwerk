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

// const PropsTable = {
//   props: { props: { default: {}, type: Number } },
//   computed: {
//     propRows() {
//       return Object.entries(this.props).map(p => ({
//         Name: `<code>${p[0]}</code>`,
//         Default: `<code>${p[1].default}</code>`,
//         Type: `<code>${
//           Array.isArray(p[1].default) ? "array" : typeof p[1].default
//         }</code>`
//       }));
//     }
//   },
//   template: `
//     <f-table :rows="propRows" style="--lightblue: transparent" />
//   `
// };

// const ComponentRow = {
//   props: {
//     component: { default: {}, type: Object }
//   },
//   methods: { kebabCase },
//   components: { PropsTable },
//   template: `
//     <div>
//       <h3>&lt;{{ kebabCase(component.name) }}&gt;</h3>
//       <div class="grid" style="--cols: 1fr 3fr">
//         <div>
//           <markdown v-if="component.description" :content="component.description" />
//           <div style="max-height: calc(var(--base) * 50); overflow: auto;">
//             <h5>Props</h5>
//             <PropsTable :props="component.props" />
//           </div>
//         </div>
//         <div>
//           <f-content-editor
//             v-if="component.example"
//             :content="component.example.trim()"
//             :autosave-id="component.name"
//             style="min-height: calc(var(--base) * 15)"
//           ><f-content-document slot-scope="{content}" :content="content" /></f-content-editor> 
//         </div>
//       </div>
//       <br><br>
      
//     </div>
//   `
// };

// const Colors = {
//   mixins: [Css],
//   template: `
//   <div class="colors">
//     <template v-for="c in [
//     'purple', 
//     'red',
//     'yellow',

//     'darkblue',
//     'blue',
//     'lightblue',

//     'darkestgray',
//     'darkergray',
//     'darkgray',

//     'gray',
//     'lightgray', 
//     'lightergray', 
//   ]">
//     <div :style="{
//       background: 'var(--' + c + ')',
//       borderRadius: '1000px'
//     }"></div>
//       <code style="
//         color: var(--secondary);
//         background: none;
//         margin: 0.5rem 0 0 0;
//         line-height: 1.4rem;"
//       >
//         var(--{{ c }})
//         <br>
//         color('{{ c }}')
//       </code>
//     </template>
// </div>
// `,
// css: `
// .colors {
//   display: grid;
//   grid-template-columns: 4rem 5fr 4rem 5fr 4rem 5fr;
//   grid-template-rows: repeat(4, 4rem);
//   grid-gap: 0.5rem;
// }
// @media (max-width: 900px) {
//   .colors {
//     grid-template-columns: 4rem 1fr;
//     grid-template-rows: repeat(12, 4rem);
//   }
// }
// `
// }

// const Styles = {
//   template: `
//   <div class="grid" style="--cols: 1fr 1fr 1fr;">
//   <div>
//     <dd>h2 .bullet</dd>
//     <h2><span class="bullet">2</span>Here is the smaller subtitle</h2>
//     <dd>h3 .bullet</dd>
//     <h3><span class="bullet">3</span>Here is the even smaller subtitle</h3>
//     <dd>h3 .bullet</dd>
//     <h4><span class="bullet">4</span>Here is the even more smaller subtitle</h4>
//     <dd>.intro</dd>
//     <div class="intro">Here is a intro with <a href="https://en.wikipedia.org/wiki/Johannes_Gutenberg">some
//         links</a> in it. Actually, it can be even longer if needed</div>
//     <dd>p, p b, p i</dd>
//     <p>This is just a regular paragraph text with some <b>basic</b> <i>formatting</i> if one so desires.</p>
//     <dd>p small, p small b, p small i</dd>
//     <p><small>This is just a small regular text wish some <b>basic</b> <i>formatting</i> if one so desires.</small></p>
//   </div>

//   <div>
//     <dd>.text, .text b, .text i</dd>
//     <div class="text">
//       <p>Normal polygons are
//         <b>polygons</b> with all sides and angles equal. Are formed by triangles, normally
//         <i>isosceles</i>.
//       </p>
//       <dd>.text p, .text code, .text a</dd>
//       <p>For example <code>6px</code> triangles connected together form a regular polygon. Normal polygons are characterized by the number of edges or sides.</p>
//       <p>Normal polygons are characterized by the number of edges or sides. For example 6px triangles connected together form a regular polygon.</p>
      
//       <dd>.text p small</dd>
//       <small>
//           For example 6px triangles connected together form a regular polygon. Normal polygons are characterized
//           by the number of edges or sides.
//       </small>
//     </div>

//     <dd>table</dd>
    
//     <table>
//       <thead>
//         <th>First col</th>
//         <th>Second col</th>
//       </thead>
//       <tbody>
//         <tr>
//           <td>First col</td>
//           <td>Second col</td>
//         </tr>
//         <tr>
//             <td>First col</td>
//             <td>Second col</td>
//           </tr>
//       </tbody>
//     </table>

//   </div>

//   <div>
//     <dd>label, .label</dd>
//     <label>Here is the label</label>
//     <dd>.sublabel</dd>
//     <div class="sublabel">Here is a longer description what does this widget actually do</div>
//     <dd>input[text]</dd>
//     <input type="text" />
//     <dd>input[range]</dd>
//     <input type="range" />
//     <dd>.button_primary</dd>

//     <div class="button_primary">I am a primary button</div>
//     <dd>.button_secondary</dd>
//     <div class="button_secondary">I am a secondary button</div>
//     <dd>.button_tertiary</dd>
//     <div class="button_tertiary">I am tertiary button</div>
//     <dd>.buttons .button_tertiary</dd>
//     <div class="buttons">
//       <div class="button_tertiary">First</div>
//       <div class="button_tertiary">Second</div>
//     </div>

//   </div>

//   </div>
//   `
// }

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

      <header>
        <div>Fachwerk is a part of <a href="https://designstem.github.io/homepage">DesignSTEM</a> education initiative.</div>
        <f-icon-github />
      </header>
  
      <div class="hero">
        <h1>Love <i>Ordnung</i>?<br>Here is Fachwerk.</h1>
        <h4 style="width: 70vw">Web framework for creating interactive learning materials. Only the <span style="color: var(--gray)">latest Chrome</span> for now.</h4>
      </div>

      <div style="padding: var(--base5); background: var(--yellow)">
        <div class="grid" style="
          --cols: 1fr 1fr 1fr;
          --gap: 1rem 2rem;
        ">
          <div>
            <h4><big>Play</big></h4>
            <div class="intro">
            Best way to get the glimpse what the framework offers is just try it out on this page. There are almost 50 components to try out - everything from 2D/3D graphics, user interaction, content creation and more.
            </div>
          </div>
          <div>
            <h4><big>Edit</big></h4>
              <div class="intro">
              We are building the web editor for easy authoring of documents. You can mix Markdown markup and Fachwerk components. The content is auto-saved to your browser.        
              </div>
          </div>
          <div>
              <h4><big>Build</big></h4>
            <div class="intro">
            Fachwerk is built on top of VueJS so to build more complex materials it is recommended to code it in Javascript, using some of the framework's components, utilities or styling.
            </div>
          </div>
          <div>
            <a href="#components" class="intro button_primary">Play with components</a>
          </div>
          <div><a href="./editor.html" class="intro button_primary">Try the editor</a>
          </div>
          <div><a href="https://github.com/designstem/template" class="intro button_primary">Get examples in Github</a>
          </div>
        </div>
      </div>

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

      <div class="footer">
        <div>
          <p>
            All code is licenced under
            <a href="https://choosealicense.com/licenses/mit/" rel="licence">
              MIT licence
            </a>.
            All content is licenced under
            <br>
            <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
              Creative Commons Attribution 4.0 International License
            </a>.
          </p>
        </div>
        <img src="./images/erasmus_logo.svg" style="width:240px" />
      </div>

    </f-theme>
  `
});
