
export default {
  tag: 'Layout',
  description: `
Vertical menu, to be used with \`v-model\`.
  `,
  example: `
  <f-menu
    v-model="someVariable"
    :items="['First','Second']"
  />
  `,
  props: ["items", "value"],
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
          padding: '0 var(--base2)',
          fontWeight: 'bold',
          minHeight: 'calc(var(--base) * 8)',
          color: 'var(--primary)',
        }">
        {{ item.title || item }}
        </div>
        <div
          v-for="(item,j) in (item.items || [])"
          :key="j"
          :style="{
            display: 'flex',
            alignItems: 'center',
            padding: '0 var(--base) 0 var(--base4)',
            minHeight: 'calc(var(--base) * 4)',
            color: j === value ? 'var(--primary)' : 'var(--secondary)',
            background: j === value ? 'var(--lightblue)' : '',
            transform: 'translate(0,calc(var(--base) * -1))',
          }"
          @click="$emit('input',j)"
        > 
          {{ item }}
        </div>
      </div>
    </div>
  `
};
