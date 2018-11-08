export default {
  tag: 'Layout',
  description: `
Tabs, meant to be used with <code>v-model</code>.
  `,
  props: ["buttons", "value"],
  template: `
    <div :style="{
      display: 'flex',
      height: '3rem',
      borderBottom: '3px solid var(--darkgray)'
    }">
      <div
        v-for="(button,i) in buttons"
        :key="i"
        @click="$emit('input',i)"
        :style="{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: i == 0 ? '0 1.25rem 0 2rem' : '0 1.25rem',
          fontWeight: 'bold',
          borderRight: '3px solid var(--darkgray)',
          color: 'var(--darkgray)',
          cursor: 'pointer',
          background: i === value ? 'var(--gray)' : 'white'
        }"
      >
        {{ button }}
      </div>
    </div>
  `
};