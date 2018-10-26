import Css from "./Css.js";

export default {
  mixins: [Css],
  template: `
  <transition appear name="fade">
    <p><slot /></p>
  </transition>
  `,
  css: `
  .fade-enter-active {
    transition: all 1s linear;
  }
  .fade-leave-active {
    transition: all 1s linear;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  `
}