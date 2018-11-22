export default {
  tag: 'Layout',
  description: `
Tabs, to be used with \`v-model\` and under \`<header>\`.
  `,
  example: `
  <f-tabs
    v-model="someVariable"
    :buttons="['First','Second']"
  />
  `,
  props: ["buttons", "value"],
  template: `
    <div style="
      display: flex;
      height: 3rem;
      borderBottom: 3px solid var(--darkgray);
      overflow: auto;
    ">
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
