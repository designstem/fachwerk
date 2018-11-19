import * as components from "./framework.js";
import * as utils from "./utils.js";
for (const name in components) {
  Vue.component(name, components[name]);
}

const FSceneData2 = {
  data: () => ({ mouseX: 0, mouseY: 0, mousePressed: false }),
  methods: {
    onMousemove(e) {
      let svg = this.$children[0].$children[0].$refs.f_svg;
      let container = this.$children[0].$children[0].$refs.f_svg_g;

      let point = svg.createSVGPoint();
      point.x = e.clientX;
      point.y = e.clientY;
      let ctm = container.getScreenCTM();
      if ((ctm = ctm.inverse())) {
        point = point.matrixTransform(ctm);
      }

      this.mouseX = point.x;
      this.mouseY = point.y;
    }
  },
  template: `
  <div
    @mousemove="onMousemove"
    @mousedown="mousePressed = true"
    @mouseup="mousePressed = false"
  >
    <slot :value="[mouseX,mouseY,mousePressed]" />
  </div>
  `
};

const FSceneData3 = {
  data: () => ({ mouseX: 0, mouseY: 0, mousePressed: false }),
  methods: {
    onMousemove(e) {
      let svg = this.$children[0].$children[0].$refs.f_svg;
      let container = this.$children[0].$children[0].$refs.f_svg_g;

      let point = svg.createSVGPoint();
      point.x = e.clientX;
      point.y = e.clientY;
      let ctm = container.getScreenCTM();
      if ((ctm = ctm.inverse())) {
        point = point.matrixTransform(ctm);
      }

      this.mouseX = point.x;
      this.mouseY = point.y;
    }
  },
  template: `
  <div
    @mousemove="onMousemove"
    @mousedown="mousePressed = true"
    @mouseup="mousePressed = false"
  >
    <slot :value="[mouseX,mouseY,mousePressed]" />
  </div>
  `
};

// const FSceneData2 = {
//   data: () => ({ mouseX: 0, mouseY: 0, mousePressed: false }),
//   methods: {
//     onSceneMousemove(e) {
//       let svg = this.$parent.$refs.f_scene;
//       let point = svg.createSVGPoint();
//       point.x = e.clientX;
//       point.y = e.clientY;
//       let ctm = this.$refs.container.getScreenCTM();
//       if ((ctm = ctm.inverse())) {
//         point = point.matrixTransform(ctm);
//       }
//       this.mouseX = point.x;
//       this.mouseY = point.y;
//     }
//   },
//   template: `
//   <g ref="container">
//     <slot />
//   </g>
//   `
// };

Vue.component("f-scene-data2", FSceneData2);
Vue.component("f-scene-data3", FSceneData3);

const FDrag2 = {
  props: {
    points: { default: [{ x: 0, y: 0 },{ x: 1, y: 1 }], type: Array },
    value: { default: [], type: Array }
  },
  data: () => ({ currentPoints: [] }),
  methods: {
    ...utils,
    handleDown(i) {
      this.$set(this.currentPoints[i],'pressed',true)
    },
    handleUp(i) {
      this.$set(this.currentPoints[i],'pressed',false)
    }
  },
  computed: {
    finalPoints() {
      return this.currentPoints.map((p,i) => {
        if (p.pressed) {
          p.x = this.value[0]
          p.y = this.value[1]
        }
        return p
      })
    }
  },
  mounted() {
    this.currentPoints = this.points
  },
  template: `
    <f-group>
      <slot />
      <!--f-circle
        :x="value[0]"
        :y="value[1]"
        r="0.2"
        :fill="color('white')"
      /--> 
      <f-circle 
        v-for="(p,i) in finalPoints"
        :x="p.x"
        :y="p.y"
        :r="p.pressed ? 0.22 : 0.2"
        fill="rgba(255,255,255,0.95)"
        @mousedown.native="handleDown(i)"
        @mouseup.native="handleUp(i)"
        style="cursor: move;"
      />        
    </f-group>
  `
};

