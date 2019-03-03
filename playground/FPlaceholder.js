import { utils } from "../../fachwerk.js";

export default {
  methods: { ...utils },
  props: {
  },
  template: `
  <f-scene width="20" height="20">
    <f-circle r="1.7" stroke :fill="color('white')" />
    <f-circle r="1.7" stroke-width="2" />
  </f-scene>
`
};
