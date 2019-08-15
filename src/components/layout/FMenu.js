import { parseContent, goto, get } from "../../../fachwerk.js";

export default {
  description: `
Displays a navigation menu. It can display inline content as shown here. Also the content can be fetched from local or remote file (using \`src\` prop).

Menu also responds to \`openmenu\` and \`closemenu\` events that trigger menu opening and closing.

<button v-on:click="send('openmenu')">Open menu</button>

<f-menu>

### I am a menu content

<button v-on:click="send('closemenu')">
  Close menu
</button>

</f-menu>

  `,
  props: {
    src: { default: "", type: [String, Array] }
  },
  data: () => ({ open: false }),
  methods: { parseContent, goto, get },
  mounted() {
    this.$global.$on("openmenu", () => (this.open = true));
    this.$global.$on("closemenu", () => (this.open = false));
  },
  template: `
  <f-sidebar
    :open="open"
    orientation="left"
    width="33vw"
    style="
      position: absolute;
      z-index: 100000;
      left: calc(var(--base) * 1.5);
      top: calc(var(--base) * 1.5);
    "
  >
    <a slot="button" class="quaternary" style="padding: 0 4px; cursor: pointer;"><f-menu-icon /></a>
    <f-fetch :src="src" v-slot="{ value: content }">
      <div style="margin-top: calc(var(--base) * -5.5)">
      <a
        href="../"
        class="quaternary"
        style="margin-left: calc(var(--base) * -1)"
      >
        <f-leftarrow-icon />
        Back to projects
      </a>
      <div v-for="(c, i) in parseContent(content).filter(c => c.chapter || c.section)">
        <h4
          v-if="c.chapter"
          style="margin-top: var(--base2)"
        >
          {{ c.chapter }}
        </h4>
        <h5
          v-if="c.section"
          style="display: block; cursor: pointer; padding-left: 1ch; margin: var(--base2) 0 0 0"
          :style="{
            borderLeft: get('section','') == c.section ? '3px solid var(--blue)' : '3px solid var(--transparent)',
            fontWeight: get('section','') == c.section ? 'bold' : 'normal',
          }"
          @click="goto(c.section)"
        >
          {{ c.section }}
        </h5>
      </div>
    </div>
    </f-fetch>
  </f-sidebar>
  `
};
