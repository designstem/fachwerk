import * as components from "./framework.js";
import * as utils from "./utils.js";
import Markdown from "./components/Markdown.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

Vue.config.devtools = true;

/*
const renderer = new marked.Renderer();
renderer.paragraph = text => {
  return `<p>${text}</p>`
};
renderer.code = (c, l, e) => {
  if (c.match(/\s{4}<f-/g)) { return `<pre>${c}</pre>` }
  if (c.match(/<f-/g)) { return c }
  return `<pre>${c}</pre>`
}

const Md = {
  components: { Render },
  props: ["content"],
  computed: {
    output() {
      return marked(this.content, { breaks: true, renderer })
    }
  },
  template: `
    <div style="font-family: var(--font-mono); white-space: pre">{{ output }}</div>
  `
};
Vue.component("Md", Md);

import Render from "./components/Render.js";

const Md2 = {
  components: { Render },
  props: ["content"],
  computed: {
    output() {
      return marked(this.content, { breaks: true, renderer })
    }
  },
  template: `
    <div style="border: 3px solid red">
     <Render :t="'<div>' + output + '</div>'" />
    </div>
  `
};

Vue.component("Md2", Md2);

const FContentEditor = {
  props: {
    content: { default: "", type: String }
  },
  data: function() {
    return { innerContent: this.content };
  },
  components: { Markdown },
  template: `
  <div style="display: flex">
    <f-editor
      v-model="innerContent"
      style="flex: 1; height: 100vh;"
    />
    <md style="flex: 1; overflow: auto;" :content="innerContent" />
    <md2 style="flex: 1" :content="innerContent" />
  </div>
  `
};

Vue.component("FContentEditor", FContentEditor);

Vue.config.errorHandler = function(err, vm, info) {
  console.log(err, vm, info);
};
new Vue({
  el: "#app",
  data: () => ({ inverted: false }),
  methods: utils,
  template: `
<f-content-editor content="<f-scene><f-circle /></f-scene>" />
  `
});


const FGrid4 = {
  props: {
    opacity: { default: 0.2, type: Number }
  },
  methods: utils,
  template: `
  <f-group3>
    <f-group3
      v-for="(rotation,i) in [{},{x:90},{y:90}]"
      :key="i"
      :rotation="rotation"
    >
    <f-line3
      v-for="x in range(-2,2,0.5)"
      :points="[{ x, y: -2},{ x, y: 2}]"
      :stroke-width="1"
      :opacity="x == 0 ? opacity * 2 : opacity"
    />
    <f-line3
      v-for="y in range(-2,2,0.5)"
      :points="[{ x: -2, y },{ x: 2, y }]"
      :stroke-width="1"
      :opacity="y == 0 ? opacity * 2 : opacity"
    />
    </f-group3>
  </f-group3>
  `
}

Vue.component("f-grid4", FGrid4);

new Vue({
  el: "#app",
  data: () => ({ inverted: false }),
  methods: utils,
  template2: `
<f-slider-data to="360">
<f-scene3 slot-scope="data">
    <f-group3 :rotation="{x: data.value, y: data.value / 2}">
    
    <f-group3
      v-for="(rotation,i) in [{},{x:90},{y:90}]"
      :key="i"
      :rotation="rotation"
    >
    <f-line3
      v-for="x in range(-2,2,0.5)"
      :points="[{ x, y: -2},{ x, y: 2}]"
      :stroke-width="1"
      :opacity="x == 0 ? 0.8 : 0.4"
    />
    <f-line3
      v-for="y in range(-2,2,0.5)"
      :points="[{ x: -2, y },{ x: 2, y }]"
      :stroke-width="1"
      :opacity="y == 0 ? 0.8 : 0.4"
    />
    </f-group3>
    <f-box3 opacity="0.3"  />  
    
    </f-group3>
</f-scene3>
  `,
  template: `
<f-scene3>
  <f-grid3 />
</f-scene3>
  `
});

*/

new Vue({
  el: "#app",
  data: () => ({ inverted: false }),
  methods: utils,
  template: `
  <pre>Hey</pre>
  `
})