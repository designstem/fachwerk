import {
  Css,
  get as getValue,
  set as setValue,
  color
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
    value: { default: false, type: [Boolean] },
    set: {
      default: "",
      type: [String],
      description: "Key for setting a global value"
    }
  },
  methods: {
    getValue,
    setValue,
    color,
    onClick() {
      this.setValue(this.set, !this.getValue(this.set, false));
    }
  },
  template: `
    <f-artboard :width="26" :height="26">
      <f-group @click.native="onClick">
        <rect
          :x="2"
          :y="2"
          :width="22"
          :height="22"
          :rx="6"
          :ry="6"
          :fill="color('white')"
          stroke-width="3"
          stroke="var(--primary)"
        />
        <polyline
          v-if="getValue(set, 0)"
          points="6, 12, 12, 18, 19, 8"
          fill="none"
          stroke-width="3"
          :stroke="color('green')"
        />
      </f-group>
    </f-artboard>
  `
};
