import { Vue, VueRouter, components, utils, flatten, titleCase } from "../fachwerk.js";

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

const ComponentPage = {
  props: ["title", "content"],
  computed: {
    currentContent() {
      return `# ${this.title}
${this.a}
    `;
    }
  },
  template: `
<f-content-editor :content="currentContent" />
</div>`
};

const FilePage = {
  props: ["title", "src"],
  computed: {
    content() {
      return `# ${this.title}
${this.a}
    `;
    }
  },
  template: `
<f-fetch :src="src" v-slot="{ value: content }">
<f-content-editor :content="content" />
</f-fetch>`
};

const routes = [{ path: "/", component: Hello }];

// https://gist.github.com/mathewbyrne/1280286#gistcomment-2614193

const slug = text => {
  text = text.toString().toLowerCase().trim();

  const sets = [
    {to: 'a', from: '[ÀÁÂÃÄÅÆĀĂĄẠẢẤẦẨẪẬẮẰẲẴẶ]'},
    {to: 'c', from: '[ÇĆĈČ]'},
    {to: 'd', from: '[ÐĎĐÞ]'},
    {to: 'e', from: '[ÈÉÊËĒĔĖĘĚẸẺẼẾỀỂỄỆ]'},
    {to: 'g', from: '[ĜĞĢǴ]'},
    {to: 'h', from: '[ĤḦ]'},
    {to: 'i', from: '[ÌÍÎÏĨĪĮİỈỊ]'},
    {to: 'j', from: '[Ĵ]'},
    {to: 'ij', from: '[Ĳ]'},
    {to: 'k', from: '[Ķ]'},
    {to: 'l', from: '[ĹĻĽŁ]'},
    {to: 'm', from: '[Ḿ]'},
    {to: 'n', from: '[ÑŃŅŇ]'},
    {to: 'o', from: '[ÒÓÔÕÖØŌŎŐỌỎỐỒỔỖỘỚỜỞỠỢǪǬƠ]'},
    {to: 'oe', from: '[Œ]'},
    {to: 'p', from: '[ṕ]'},
    {to: 'r', from: '[ŔŖŘ]'},
    {to: 's', from: '[ßŚŜŞŠ]'},
    {to: 't', from: '[ŢŤ]'},
    {to: 'u', from: '[ÙÚÛÜŨŪŬŮŰŲỤỦỨỪỬỮỰƯ]'},
    {to: 'w', from: '[ẂŴẀẄ]'},
    {to: 'x', from: '[ẍ]'},
    {to: 'y', from: '[ÝŶŸỲỴỶỸ]'},
    {to: 'z', from: '[ŹŻŽ]'},
    {to: '-', from: '[·/_,:;\']'}
  ];

  sets.forEach(set => {
    text = text.replace(new RegExp(set.from,'gi'), set.to)
  });

  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

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
          title: `${titleCase(group)} utilities`,
          //utils: true,
          items: items.map(([title, content]) => ({ title, content, utils: true }))
        };
      });
    })
  )
);

console.log(fullMenu.map)

const menuMap = (c) => {
  if (c.component) {
    return {
      path: `/${c.component}`,
      component: ComponentPage,
      props: { title: c.component, content: components[c.component].description }
    }
  }
  if (c.file) {
    return {
      path: `/${slug(c.title)}`,
      component: FilePage,
      props: { title: c.title, src: c.file.replace('./','../docs/') }
    }
  }
  if (c.utils) {
    return {
      path: `/${c.title}`,
      component: UtilsPage,
      props: { title: c.title, content: c.content }
    }
  }
}

const menuRoutes = menu[3].items.slice(-5).map(menuMap);

const router = new VueRouter({
  // https://stackoverflow.com/questions/47677220/vuejs-history-mode-with-github-gitlab-pages
  //mode: 'history',
  routes: [...routes, ...menuRoutes]
})

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
    <f-theme style="display: flex">
      <section>
        <router-link to="/">Hello</router-link>
        <router-link style="display: block" v-for="route in menuRoutes" :to="route.path" v-html="route.props.title" /> 
      </section>
      <router-view></router-view>
    </f-theme>
  `
}).$mount("#fachwerk");
