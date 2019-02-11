import { Css } from '../../mixins.js'

export default {
  mixins: [Css],
  description: `
Fading transition

<f-buttons :buttons="['On', 'Off']">
  <h3 slot-scope="data">
    <f-fade v-if="!data.value">Fading like a flower</f-fade>
  </h3>
</f-buttons>  
  `,
  template: `
  <transition appear name="fade">
    <div><slot /></div>
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