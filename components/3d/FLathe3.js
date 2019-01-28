import { Object3D } from "./3d.js";
import { parseCoords } from "../../utils.js"

export default {
  description: `
Description to be written.

<f-scene3>
  <f-grid3 />
  <f-lathe3
    scale="0.5"
    :points="range(-4,4,0.1).map(y => [Math.sin(y),y])"
  />
</f-scene3>
  `,
  mixins: [Object3D],
  props: {
    points: { default: '', type: [String, Number, Array, Object] },
    position: { default: "0 0 0", type: [String, Number, Array, Object] },
    rotation: { default: "0 0 0", type: [String, Number, Array, Object] },
    scale: { default: "1 1 1", type: [String, Number, Array, Object] },
    opacity: { default: 1, type: [Number,String] },
  },
  data() {
    let curObj = this.obj;
    if (!curObj) {
      const points = parseCoords(this.points).map(p => {
        return new THREE.Vector2(...p)
      })
      var geometry = new THREE.LatheGeometry( points );
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

// var points = [];
// for ( var i = 0; i < 10; i ++ ) {
// 	points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 5 ) * 2 ) );
// }
// var geometry = new THREE.LatheGeometry( points );
// var material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
// var lathe = new THREE.Mesh( geometry, material );
// scene.add( lathe );