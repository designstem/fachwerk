
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
          padding: 'var(--base2) var(--base2)',
          fontWeight: 'bold',
          color: 'var(--primary)',
        }">
        {{ item.title }}
        </div>
        <div
          v-for="(item,j) in item.items"
          :key="j"
          :style="{
            display: 'flex',
            alignItems: 'center',
            padding: 'var(--base) var(--base) var(--base) var(--base4)',
            color: i === value[0] && j === value[1] ? 'var(--primary)' : 'var(--secondary)',
            background: i === value[0] && j === value[1] ? 'var(--lightblue)' : '',
            transform: 'translate(0,calc(var(--base) * -1))',
          }"
          @click="$emit('input',[i,j])"
        > 
          {{ item.title }}
        </div>
      </div>
    </div>
  `
};
