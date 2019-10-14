import { fachwerk2 } from "../fachwerk.js";

// export function fachwerk2(c = {}) {
//   const config = {
//     el: "#fachwerk",
//     src: "./index.md",
//     title: "Fachwerk",
//     editor: "hide",
//     menu: "hide",
//     type: "document",
//     theme: "light",
//     style: {},
//     components: {},
//     utils: {},
//     ...c
//   };
//   for (const name in components) {
//     Vue.component(name, components[name]);
//   }
//   for (const name in config.components) {
//     Vue.component(name, config.components[name]);
//   }
//   Vue.mixin({ methods: { ...config.utils } });

//   Vue.config.productionTip = false;
//   Vue.prototype.$global = new Vue({ data: { state: {} } });

//   new Vue({
//     el: config.el,
//     data: {
//       config
//     },
//     template: `
//     <f-fetch :src="config.src" v-slot="{ value: content }">
//       <f-content-editor2
//         :content="content"
//         :editor="config.editor"
//         :menu="config.menu"
//         :type="config.type"
//       />
//     </f-fetch>
//     `
//   });
// }

fachwerk2();
