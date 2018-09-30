import { Renderer, Scene, Camera } from './internal/three.js'

import Css from "../mixins/Css.js";

export default {
  mixins: [Css],
  components: { Renderer, Scene, Camera },
  template: `
    <div class="three">
      <Renderer :size="{ w: 200, h: 200 }">
        <Scene>
          <Camera :position="{ z: 2 }" />
          <slot />
        </Scene>
      </Renderer>
    </div>
  `,
  css: `
    .three svg path {
      stroke-width: 3;
      stroke: rgba(0,0,0,0.8);
      stroke-linecap: round;
      stroke-linejoin: round;
      fill: 0.4;
    }
  `
};