Vue.component("FDrag2", FDrag2);

Vue.prototype.$events = new Vue();
new Vue({
  el: "#app",
  methods: utils,
  template: `
  <div style="padding: 2rem;">
      <f-scene grid>
        <f-group slot-scope="data">
          <f-drag2 :value="data.value" />
        </f-group>
      </f-scene>
  </div>
  `
});

// Vue.prototype.$events = new Vue();
// new Vue({
//   el: "#app",
//   methods: utils,
//   template: `
//   <div style="padding: 2rem;">
//     <f-scene-data2>
//       <f-scene grid><f-circle/></f-scene>
//     </f-scene-data2>
//   </div>
//   `
// });

// const FReceiveData = {
//   props: {
//     channel: { default: 'value', type: [String, Number, Array]}
//   },
//   data: () => ({ value: null }),
//   mounted() {
//     this.$events.$on(this.channel, value => this.value = value )
//   },
//   template: `
//     <slot :value="value" />
//   `,
// }

// Vue.component('FReceiveData',FReceiveData)

// Vue.prototype.$events = new Vue()
// new Vue({
//   el: "#app",
//   methods: utils,
//   template: `
//     <div>
//     <header>Scenario is coming up</header>
//     <f-fetch-data url="./README.md">
//       <f-content-slides base="8px" slot-scope="data" :content="data.value" />
//     </f-fetch-data>
//     </div>
//   `,
// });

// // new Vue({
// //   el: "#app",
// //   data: { r: 0, g: 0, b: 0 },
// //   methods: utils,
// //   computed: {
// //     done() {
// //       return this.r == 10
// //     }
// //   },
// //   template: `
// //   <div>
// //     <f-slider v-model="r" />
// //     <f-slider v-model="g" />
// //     <f-slider v-model="b" />
// //    <h1 v-if="done">YEEEEEEEE</h1>
// //   </div>
// //   `
// // });

// new Vue({
//   el: "#app",
//   data: { r: 0, g: 0, b: 0, scene: 2, rSlider: 0 },
//   methods: { ...utils,
//     prevScene() {
//       if (this.scene >= 1) {
//         this.scene--
//       }
//     },
//     nextScene() {
//       if (this.scene < 2) {
//         this.scene++
//       }
//     }
//   },
//   template: `
//   <div>
//   <f-aframe width="600" height="600">

//     <a-entity position="0 0 -4" rotation="-35 0 0" scale="1.5 1.5 1.5">

//       <a-entity v-if="scene != 2">
//       <a-entity
//         @click="r = 1 - r"
//         position="-2 -0.5 -4"
//       >
//         <a-rounded
//           radius="0.06"
//           material="emissive: #ccc"
//         />
//         <a-text
//           position="0.32 0.5 0"
//           value="R"
//           :color="r ? '#f00' : '#777'"
//           width="10"
//         />
//       </a-entity>

//       <a-entity
//         @click="g = 1 - g"
//         position="-0.5 -0.5 -4"
//       >
//         <a-rounded
//           radius="0.06"
//           material="emissive: #ccc"
//         />
//         <a-text
//           position="0.32 0.5 0"
//           value="G"
//           :color="g ? '#0f0' : '#777'"
//           width="10"
//         />
//       </a-entity>

//       <a-entity
//         @click="b = 1 - b"
//         position="1 -0.5 -4"
//       >
//         <a-rounded
//           radius="0.06"
//           material="emissive: #ccc"
//         />
//         <a-text
//           position="0.32 0.5 0"
//           value="B"
//           :color="b ? '#00f' : '#777'"
//           width="10"
//         />
//       </a-entity>
//       </a-entity>

//       <!-- scene2 -->

