import { parseContent, goto, get } from "../../../fachwerk.js";

export default {
  props: {
    src: { default: "", type: [String, Array] }
  },
  methods: { parseContent, goto, get },
  template: `
    <f-fetch :src="src" v-slot="{ value: content }">
      <div style="padding: var(--base2);">
      <a
        href="../"
        class="quaternary"
        style="margin-left: calc(var(--base) * -1)"
      >
        <f-leftarrow-icon />
        Back to projects
      </a>
      <div v-for="(c, i) in parseContent(content).filter(c => c.chapter || c.section)">
        <h5
          v-if="c.chapter"
          style="margin-top: var(--base2)"
        >
          {{ c.chapter }}
        </h5>
        <h5
          v-if="c.section"
          style="display: block; cursor: pointer; padding-left: 1ch; margin: var(--base) 0 0 0"
          :style="{
            borderLeft: get('section','') == c.section ? 'var(--border-width) solid var(--blue)' : 'var(--border-width) solid var(--transparent)',
            fontWeight: get('section','') == c.section ? 'bold' : 'normal',
          }"
          @click="goto(c.section)"
        >
          {{ c.section }}
        </h5>
      </div>
    </div>
    </f-fetch>
  `
};
