import { Object3D } from "./3d.js";

export default {
  example: `
<f-scene3>
  <f-box3 />
</f-scene3>  
  `,
  mixins: [Object3D],
  props: {
    width: { default: 1, type: Number },
    height: { default: 1, type: Number },
    depth: { default: 1, type: Number },
    scale: { default: () => ({}), type: [Object, Number] },
    position: { default: () => ({}), type: Object },
    rotation: { default: () => ({}), type: Object }
  },
  data() {
    let curObj = this.obj;
    if (!curObj) {
      var geometry = new THREE.BoxGeometry(this.width, this.height, this.depth);
      curObj = new THREE.Mesh(
        geometry,
        new THREE.MeshNormalMaterial({
          flatShading: true,
          opacity: 0.8,
          side: THREE.DoubleSide
        })
      );
    }
    curObj.name = curObj.name || curObj.type;
    return { curObj };
  }
};
