import { send } from "../../../fachwerk.js"
;

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
      <div
        style="
          position: fixed;
          z-index: 100000;
          right: var(--base2);
          bottom: var(--base2);
        "
        class="buttons"
      >
        <div class="button_tertiary" title="Alt + ←" @click="send('prev')">←</div>
        <div class="button_tertiary" title="Alt + →" @click="send('next')">→</div>
      </div>
      <f-keyboard alt character="left" @keydown="send('prev')" />
      <f-keyboard alt character="right" @keydown="send('next')" />
    </div>
  `
};
