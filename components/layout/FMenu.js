
export default {
  description: `
Vertical menu, to be used with \`v-model\`.

  <f-menu
    v-model="someVariable"
    :items="['First','Second']"
  />
  `,
  props: ["items", "value"],
  data: () => ({ activeItem: 0 }),
  methods: {
    top() {
      window.scrollTo(0,0);
    }
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
        @click="activeItem = i;"
        v-html="item.title"
        >
        </div>
        <div
          v-if="i == activeItem"
          v-for="(item,j) in item.items"
          :key="j"
          :style="{
            display: 'flex',
            alignItems: 'center',
            padding: 'var(--base) var(--base) var(--base) var(--base4)',
            color: i === value[0] && j === value[1] ? 'var(--primary)' : 'var(--secondary)',
            background: i === value[0] && j === value[1] ? 'var(--lightblue)' : '',
          }"
          @click="$emit('input',[i,j]); top()"
          v-html="item.title"
        > 
        </div>
      </div>
    </div>
  `
};
