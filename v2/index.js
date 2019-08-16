import {
  Vue,
  VueRouter,
  components,
  utils,
  flatten,
  titlecase,
  kebabcase,
  slug
} from "../fachwerk.js";

import DocsComponent from "./components/DocsComponent.js";
import DocsFile from "./components/DocsFile.js";
import DocsUtils from "./components/DocsUtils.js";
import DocsMenu from "./components/DocsMenu.js";
import DocsFrontpage from "./components/DocsFrontpage.js";

import menu from "./menu.js";

//const routes = [{ path: "/", component: DocsFrontpage }];

import * as color from "../src/utils/color.js";
import * as math from "../src/utils/math.js";
import * as trig from "../src/utils/trig.js";
import * as string from "../src/utils/string.js";
import * as array from "../src/utils/array.js";
import * as music from "../src/utils/music.js";
import * as other from "../src/utils/other.js";

const utilsPages = [{ color, math, trig, string, array, music, other }].map(g =>
  Object.entries(g).map(([group, module]) => [
    group,
    Object.entries(module)
      .filter(([key, value]) => key.endsWith("_help"))
      .map(([key, value]) => [key.replace("_help", ""), value()])
  ])
);

const fullMenu = menu.concat(
  flatten(
    utilsPages.map(g => {
      return g.map(([group, items]) => {
        return {
          title: `${titlecase(group)} utilities`,
          items: items.map(([title, content]) => ({
            title,
            content,
            utils: true
          }))
        };
      });
    })
  )
);

const pageMap = c => {
  if (c.home) {
    return {
      path: `/`,
      component: DocsFile,
      props: { title: c.title, src: c.file }
    };
  }
  if (c.component) {
    return {
      path: `/${kebabcase(c.component)}`,
      component: DocsComponent,
      props: { title: c.component, c: components[c.component] }
    };
  }
  if (c.file) {
    return {
      path: `/${slug(c.title)}`,
      component: DocsFile,
      props: { title: c.title, src: c.file.replace(/^\.\//, "../docs/") }
    };
  }
  if (c.utils) {
    return {
      path: `/${c.title}`,
      component: DocsUtils,
      props: { title: c.title, content: c.content }
    };
  }
};

const menuMap = c => {
  if (c.home) {
    return {
      path: `/`,
      title: 'Home'
    };
  }
  if (c.component) {
    return {
      path: `/${kebabcase(c.component)}`,
      title: kebabcase(c.component)
    };
  }
  if (c.file) {
    return {
      path: `/${slug(c.title)}`,
      title: c.title
    };
  }
  if (c.utils) {
    return {
      path: `/${c.title}`,
      title: c.title
    };
  }
};

const pageRoutes = flatten(fullMenu.map(c => c.items)).map(pageMap);

const menuRoutes = fullMenu.map(m => {
  m.items = m.items.map(menuMap);
  return m;
});

const router = new VueRouter({
  // https://stackoverflow.com/questions/47677220/vuejs-history-mode-with-github-gitlab-pages
  //mode: 'history',
  routes: pageRoutes
});

for (const name in components) {
  Vue.component(name, components[name]);
}
Vue.config.productionTip = false;
Vue.prototype.$global = new Vue({ data: { state: {} } });

Vue.use(VueRouter);

new Vue({
  components: { DocsMenu },
  router,
  data: { menuRoutes, preview: false, theme: 0 },
  methods: {
    ...utils
  },
  computed: {},
  created () {
    // https://stackoverflow.com/questions/47677220/vuejs-history-mode-with-github-gitlab-pages
    console.log(sessionStorage.redirect)
    if (sessionStorage.redirect) {
      const redirect = sessionStorage.redirect
      delete sessionStorage.redirect
      this.$router.push(redirect)
    }
  },
  mounted() {
    Vue.prototype.$global.$on("edit", () => (this.preview = !this.preview));
  },
  template: `
    <f-theme :theme="['light','dark','yellow','blue'][theme]" style="display: flex;">
      <div v-if="get('menu', true)" style="
        min-width: 200px;
        height: 100vh;
        overflow: auto;
        background: var(--background);
        position: sticky;
        top: 0;
      ">
        <f-inline style="margin: var(--base); --inline-justify: space-between">
          <f-colors
            :colors="['lightergray','darkgray','yellow','blue']"
            value="0"
            v-on:value="v => theme = v"
          />
          <a class="quaternary" @click="set('menu', false)"><f-close-icon  /></a>
        </f-inline>
        <docs-menu :items="menuRoutes" />
      </div>
      <div v-if="!get('menu', true)"
        class="closedmenu"
        style="
        min-width: 40px;
        height: 100vh;
        position: sticky;
        top: 0;
        cursor: pointer;
      "
      @click="set('menu', true)"
      >
        <f-inline style="margin-top: var(--base); --inline-gap: 0; --inline-justify: center">
          <a class="quaternary"><f-menu-icon /></a>
        </f-inline>
      </div>
      <router-view
        style="
          --advanced-editor-height: auto;
        "
        :style="{
          '--content-padding': get('preview', false) ? 'calc(var(--base) * 12) calc(var(--base) * 18)' : 'calc(var(--base) * 8) calc(var(--base) * 4)'
        }"
      ></router-view>
    </f-theme>
  `
}).$mount("#fachwerk");
