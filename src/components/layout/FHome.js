import { send } from "../../../fachwerk.js";

export default {
  description: `
Button that takes you back to previous URL directory level

<f-home />
  `,
  props: {
    title: { default: '↖', type: String },
    src: { default: '..', type: String }
  },
  methods: { send },
  template: `
    <div
      class="buttons"
      style="
        position: fixed;
        z-index: 100000;
        left: var(--base3);
        bottom: var(--base3);
      "
    >
      <a
        :href="src"
        class="button_tertiary"
      >
        {{ title }}
      </a>
      <a @click="send('first')" class="button_tertiary">Start</a>
    </div>
  `
}