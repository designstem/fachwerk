import { color } from "../../../fachwerk.js"
;

export default {
  description: `
Displays \`x y z\` axis.
  
<f-scene3>
  <f-rotation3>
    <f-grid3 />
    <f-axis3 />
  </f-rotation3>
</f-scene3>
  `,
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
        opacity="0.5"
      />    
    </f-group3>
  `
};
