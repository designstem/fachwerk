import { send } from "../../utils.js";

export default {
  methods: { send },
  template: `
    <div>
      <f-inline style="
        position: fixed;
        z-index: 100000;
        right: var(--base2);
        bottom: var(--base2);
      ">
        <a title="Alt + ←" class="rounded" @click="send('prev')">←</a>
        <a title="Alt + →" class="rounded" @click="send('next')">→</a>
      </f-inline>
      <f-keyboard alt character="left" @keydown="send('prev')" />
      <f-keyboard alt character="right" @keydown="send('next')" />
    </div>
  `
};
