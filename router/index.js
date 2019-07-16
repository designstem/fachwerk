import { Vue, VueRouter, components, utils } from "../fachwerk.js";

import menu from "../docs/menu.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

Vue.config.productionTip = false;
Vue.prototype.$global = new Vue({ data: { state: {} } });

const Hello = {
  props: ["a"],
  template: `
<div>
  <f-content content="# Hello" />
</div>
`
};

const World = {
  props: ["title", "a"],
  computed: {
    content() {
      return `# ${this.title}
${this.a}
    `;
    }
  },
  template: `
<f-content-editor :content="content" />
</div>`
};

const routes = [{ path: "/", component: Hello }];

const menuRoutes = menu[3].items.slice(0, 10).map(c => ({
  path: `/${c.component}`,
  component: World,
  props: { title: c.component, a: components[c.component].description }
}));

console.log(menuRoutes);

const router = new VueRouter({
  // https://stackoverflow.com/questions/47677220/vuejs-history-mode-with-github-gitlab-pages
  //mode: 'history',
  routes: [...routes, ...menuRoutes] // short for `routes: routes`
});

Vue.use(VueRouter);

new Vue({
  //el: "#fachwerk",
  router,
  data: { menuRoutes },
  methods: {
    ...utils
  },
  computed: {},
  mounted() {
    Vue.prototype.$global.$on("edit", () => (this.preview = !this.preview));
  },
  template: `
    <f-theme>
      <f-header />
      <section>
      <f-inline>
        <router-link to="/">Hello</router-link>
        <router-link v-for="route in menuRoutes" :to="route.path" v-html="route.props.title" /> 
      </f-inline>
      </section>
      <router-view></router-view>
    </f-theme>
  `
}).$mount("#fachwerk");
