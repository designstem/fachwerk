import { send, get } from "../../../fachwerk.js";

export default {
  description: `
Sets a global pager for slides, shows prev / next buttons and also provides keyboard hotkeys.

<f-pager />
`,
  methods: { send, get },
  template: `
    <div>
      <f-inline
        style="
          position: absolute;
          z-index: 10000;
          right: calc(var(--base) * 1.5);
          top: 12px;
          cursor: pointer;
        "
      >
        <a class="quaternary" style="padding: 0 4px" @click="send('prev')" ><f-leftarrow-icon /></a>
        <a class="quaternary" style="padding: 0 4px" @click="send('next')" ><f-rightarrow-icon /></a>
      </f-inline>
      <f-keyboard alt character="left" @keydown="send('prev')" />
      <f-keyboard alt character="right" @keydown="send('next')" />
      <f-keyboard v-if="get('preview')" character="left" @keydown="send('prev')" />
      <f-keyboard v-if="get('preview')" character="right" @keydown="send('next')" />
    </div>
  `
};
