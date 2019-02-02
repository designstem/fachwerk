import { deg2rad } from "../../../utils.js";
export default {
  computed: {
    path() {
      return d3
        .arc()
        .innerRadius(0.5)
        .outerRadius(1)
        .startAngle(deg2rad(0))
        .endAngle(deg2rad(180))
        .padAngle(deg2rad(10))
        .cornerRadius(0.1)
        ();
    }
  },
  template: `
    <f-group>
      <path :d="path" fill="var(--primary)" />
    </f-group>
  `
};
