import {
  Css,
  get as getValue,
  set as setValue,
} from "../../../fachwerk.js"
  ;

export default {
  description: `
Displays a checkbox.

<f-checkbox
  v-model="someVariable"
/>
  `,
  mixins: [Css],
  props: {
    value: { default: 0, type: [Number] },
    set: {
      default: "",
      type: [String],
      description: "Key for setting a global value"
    }
  },
  methods: {
    getValue,
    setValue,
  },
  template: `
    <div :style="{display: 'flex', marginLeft: '3px', marginBottom: 'var(--base2)'}">
      <input class="tertiary"
        type="checkbox"
        :checked="getValue(set, 0)"
        v-on:input="e => setValue(set, e.target.checked ? 1 : 0)"
        :style="{
          padding: '0.25rem 0.5rem',
          border: '3px solid var(--primary)',
          borderTopLeftRadius: 'var(--border-radius)',
          borderBottomLeftRadius: 'var(--border-radius)',
          borderTopRightRadius: 'var(--border-radius)',
          borderBottomRightRadius: 'var(--border-radius)',
          color: 'var(--primary)',
          fontWeight: 'bold',
          fontSize: '0.9rem',
          marginLeft: '-3px',
          cursor: 'pointer',
          background: value ? 'var(--tertiary)' : 'none',
          height: '30px',
          width: '30px'
        }"
      />
    </div>
  `
};
