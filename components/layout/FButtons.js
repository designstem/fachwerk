import { get as getValue, set as setValue, makeNumber } from '../../utils.js';

export default {
  description: `
Description to be written.

<f-buttons
  v-model="someVariable"
  :buttons="['First','Second']"
/>
  `,
  props: {
    buttons: { default: [], type: Array },
    value: { default: 0, type: Number },
    set: {
      default: "",
      type: [String],
      description: "Key for setting a global value"
    }
  },
  methods: {
    handleClick(i) {
      this.$emit('input',i);
      this.$emit('value',i);
      // if (this.set) {
      //   setValue(this.set, i)
      // }
    },
    setValue
  },
  template: `
    <div :style="{display: 'flex', marginLeft: '3px'}">
      <div
        v-for="(button,i) in buttons"
        :key="i"
        @click="$emit('input',i); $emit('value',i); if (set) { setValue(set, i) }"
        :style="{
          padding: '0.25rem 0.5rem',
          border: '3px solid var(--primary)',
          borderTopLeftRadius: i == 0 && 'var(--border-radius)',
          borderBottomLeftRadius: i == 0 && 'var(--border-radius)',
          borderTopRightRadius: i == buttons.length - 1 && 'var(--border-radius)',
          borderBottomRightRadius: i == buttons.length - 1 && 'var(--border-radius)',
          color: i === value ? 'var(--primary)' : 'var(--primary)',
          fontWeight: 'bold',
          fontSize: '0.9rem',
          marginLeft: '-3px',
          cursor: 'pointer',
          background: i === value ? 'var(--tertiary)' : 'none',
        }"
        v-html="button"
      />
    </div>
  `
};
