
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
        @click="$emit('input',i)"
        :style="{
          display: 'flex',
          alignItems: 'center',
          padding: '0 1.25rem',
          fontWeight: 'bold',
          borderBottom: '3px solid var(--primary)',
          cursor: 'pointer',
          color: i === value ? 'var(--primary)' : 'var(--primary)',
          background: i === value ? 'var(--tertiary)' : 'none',
          height: 'calc(var(--base) * 8)'
        }"
      >
        {{ item }}
      </div>
    </div>
  `
};