//       <a-entity v-if="scene == 2">
//       <a-entity
//         @click="rSlider = rSlider - 25"
//         position="-2 -0.5 -4"
//       >
//         <a-rounded
//           radius="0.06"
//           material="emissive: #ccc"
//         />
//         <a-text
//           position="0.32 0.5 0"
//           value="R-"
//           color="#777"
//           width="10"
//         />
//       </a-entity>

//       <a-entity
//         position="-0.5 -0.5 -4"
//       >
//         <a-text
//           position="0.32 0.5 0"
//           :value="rSlider"
//           color="#777"
//           width="10"
//         />
//       </a-entity>

//       <a-entity
//         @click="rSlider = rSlider + 25"
//         position="1 -0.5 -4"
//       >
//         <a-rounded
//           radius="0.06"
//           material="emissive: #ccc"
//         />
//         <a-text
//           position="0.32 0.5 0"
//           value="R+"
//           color="#777"
//           width="10"
//         />
//       </a-entity>
//       </a-entity>

//       <!-- last -->

//       <a-entity
//         @click="prevScene"
//         position="-2 -2.5 -4"
//       >
//         <a-rounded
//           radius="0.06"
//           material="emissive: #ccc"
//         />
//         <a-text
//           position="0.32 0.5 0"
//           value="<"
//           color="#777"
//           width="10"
//         />
//       </a-entity>

//       <a-entity
//       position="-0.5 -2.5 -4"
//       >
//         <a-text
//           position="0.32 0.5 0"
//           :value="scene"
//           color="#fff"
//           width="10"
//         />
//       </a-entity>

//       <a-entity
//         @click="nextScene"
//         position="1 -2.5 -4"
//       >
//         <a-rounded
//           radius="0.06"
//           material="emissive: #ccc"
//         />
//         <a-text
//           position="0.32 0.5 0"
//           value=">"
//           color="#777"
//           width="10"
//         />
//       </a-entity>

//     </a-entity>

//     <a-light position="0 10 2" :color="rgb(200,200,200)" />
//     <a-light position="0 -1 1" :color="rgb(100,100,100)" />

//     <a-light v-if="scene !=2" position="0 0.5 1" :color="rgb([0,255][r],[0,255][g],[0,255][b])" />
//     <a-light v-if="scene ==2" position="0 0.5 1" :color="rgb(rSlider,0,0)" />

//     <a-sphere position="-5 0 -20" :color="['white','yellow','yellow'][scene]" />
//     <a-sphere position="0 0 -20" :color="['white','red','red'][scene]" />
//     <a-sphere position="5 0 -20" :color="['white','orange','orange'][scene]" />

//   </f-aframe>
//   </div>

//   `
// });

// // new Vue({
// //   el: "#app",
// //   methods: utils,
// //   data: { r1: 0 },
// //   template: `
// //   <div style="padding: 2rem">
// //     <f-slider v-model="r1" to="255" />
// //     <f-aframe width="800" height="600">
// //       <a-light :color="rgb(255,255,255)" position="0 2 0" />
// //       <a-sphere :color="rgb(r1,r1,r1)" />
// //     </f-aframe>
// //   </div>
// //   `
// // });

// /*

// Vue.config.devtools = true;

// // Vue.config.errorHandler = function(err, vm, info) {
// //   console.log(err, vm, info);
// // };

// /*
// const renderer = new marked.Renderer();
// renderer.paragraph = text => {
//   return `<p>${text}</p>`
// };
// renderer.code = (c, l, e) => {
//   if (c.match(/\s{4}<f-/g)) { return `<pre>${c}</pre>` }
//   if (c.match(/<f-/g)) { return c }
//   return `<pre>${c}</pre>`
// }

// const Md = {
//   components: { Render },
//   props: ["content"],
//   computed: {
//     output() {
//       return marked(this.content, { breaks: true, renderer })
//     }
//   },
//   template: `
//     <div style="font-family: var(--font-mono); white-space: pre">{{ output }}</div>
//   `
// };
// Vue.component("Md", Md);

// import Render from "./components/Render.js";

