import {  positionTransform,
  rotationTransform,
  scaleTransform } from "../utils.js";

export default {
  computed: {
    transform() {
      return `${positionTransform(this.position)} ${rotationTransform(
        this.rotation
      )} ${scaleTransform(this.scale)}`;
    }
  }
};
