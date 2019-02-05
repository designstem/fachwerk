import {
  positionTransform,
  rotationTransform,
  scaleTransform
} from "../../dist/utils.js";

export default {
  computed: {
    transform() {
      return `${positionTransform(this.position)} ${rotationTransform(
        this.rotation
      )} ${scaleTransform(this.scale)}`;
    }
  }
};