// const Md2 = {
//   components: { Render },
//   props: ["content"],
//   computed: {
//     output() {
//       return marked(this.content, { breaks: true, renderer })
//     }
//   },
//   template: `
//     <div style="border: 3px solid red">
//      <Render :t="'<div>' + output + '</div>'" />
//     </div>
//   `
// };

// Vue.component("Md2", Md2);

// const FContentEditor = {
//   props: {
//     content: { default: "", type: String }
//   },
//   data: function() {
//     return { innerContent: this.content };
//   },
//   components: { Markdown },
//   template: `
//   <div style="display: flex">
//     <f-editor
//       v-model="innerContent"
//       style="flex: 1; height: 100vh;"
//     />
//     <md style="flex: 1; overflow: auto;" :content="innerContent" />
//     <md2 style="flex: 1" :content="innerContent" />
//   </div>
//   `
// };

// Vue.component("FContentEditor", FContentEditor);

// Vue.config.errorHandler = function(err, vm, info) {
//   console.log(err, vm, info);
// };
// new Vue({
//   el: "#app",
//   data: () => ({ inverted: false }),
//   methods: utils,
//   template: `
// <f-content-editor content="<f-scene><f-circle /></f-scene>" />
//   `
// });

// const FGrid4 = {
//   props: {
//     opacity: { default: 0.2, type: Number }
//   },
//   methods: utils,
//   template: `
//   <f-group3>
//     <f-group3
//       v-for="(rotation,i) in [{},{x:90},{y:90}]"
//       :key="i"
//       :rotation="rotation"
//     >
//     <f-line3
//       v-for="x in range(-2,2,0.5)"
//       :points="[{ x, y: -2},{ x, y: 2}]"
//       :stroke-width="1"
//       :opacity="x == 0 ? opacity * 2 : opacity"
//     />
//     <f-line3
//       v-for="y in range(-2,2,0.5)"
//       :points="[{ x: -2, y },{ x: 2, y }]"
//       :stroke-width="1"
//       :opacity="y == 0 ? opacity * 2 : opacity"
//     />
//     </f-group3>
//   </f-group3>
//   `
// }

// Vue.component("f-grid4", FGrid4);

// new Vue({
//   el: "#app",
//   data: () => ({ inverted: false }),
//   methods: utils,
//   template2: `
// <f-slider-data to="360">
// <f-scene3 slot-scope="data">
//     <f-group3 :rotation="{x: data.value, y: data.value / 2}">

//     <f-group3
//       v-for="(rotation,i) in [{},{x:90},{y:90}]"
//       :key="i"
//       :rotation="rotation"
//     >
//     <f-line3
//       v-for="x in range(-2,2,0.5)"
//       :points="[{ x, y: -2},{ x, y: 2}]"
//       :stroke-width="1"
//       :opacity="x == 0 ? 0.8 : 0.4"
//     />
//     <f-line3
//       v-for="y in range(-2,2,0.5)"
//       :points="[{ x: -2, y },{ x: 2, y }]"
//       :stroke-width="1"
//       :opacity="y == 0 ? 0.8 : 0.4"
//     />
//     </f-group3>
//     <f-box3 opacity="0.3"  />

//     </f-group3>
// </f-scene3>
//   `,
//   template: `
// <f-scene3>
//   <f-grid3 />
// </f-scene3>
//   `
// });

// */

// /*
// const FText = {
//   props: {
//     x: { default: 0, type: Number },
//     y: { default: 0, type: Number }
//   },
//   template: `
//   <f-group :position="{x: x, y: y}">
//     <text
//       dy="-0.2"
//       text-anchor="middle"
//       transform="scale(1,-1)"
//     >
//       <slot />
//     </text>
//   </f-group>
//   `
// }

// Vue.component("FText", FText);

