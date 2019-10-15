import {
  Vue,
  VueRouter,
  components,
  utils,
  flatten,
  titlecase,
  kebabcase,
  slug,
  Css
} from "../fachwerk.js";

import DocsHeader from "./components/DocsHeader.js";

import DocsComponent from "./components/DocsComponent.js";
import DocsFile from "./components/DocsFile.js";
import DocsUtils from "./components/DocsUtils.js";
import DocsMenu from "./components/DocsMenu.js";

import menu from "./menu.js";

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
      props: { title: c.title, src: c.file/*.replace(/^\.\//, "../docs/")*/ }
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
  mixins: [Css],
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
      rootSrc=".."
      docsSrc="."
      class="docs-header"
    />
    <div class="docs-body">
      <docs-menu
        :items="menuRoutes"
        class="docs-menu"
      />
      <router-view
        class="docs-router"
      ></router-view>
    </div>
  </div>
  `,
  css: `
  .docs-header {
    position: sticky;
    top: 0;
    z-index: 1000;
  }
  @media (max-width: 800px) {
    .docs-header {
      position: static;
    }
  }
  .docs-main {
    display: flex;
  }
  @media (max-width: 800px) {
    .docs-main {
      display: block;
    }
  }
  .docs-menu {
    position: sticky;
    height: 100vh;
    width: 250px;
    top: 0px;
    overflow-y: auto;
    box-shadow: 5px 0 10px rgba(0,0,0,0.05);
    z-index: 500;
    background: white;
  }
  @media (max-width: 800px) {
    .docs-menu {
      position: static;
      height: 33vh;
      width: 100%;
    }
  }
  .docs-router {
    flex: 1;
    width: 100%;
  }
  `

}).$mount("#fachwerk");
