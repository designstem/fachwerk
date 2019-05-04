export default {
  description: `
Vertical menu, to be used with \`v-model\`.

  <f-menu
    v-model="someVariable"
    :items="['First','Second']"
  />
  `,
  props: ["items", "value", "activeItem"],
  data: () => ({ currentActiveItem: 0 }),
  methods: {
    top() {
      window.scrollTo(0, 0);
    }
  },
  mounted() {
    this.$watch(
      "activeItem",
      activeItem => {
        this.currentActiveItem = activeItem;
      },
      { immediate: true }
    );
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
        @click="currentActiveItem = i; $emit('input',[i,0]); top();"
        v-html="item.title"
        >
        </div>
        <div
          v-if="i == currentActiveItem"
          v-for="(item,j) in item.items"
          :key="j"
          :style="{
            display: 'flex',
            alignItems: 'center',
            padding: 'var(--base) var(--base) var(--base) var(--base4)',
            color: i === value[0] && j === value[1] ? 'var(--primary)' : 'var(--primary)',
            background: i === value[0] && j === value[1] ? 'var(--tertiary)' : '',
            opacity: item.disabled ? 0.3 : 1
          }"
          @click="$emit('input',[i,j]); top();"
          v-html="item.title"
        > 
        </div>
      </div>
    </div>
  `
};
