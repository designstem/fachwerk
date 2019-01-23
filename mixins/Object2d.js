import { parseCoords, scale } from "../utils.js";
import {
  positionTransform,
  rotationTransform,
  scaleTransform
} from "../test/utils.js";

export default {
  computed: {
    transform() {
      return `${positionTransform(this.position)} ${rotationTransform(
        this.rotation
      )} ${scaleTransform(this.scale)}`;
    }
  }
};
