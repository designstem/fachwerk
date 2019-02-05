import { send } from "../../../dist/utils.js";

export default {
  description: `
Sets a global pager for slides, shows prev / next buttons and also provides keyboard hotkeys.

<f-pager />

---

## f-pager

> Hey, it worked!

<f-pager />`,
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
