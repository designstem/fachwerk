import * as components from "./framework.js";
import * as utils from "./utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

Vue.config.devtools = true;

// Vue.config.errorHandler = function(err, vm, info) {
//   console.log(err, vm, info);
// };

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

/*
const FText = {
  props: {
    x: { default: 0, type: Number },
    y: { default: 0, type: Number }
  },
  template: `
  <f-group :position="{x: x, y: y}">
    <text
      dy="-0.2"
      text-anchor="middle"
      transform="scale(1,-1)"
    >
      <slot />
    </text>
  </f-group>
  `
}

Vue.component("FText", FText);

new Vue({
  el: "#app",
  data: () => ({ inverted: false }),
  methods: utils,
  template: `
  <f-scene grid="true">
  <circle cx="0" cy="0" r="0.1" :fill="color('orange')" />
  <circle cx="1" cy="1" r="0.1" :fill="color('red')" />
  <circle cx="-1" cy="-1" r="0.1" :fill="color('blue')" />
  <f-text x="1" y="1">-1, -1</f-text>
  <text x="1" y="1">-1, -1</text>
</f-scene>
  `
})
*/

import Css from "../components/Css.js";

const FContentEditor = {
  mixins: [Css],
  props: {
    content: { default: "", type: String },
    autosaveId: { default: "0", type: String }
  },
  data: function() {
    return {
      innerContent: this.content,
      changed: false
    };
  },
  methods: {
    handleReset() {
      this.innerContent = this.content;
      Vue.nextTick(() => (this.changed = false));
    }
  },
  mounted() {
    const savedContent = JSON.parse(
      localStorage.getItem(`f-content-editor-${this.autosaveId}`)
    );
    if (savedContent) {
      this.innerContent = savedContent.content;
      if (savedContent.content !== this.content) {
        this.changed = true;
      }
    }
    this.$watch("innerContent", innerContent => {
      localStorage.setItem(
        `f-content-editor-${this.autosaveId}`,
        JSON.stringify({ content: innerContent })
      );
      this.changed = true;
    });
  },
  template: `
  <div class="f-content-editor">
    <div style="position: relative;">
      <f-editor
        v-model="innerContent"
        style="position: absolute; top: 0, right: 0, bottom: 0, left: 0"
      />
      <div
        style="
          cursor: pointer;
          position: absolute;
          top: calc(var(--base) * 1.5);
          right: calc(var(--base) * 1.5);
          font-size: 0.8rem;
          color: var(--primary);
        "
        @click="handleReset"
      >
        {{ changed ? '↺' : ''}}
      </div>
    </div>
    <div>
      <slot :content="innerContent">
        <f-content-cards :content="innerContent" />
      </slot> 
    </div>
  </div>
  `,
  css: `
  .f-content-editor {
    display: flex;
    min-height: 90vh;
  }
  .f-content-editor > div:nth-child(1) {
    width: 33vw;
  }
  @media (max-width: 800px) {
    .f-content-editor {
      display: block;
      min-height: inherit;
    }
    .f-content-editor > div:nth-child(1) {
      width: inherit;
      min-height: 20rem;
    }
  }
  `
};

Vue.component("FContentEditor", FContentEditor);

new Vue({
  el: "#app",
  methods: utils,
  template: `
  <f-theme theme="dark">
    <header>Yo</header>
    <f-content-editor content="# Helllo" />
  </f-theme>
  `
});


// new Vue({
//   el: "#app",
//   methods: utils,
//   template2: `
//   <f-theme theme="dark">
//     <f-content-slides content="<f-content-editor content='# Helllo' />" />
//   </f-theme>
//   `,
//   template: `
//   <div>
//   <header>Hey</header>
//   <div style="margin: var(--base4); --base: 8px">
//     <h1>Header1 Header Header Header Header Header Header Header Header Header Header Header Header Header Header Header Header</h1>
//     <h2>Header2 Header Header Header Header Header Header Header Header Header Header Header Header Header Header Header Header </h2>
//     <h3>Header3 Header Header Header Header Header Header Header Header Header Header Header Header Header Header Header Header </h3>
//     <h4>Header4 Header Header Header Header Header Header Header Header Header Header Header Header Header Header Header Header </h4>
//     <p>Actually ramps hella mixtape pop-up, ennui kickstarter gochujang succulents adaptogen tbh. Organic affogato gastropub air plant pabst swag try-hard echo park</p><p>knausgaard umami PBR&B yuccie seitan mlkshk. Salvia keytar man bun, kickstarter scenester photo booth offal lomo. Butcher brunch vaporware tilde health goth cliche craft beer hell of pinterest YOLO. Adaptogen keytar kickstarter</p>
//     <h3>Header3 Header Header Header Header Header</h3>
//     <p>microdosing tumeric art party truffaut knausgaard hell of tattooed mumblecore kogi. Knausgaard austin poke activated charcoal man bun bespoke distillery chillwave scenester etsy tacos synth tousled</p>
//     <h4>Header4 Header Header Header Header Header</h4>
//     <p>microdosing tumeric art party truffaut knausgaard hell of tattooed mumblecore kogi. Knausgaard austin poke activated charcoal man bun bespoke distillery chillwave scenester etsy tacos synth tousled</p>
//   </div>
//   <footer>Hey</footer>
// </div>
//   `
// });

//   <f-content-slides slot-scope="{content}" :content="content" />
