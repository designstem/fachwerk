import { color } from "../../../fachwerk.js";

export default {
  data: () => ({
    size: 16
  }),
  methods: { color },
  template: `
  <f-artboard :width="size" :height="size">
    <f-line
      :x1="2"
      :y1="size / 2"
      :x2="size - 3"
      :y2="size / 2"
      :stroke="color('primary')"
      stroke-width="2"
    />
    <f-line
      :points="[[size / 2,2],[size - 2,size/2],[size / 2,size - 2]]"
      :stroke="color('primary')"
      stroke-width="2"
    />
  </f-artboard>
  `
};
