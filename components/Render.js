import Buttons from "./Buttons.js";
import Math from "./Math.js";
import Poly from "./Poly.js";

export default {
  components: { Buttons, Math, Poly },
  props: { t: String },
  data: () => ({
    render: null
  }),
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

// export default {
//   components: { Buttons, Math },
//   props: {t: String},
//   data: () => ({
//     render: null
//   }),
//   mounted() {
//     this.$watch(
//       "t",
//       value => {
//         const template = Vue.compile(value);
//         this.render = template.render;
//         this.staticRenderFns = template.staticRenderFns;
//       },
//       { immediate: true }
//     );
//   },
//   render: function (h) {
//     return this.render ? this.render() : h()
//   }
// };

// export default {
//   functional: true,
//   components: { Buttons, Math },
//   props: {
//     t: String,
//     data: { type: Object, default: () => ({}) }
//   },
//   render(h, context) {
//     const template = context.props.t;
//     const component = {
//       template,
//       data() {
//         return context.props.data;
//       }
//     };
//     return h(template ? component : h());
//   }
// };

// export default {
//   components: { Buttons, Math },
//   props: ["t"],
//   data() {
//     return {
//       templateRender: null
//     };
//   },
//   render(h) {
//     if (!this.templateRender) {
//       return h("div", "loading...");
//     } else {
//       // If there is a template, I'll show it
//       return this.templateRender();
//     }
//   },
//   watch: {
//     // Every time the template prop changes, I recompile it to update the DOM
//     t: {
//       immediate: true, // makes the watcher fire on first render, too.
//       handler() {
//         var res = Vue.compile(this.t);

//         this.templateRender = res.render;

//         // staticRenderFns belong into $options,
//         // appearantly
//         this.$options.staticRenderFns = [];

//         // clean the cache of static elements
//         // this is a cache with the results from the staticRenderFns
//         this._staticTrees = [];

//         // Fill it with the new staticRenderFns
//         for (var i in res.staticRenderFns) {
//           //staticRenderFns.push(res.staticRenderFns[i]);
//           this.$options.staticRenderFns.push(res.staticRenderFns[i]);
//         }
//       }
//     }
//   }
// };