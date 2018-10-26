// Use full URL when in other repo:
// import Css from "https://designstem.github.io/framework/components/Css.js";

import Css from "./Css.js";

export default {
  mixins: [Css],
  description: `Fading transition`,
  example: `
<ButtonsData :buttons="['On', 'Off']">
  <h3 slot-scope="data">
    <fade v-if="!data.value">Fading like a flower</fade>
  </h3>
</ButtonsData>  
  `,
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