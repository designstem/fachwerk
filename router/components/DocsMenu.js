export default {
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