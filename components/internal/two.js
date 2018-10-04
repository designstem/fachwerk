const Object2D = {
  props: {
    position: { default: () => ({}) },
    rotation: { default: () => ({}) },
    scale: { default: () => ({}) }
  },
  computed: {
    positionTransform() {
      return `translate(${this.position.x || 0} ${this.position.y || 0})`;
    },
    rotationTransform() {
      return `rotate(${this.rotation.x ||
        this.rotation.y ||
        this.rotation.z ||
        0})`;
    },
    scaleTransform() {
      return `scale(${(this.scale.x || 1, this.scale.y || 1)})`;
    },
    transform() {
      return `${this.positionTransform} ${this.rotationTransform} ${
        this.scaleTransform
      }`;
    }
  }
};

export { Object2D };
