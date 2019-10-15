import { Css } from "../../fachwerk.js";

export default {
  mixins: [Css],
  props: ["items", "value"],
  data: () => ({ currentActiveItem: 0 }),
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
          padding: 'var(--base3) var(--base3) var(--base2) var(--base3)',
          fontWeight: 'bold',
          color: 'var(--primary)',
        }"
        @click="currentActiveItem = i;"
        v-html="item.title"
        />
        <router-link
          if="i == currentActiveItem"
          v-for="(item,j) in item.items"
          :key="j"
          :style="{
            display: 'flex',
            alignItems: 'center',
            padding: 'var(--base) var(--base) var(--base) var(--base3)',
            border: 'none',
            fontWeight: 'normal'
          }"
          class="router-link"
          :to="item.path"
        >
          <span v-html="item.title" />
        </router-link>
      </div>
    </div>
  `,
  css: `
    .router-link span {
      border-bottom: 2px solid var(--transparent);
    }
    .router-link-exact-active span {
      color: var(--blue);
      border-bottom: 2px solid var(--blue);
    }
  `
};