// new Vue({
//   el: "#app",
//   data: () => ({ inverted: false }),
//   methods: utils,
//   template: `
//   <f-scene grid="true">
//   <circle cx="0" cy="0" r="0.1" :fill="color('orange')" />
//   <circle cx="1" cy="1" r="0.1" :fill="color('red')" />
//   <circle cx="-1" cy="-1" r="0.1" :fill="color('blue')" />
//   <f-text x="1" y="1">-1, -1</f-text>
//   <text x="1" y="1">-1, -1</text>
// </f-scene>
//   `
// })
// */

// // import Css from "../components/Css.js";

// // const FContentEditor = {
// //   mixins: [Css],
// //   props: {
// //     content: { default: "", type: String },
// //     autosaveId: { default: "0", type: String }
// //   },
// //   data: function() {
// //     return {
// //       innerContent: this.content,
// //       changed: false
// //     };
// //   },
// //   methods: {
// //     handleReset() {
// //       this.innerContent = this.content;
// //       Vue.nextTick(() => (this.changed = false));
// //     }
// //   },
// //   mounted() {
// //     const savedContent = JSON.parse(
// //       localStorage.getItem(`f-content-editor-${this.autosaveId}`)
// //     );
// //     if (savedContent) {
// //       this.innerContent = savedContent.content;
// //       if (savedContent.content !== this.content) {
// //         this.changed = true;
// //       }
// //     }
// //     this.$watch("innerContent", innerContent => {
// //       localStorage.setItem(
// //         `f-content-editor-${this.autosaveId}`,
// //         JSON.stringify({ content: innerContent })
// //       );
// //       this.changed = true;
// //     });
// //   },
// //   template: `
// //   <div class="f-content-editor">
// //     <div style="position: relative;">
// //       <f-editor
// //         v-model="innerContent"
// //         style="position: absolute; top: 0, right: 0, bottom: 0, left: 0"
// //       />
// //       <div
// //         style="
// //           cursor: pointer;
// //           position: absolute;
// //           top: calc(var(--base) * 1.5);
// //           right: calc(var(--base) * 1.5);
// //           font-size: 0.8rem;
// //           color: var(--primary);
// //         "
// //         @click="handleReset"
// //       >
// //         {{ changed ? '↺' : ''}}
// //       </div>
// //     </div>
// //     <div>
// //       <slot :content="innerContent">
// //         <f-content-slides :content="innerContent" />
// //       </slot>
// //     </div>
// //   </div>
// //   `,
// //   css: `
// //   .f-content-editor {
// //     display: flex;
// //     min-height: 90vh;
// //   }
// //   .f-content-editor > div:nth-child(1) {
// //     width: 33vw;
// //   }
// //   @media (max-width: 800px) {
// //     .f-content-editor {
// //       display: block;
// //       min-height: inherit;
// //     }
// //     .f-content-editor > div:nth-child(1) {
// //       width: inherit;
// //       min-height: 20rem;
// //     }
// //   }
// //   `
// // };

// //Vue.component("FContentEditor", FContentEditor);

// // new Vue({
// //   el: "#app",
// //   methods: utils,
// //   template: `
// //     <f-content-editor />
// //   `
// // });

