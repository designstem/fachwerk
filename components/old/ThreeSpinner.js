import AnimeData from '../AnimeData.js'
import ThreeGroup from '../ThreeGroup.js'
import { deg2rad } from "../utils.js"

export default {
  components: { AnimeData, ThreeGroup },
  methods: { deg2rad },
  template: `
    <AnimeData :to="deg2rad(360)">
      <ThreeGroup
        slot-scope="{ value }"
        :rotation="{ x: value, y: value, z: value }"
      ><ThreeGroup>
        <slot /></ThreeGroup>
      </ThreeGroup>
    </Anime>
  `
};