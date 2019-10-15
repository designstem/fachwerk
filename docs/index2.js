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

import DocsHeader from "./components/DocsHeader.js";

import DocsComponent2 from "./components/DocsComponent2.js";
import DocsFile2 from "./components/DocsFile2.js";
import DocsUtils2 from "./components/DocsUtils2.js";
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
      component: DocsFile2,
      props: { title: c.title, src: c.file }
    };
  }
  if (c.component) {
    return {
      path: `/${kebabcase(c.component)}`,
      component: DocsComponent2,
      props: { title: c.component, c: components[c.component] }
    };
  }
  if (c.file) {
    return {
      path: `/${slug(c.title)}`,
      component: DocsFile2,
      props: { title: c.title, src: c.file/*.replace(/^\.\//, "../docs/")*/ }
    };
  }
  if (c.utils) {
    return {
      path: `/${c.title}`,
      component: DocsUtils2,
      props: { title: c.title, content: c.content }
    };
  }
};

const menuMap = c => {
  if (c.home) {
    return {
      path: `/`,
      title: c.title
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
  routes: pageRoutes
});

for (const name in components) {
  Vue.component(name, components[name]);
}
Vue.config.productionTip = false;
Vue.prototype.$global = new Vue({ data: { state: {} } });

Vue.use(VueRouter);

new Vue({
  components: { DocsMenu, DocsHeader },
  router,
  data: { menuRoutes, preview: false, theme: 0 },
  methods: {
    ...utils
  },
  computed: {},
  template: `
    <div>
    <docs-header
      style="
        position: sticky;
        top: 0;
        z-index: 1000;
      "
    />
    <div style="display: flex; --cols: auto 1fr; --gap: 0;">
      <docs-menu
        :items="menuRoutes"
        style="
          position: sticky;
          width: 250px;
          height: 100vh;
          top: 0px;
          overflow-y: auto;
          box-shadow: 5px 0 10px rgba(0,0,0,0.05);
        "
      />
      <router-view style="width: 100%;"></router-view>
    </div>
</div>
  `
}).$mount("#fachwerk");
