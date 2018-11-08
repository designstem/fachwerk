import * as components from "./framework.js";
import * as utils from "./utils.js";
import Markdown from "./components/Markdown.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

Vue.config.devtools = true;

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
