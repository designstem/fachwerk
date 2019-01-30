import { color } from "../../utils.js";

export default {
  props: { innerWidth: { default: 2, type: [Number, String] } },
  methods: { color },
  template: `
    <f-group3>
      <f-line3
        :points="[[0,0,0],[innerWidth,0,0]]"
        :stroke="color('red')"
        stroke-width="2"
        opacity="0.75"
      />
      <f-line3
        :points="[[0,0,0],[-innerWidth,0,0]]"
        :stroke="color('red')"
        stroke-width="2"
        opacity="0.3"
      />
      
      <f-line3
      :points="[[0,0,0],[0,innerWidth,0]]"
        :stroke="color('green')"
        stroke-width="2"
        opacity="0.75"
      />
      <f-line3
        :points="[[0,0,0],[0,-innerWidth,0]]"
        :stroke="color('green')"
        stroke-width="2"
        opacity="0.3"
      />
      <f-line3
        :points="[[0,0,0],[0,0,-innerWidth]]"
        :stroke="color('blue')"
        stroke-width="2"
        opacity="0.75"
      />
      <f-line3
        :points="[[0,0,0],[0,0,-innerWidth]]"
        :stroke="color('blue')"
        stroke-width="2"
        opacity="0.3"
      />    
    </f-group3>
  `
};
