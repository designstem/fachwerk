// Use full URL when in other repo:
// import Css from "https://designstem.github.io/framework/components/Css.js";

import Css from "./Css.js";

export default {
  mixins: [Css],
  description: `Bounce transition`,
  example: `
<ButtonsData :buttons="['On', 'Off']">
  <h3 slot-scope="data">
    <bounce v-if="!data.value">Bounce like a butterfly</bounce>
  </h3>
</ButtonsData>  
  `,
  template: `
  <transition appear name="bounce">
    <p><slot /></p>
  </transition>
  `,
  css: `
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  .bounce-enter, .bounce-leave-to {
    transform: scale(0);
  }
  
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  
  `
}