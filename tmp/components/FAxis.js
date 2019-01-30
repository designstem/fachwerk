import { color } from "../../utils.js";

export default {
  props: { innerWidth: { default: 2, type: [Number, String] } },
  methods: { color },
  template: `
    <f-group>
      <f-line
        :points="[[0,0],[innerWidth,0]]"
        :stroke="color('red')"
        stroke-width="2"
        opacity="0.75"
      />
      <f-line
        :points="[[0,0],[-innerWidth,0]]"
        :stroke="color('red')"
        stroke-width="2"
        opacity="0.25"
      />
      <f-line
        :points="[[0,0],[0,innerWidth]]"
        :stroke="color('green')"
        stroke-width="2"
        opacity="0.75"
      />
      <f-line
        :points="[[0,0],[0,-innerWidth]]"
        :stroke="color('green')"
        stroke-width="2"
        opacity="0.25"
      />
    </f-group>
  `
};
