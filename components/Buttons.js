export default {
  description: `
A button group, meant to be used with <code>v-model</code>.
  `,
  example: `
<Buttons
  v-model="someVariable"
  :buttons="['First','Second']"
/>
  `,
  props: {
    "buttons": { default: [], type: Array },
    "value": { default: 0, type: Number }
  },
  template: `
    <div :style="{display: 'flex', marginLeft: '3px'}">
      <div
        v-for="(button,i) in buttons"
        :key="i"
        @click="$emit('input',i)"
        :style="{
          padding: '0.25rem 0.5rem',
          border: '3px solid var(--primary)',
          borderTopLeftRadius: i == 0 && 'var(--border-radius)',
          borderBottomLeftRadius: i == 0 && 'var(--border-radius)',
          borderTopRightRadius: i == buttons.length - 1 && 'var(--border-radius)',
          borderBottomRightRadius: i == buttons.length - 1 && 'var(--border-radius)',
          color: i === value ? 'var(--primary)' : 'var(--secondary)',
          fontWeight: 'bold',
          fontSize: '0.9rem',
          marginLeft: '-3px',
          cursor: 'pointer',
          background: i === value ? 'var(--tertiary)' : 'none'
        }"
      >
        {{ button }}
      </div>
    </div>
  `
};
