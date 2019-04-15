import { Css } from '../../../fachwerk.js'

export default {
  mixins: [Css],
  description: `
Fading transition

<f-buttons :buttons="['On', 'Off']">
  <h3 slot-scope="data">
    <f-fade v-if="!data.value">Fading like a flower</f-fade>
  </h3>
</f-buttons> 

<p />
  `,
  template: `
  <transition appear name="fade">
    <div><slot /></div>
  </transition>
  `,
  css: `
  .fade-enter-active {
    transition: all var(--transition-speed) ease-in;
  }
  .fade-leave-active {
    transition: all var(--transition-speed) ease-out;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  `
}