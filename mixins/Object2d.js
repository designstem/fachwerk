import { parseCoords } from "../utils.js";
import {
  positionTransform,
  rotationTransform,
  scaleTransform
} from "../test/utils.js";

export default {
  computed: {
    // positionTransform() {
    //   if (typeof this.position == 'string') {
    //     this.position = this.parseTransform(this.position)[0]
    //   }
    //   return `translate(${this.position.x || 0} ${this.position.y || 0})`;
    // },
    // rotationTransform() {
    //   if (typeof this.rotation == 'string') {
    //     this.rotation = this.parseTransform(this.rotation)[0]
    //   }
    //   return `rotate(${this.rotation.x ||
    //     this.rotation.y ||
    //     this.rotation.z ||
    //     0})`;
    // },
    // scaleTransform() {
    //   if (typeof this.scale == 'string') {
    //     this.scale = this.parseTransform(this.scale)[0]
    //   }
    //   return `scale(${(this.scale.x || 1, this.scale.y || this.scale.x || 1)})`;
    // },
    transform() {
      return `${positionTransform(this.position)} ${rotationTransform(
        this.rotation
      )}`;
    }
  }
};

// rotate(45deg)