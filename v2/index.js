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
  template: `
    <f-layout :theme="['light','dark','yellow','blue'][theme]">
      <docs-menu slot="menu" :items="menuRoutes" />
      <router-view
        slot="content"
        style="--advanced-editor-height: auto;"
      ></router-view>
      <f-colors
        slot="topright"
        :colors="['lightergray','darkgray','yellow','blue']"
        value="0"
        v-on:value="v => theme = v"
      />
    </f-layout>
  `
}).$mount("#fachwerk");
