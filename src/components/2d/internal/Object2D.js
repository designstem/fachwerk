import {
  positionTransform,
  rotationTransform,
  scaleTransform
} from "../../../../fachwerk.js";

export default {
  computed: {
    transform() {
      return `${positionTransform(this.position)} ${rotationTransform(
        this.rotation
      )} ${scaleTransform(this.scale)}`;
    },
  },
  inject: { svgScale: { default: () => 1 }, groupScale: { default: () => 1 } }
};
