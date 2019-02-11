import { Css } from '../../mixins.js'

export default {
  mixins: [Css],
  description: `
Bounce transition

<f-buttons :buttons="['On', 'Off']">
  <h3 slot-scope="data">
    <f-bounce v-if="!data.value">Bounce like a butterfly</f-bounce>
  </h3>
</f-buttons>  
  `,
  template: `
  <transition appear name="bounce">
    <div><slot /></div>
  </transition>
  `,
  css: `
  .bounce-enter-active {
    animation: bounce-in .4s;
  }
  .bounce-leave-active {
    animation: bounce-in .4s reverse;
  }
  .bounce-enter, .bounce-leave-to {
    transform: scale(0);
  }
  
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
  
  `
}