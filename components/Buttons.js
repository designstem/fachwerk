export default {
  props: ["buttons", "value"],
  template: `
    <div :style="{display: 'flex', marginLeft: '3px'}">
      <div
        v-for="(button,i) in buttons"
        :key="i"
        @click="$emit('input',i)"
        :style="{
          padding: '0.25rem 0.5rem',
          border: '3px solid var(--color-gray-dark)',
          borderTopLeftRadius: i == 0 && 'var(--border-radius)',
          borderBottomLeftRadius: i == 0 && 'var(--border-radius)',
          borderTopRightRadius: i == buttons.length - 1 && 'var(--border-radius)',
          borderBottomRightRadius: i == buttons.length - 1 && 'var(--border-radius)',
          color: 'var(--color-gray-dark)',
          fontWeight: 'bold',
          fontSize: '0.9rem',
          marginLeft: '-3px',
          cursor: 'pointer',
          background: i === value ? 'var(--color-gray-medium)' : ''
        }"
      >
        {{ button }}
      </div>
    </div>
  `
};
