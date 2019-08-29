import { parseContent, goto, get, set } from "../../../fachwerk.js";

export default {
  props: {
    src: { default: "", type: [String, Array] },
    title: { default: "", type: String }
  },
  methods: { parseContent, goto, get, set },
  template: `
    <f-fetch :src="src" v-slot="{ value: content }">
      <div>
      <a
        href="../"
        class="quaternary"
        style="margin: var(--base) var(--base) 0 0"
      >
        <f-leftarrow-icon />
        Back to projects
      </a>
      <div v-for="(c, i) in parseContent(content).filter(c => c.chapter || c.section)">
        <h5
          v-if="c.chapter"
          style="
            padding: var(--base) var(--base) var(--base) var(--base2);
            margin: var(--base2) 0 0 0;
          "
        >
          {{ c.chapter }}
        </h5>
        <h5
          style="
            display: block;
            cursor: pointer;
            padding-left: 1ch;
            margin: 0;
            padding: var(--base) var(--base) var(--base) var(--base3)
          "
          :style="{
            background: get('section','') == c.section ? 'var(--lightergray)' : 'var(--transparent)',
            fontWeight: 'normal',
          }"
          @click="set('section', c.section); goto(c.section)"
        >
          {{ c.section }}
        </h5>
      </div>
    </div>
    </f-fetch>
  `
};
