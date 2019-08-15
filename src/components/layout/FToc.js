import { parseContent, goto, get } from "../../../fachwerk.js";

export default {
  props: {
      src: { default: "", type: [String,Array] },
    },
  methods: { parseContent, goto, get },
  template: `
  <f-fetch :src="src" v-slot="{ value: content }">
    <div>
    <h4
      style="display: block; cursor: pointer; padding-left: 1ch;"
      :style="{ borderLeft: get('section','') == c.section ? '3px solid var(--blue)' : '3px solid var(--transparent)'}"
      v-for="(c, i) in parseContent(content).filter(c => c.section)"
      @click="goto(c.section)"
    >
      {{ c.section }}
    </h4>
  </div>
  </f-fetch>
  `
}