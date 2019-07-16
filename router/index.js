import { Vue, VueRouter, components, utils, flatten, titleCase } from "../fachwerk.js";

import menu from "../docs/menu.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

Vue.config.productionTip = false;
Vue.prototype.$global = new Vue({ data: { state: {} } });

const DocsMenu = {
  description: `
Vertical menu, to be used with \`v-model\`.

  <f-menu
    v-model="someVariable"
    :items="['First','Second']"
  />
  `,
  props: ["items", "value"],
  data: () => ({ currentActiveItem: 0 }),
  methods: {
    top() {
      window.scrollTo(0, 0);
    }
  },
  mounted() {
    // this.$watch(
    //   "activeItem",
    //   activeItem => {
    //     this.currentActiveItem = activeItem;
    //   },
    //   { immediate: true }
    // );
  },
  template: `
    <div>
      <div
        v-for="(item,i) in items"
        :key="i"
        :style="{
          cursor: 'pointer',
        }"
      >
        <div :style="{
          display: 'flex',
          alignItems: 'center',
          padding: 'var(--base2) var(--base2) var(--base) var(--base2)',
          fontWeight: 'bold',
          color: 'var(--primary)',
          transform: 'translate(0,calc(var(--base) * 0))',
        }"
        @click="currentActiveItem = i; top();"
        v-html="item.title"
        />
        <router-link
          if="i == currentActiveItem"
          v-for="(item,j) in item.items"
          :key="j"
          :style="{
            display: 'flex',
            alignItems: 'center',
            padding: 'var(--base) var(--base) var(--base) var(--base4)',
            border: 'none',
            fontWeight: 'normal'
          }"
          :to="item.path"
          v-html="item.title"
        /> 
      </div>
    </div>
  `
};

const DocsFrontpage = {
  props: ["a"],
  template: `
<div>
  <f-content content="# Hello" />
</div>
`
};

const DocsComponent = {
  props: ["title", "content"],
  computed: {
    currentContent() {
      return `# ${this.title}
${this.content}
    `;
    }
  },
  template: `
<f-content-editor :content="currentContent" />
</div>`
};

const DocsFile = {
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

const DocsUtils = {
  props: ["title", "content"],
  computed: {
    currentContent() {
      return `# ${this.title}
${this.content}
    `;
    }
  },
  template: `
<f-content-editor :content="currentContent" />
</div>`
};

const routes = [{ path: "/", component: DocsFrontpage }];

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

const menuMap = (c) => {
  if (c.component) {
    return {
      path: `/${c.component}`,
      component: DocsComponent,
      title: c.component,
      props: { title: c.component, content: components[c.component].description }
    }
  }
  if (c.file) {
    return {
      path: `/${slug(c.title)}`,
      component: DocsFile,
      title: c.title,
      props: { title: c.title, src: c.file.replace(/^\.\//,'../docs/') }
    }
  }
  if (c.utils) {
    return {
      path: `/${c.title}`,
      component: DocsUtils,
      title: c.title,
      props: { title: c.title, content: c.content }
    }
  }
}

const pageRoutes = flatten(fullMenu.map(c => c.items)).map(menuMap)

const menuRoutes = fullMenu.map(m => {
  m.items = m.items.map(menuMap)
  return m
})

const router = new VueRouter({
  // https://stackoverflow.com/questions/47677220/vuejs-history-mode-with-github-gitlab-pages
  //mode: 'history',
  routes: [...routes, ...pageRoutes]
})

Vue.use(VueRouter);

new Vue({
  //el: "#fachwerk",
  components: { DocsMenu },
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
      <docs-menu :items="menuRoutes" />
      <!--section>
        <router-link to="/">Hello</router-link>
        <router-link style="display: block" v-for="route in menuRoutes" :to="route.path" v-html="route.props.title" /> 
      </section-->
      <router-view></router-view>
    </f-theme>
  `
}).$mount("#fachwerk");
