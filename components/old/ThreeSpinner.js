import Anime from './Anime.js'
import ThreeGroup from './ThreeGroup.js'
import { deg2rad } from "../utils.js"

export default {
  components: { Anime, ThreeGroup },
  methods: { deg2rad },
  template: `
    <Anime :to="deg2rad(360)">
      <ThreeGroup
        slot-scope="{ value }"
        :rotation="{ x: value, y: value, z: value }"
      ><ThreeGroup>
        <slot /></ThreeGroup>
      </ThreeGroup>
    </Anime>
  `
};