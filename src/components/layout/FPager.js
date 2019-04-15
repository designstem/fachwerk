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
      <f-inline
        style="
          position: fixed;
          z-index: 100000;
          right: calc(var(--base) * 1.5);
          top: 10px;
          cursor: pointer;
        "
      >
        <a class="quaternary" style="padding: 0 4px" @click="send('prev')" ><f-leftarrow-icon /></a>
        <a class="quaternary" style="padding: 0 4px" @click="send('next')" ><f-rightarrow-icon /></a>
      </f-inline>
      <f-keyboard alt character="left" @keydown="send('prev')" />
      <f-keyboard alt character="right" @keydown="send('next')" />
    </div>
  `
};