// // new Vue({
// //   el: "#app",
// //   methods: utils,
// //   template2: `
// //   <f-theme theme="dark">
// //     <f-content-slides content="<f-content-editor content='# Helllo' />" />
// //   </f-theme>
// //   `,
// //   template: `
// //   <div>
// //   <header>Hey</header>
// //   <div style="margin: var(--base4); --base: 8px">
// //     <h1>Header1 Header Header Header Header Header Header Header Header Header Header Header Header Header Header Header Header</h1>
// //     <h2>Header2 Header Header Header Header Header Header Header Header Header Header Header Header Header Header Header Header </h2>
// //     <h3>Header3 Header Header Header Header Header Header Header Header Header Header Header Header Header Header Header Header </h3>
// //     <h4>Header4 Header Header Header Header Header Header Header Header Header Header Header Header Header Header Header Header </h4>
// //     <p>Actually ramps hella mixtape pop-up, ennui kickstarter gochujang succulents adaptogen tbh. Organic affogato gastropub air plant pabst swag try-hard echo park</p><p>knausgaard umami PBR&B yuccie seitan mlkshk. Salvia keytar man bun, kickstarter scenester photo booth offal lomo. Butcher brunch vaporware tilde health goth cliche craft beer hell of pinterest YOLO. Adaptogen keytar kickstarter</p>
// //     <h3>Header3 Header Header Header Header Header</h3>
// //     <p>microdosing tumeric art party truffaut knausgaard hell of tattooed mumblecore kogi. Knausgaard austin poke activated charcoal man bun bespoke distillery chillwave scenester etsy tacos synth tousled</p>
// //     <h4>Header4 Header Header Header Header Header</h4>
// //     <p>microdosing tumeric art party truffaut knausgaard hell of tattooed mumblecore kogi. Knausgaard austin poke activated charcoal man bun bespoke distillery chillwave scenester etsy tacos synth tousled</p>
// //   </div>
// //   <footer>Hey</footer>
// // </div>
// //   `
// // });

// //   <f-content-slides slot-scope="{content}" :content="content" />

// // const FRepeatGrid = {
// //   tag: `Experimental`,
// //   description: `
// // Repeats the contents in 2D grid.
// //   `,
// //   example: `
// // <f-scene>
// //   <f-repeat-grid>
// //     <f-circle />
// //   </f-repeat-grid>
// // </f-scene>
// //   `,
// //   props: {
// //     fromX: { default: -1, type: Number },
// //     toX: { default: 1, type: Number },
// //     fromY: { default: -1, type: Number },
// //     toY: { default: 1, type: Number },
// //     step: { default: 1, type: Number },
// //     stepX: { default: null, type: Number },
// //     stepY: { default: null, type: Number },
// //   },
// //   methods: utils,
// //   template: `
// //   <f-group>
// //     <f-group v-for="x in range(fromX,toX, stepX ? stepX : step)" :position="{x,y:0}">
// //       <f-group v-for="y in range(fromY,toY, stepY ? stepY : step)" :position="{x:0,y}">
// //         <slot :value="[x,y]" />
// //       </f-group>
// //     </f-group>
// //   </f-group>
// //   `,
// // }

// // const FRepeatFlip = {
// //   methods: utils,
// //   template: `
// //   <f-group>
// //     <f-group
// //       :position="{x:-1}"
// //       :scale="{ y: -1 }"
// //     >
// //       <slot :value="0" />
// //     </f-group>
// //     <f-group
// //       :position="{x:1}"
// //     >
// //       <slot :value="1" />
// //     </f-group>
// //   </f-group>
// //   `,
// // }

// // const FRepeatCircle = {
// //   props: {
// //     count: { default: 6, type: Number },
// //     r: { default: 1, type: Number },
// //   },
// //   methods: utils,
// //   template: `
// //   <f-group>
// //     <f-group v-for="({x,y},i) in cpoints(count,r)" :position="{x,y}">
// //         <slot :value="i" />
// //       </f-group>
// //   </f-group>
// //   `,
// // }

// // Vue.component("FRepeatGrid", FRepeatGrid);
// // Vue.component("FRepeatFlip", FRepeatFlip);
// // Vue.component("FRepeatCircle", FRepeatCircle);

// // new Vue({
// //   el: "#app",
// //   methods: utils,
// //   template: `
// //     <f-animation-data to="360">
// //     <f-scene
// //       slot-scope="data"
// //       width="500"
// //       height="500"
// //       step="0.25"
// //       grid
// //     >
// //     <f-repeat-circle>
// //         <f-regularpolygon
// //           slot-scope="cdata"
// //           count="5"
// //           r="0.75"
// //           :rotation="{x:data.value}"
// //           :fill="hsl(cdata.value * 100)"
// //           opacity="0.5"
// //         />
// //     </f-repeat-circle>
// //     </f-scene>
// //   `
// // });
