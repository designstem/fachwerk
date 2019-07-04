import { THREE, color, range } from "../../../fachwerk.js";
import Object3D from "./internal/Object3D.js";

const InternalBox3 = {
  mixins: [Object3D],
  props: {
    width: { default: 1, type: [String, Number] },
    height: { default: 1, type: [String, Number] },
    depth: { default: 1, type: [String, Number] },
    r: { default: "", type: [Number, String] },
    stroke: { default: "", type: String },
    strokeWidth: { default: 3, type: [String, Number] },
    fill: { default: "", type: String },
    scale: { default: "1 1 1", type: [String, Number, Array, Object] },
    position: { default: "0 0 0", type: [String, Number, Array, Object] },
    rotation: { default: "0 0 0", type: [String, Number, Array, Object] },
    opacity: { default: 1, type: [Number, String] },
    shading: { default: true, type: Boolean }
  },
  data() {
    let curObj = this.obj;
    if (!curObj) {
      var geometry = new THREE.BoxGeometry(
        this.r ? this.r * 2 : this.width,
        this.r ? this.r * 2 : this.height,
        this.r ? this.r * 2 : this.depth
      );
      curObj = new THREE.Mesh(
        geometry,
        this.shading
          ? new THREE.MeshNormalMaterial({
              opacity: this.opacity,
              side: THREE.DoubleSide
            })
          : new THREE.MeshLambertMaterial({
              transparent: true,
              color:
                this.fill == "color('primary')" ? color("primary") : this.fill,
              opacity: this.opacity,
              side: THREE.DoubleSide
            })
      );
    }
    curObj.name = curObj.name || curObj.type;
    return { curObj };
  }
};

export default {
  components: { InternalBox3 },
  description: `
Displays a 3D box.

<f-scene3>
  <f-rotation3>
    <f-grid3 />
    <f-box3 :stroke="color('red')" fill />
  </f-rotation3>
</f-scene3>  
  `,
  mixins: [Object3D],
  props: {
    width: { default: 1, type: [Number, String] },
    height: { default: 1, type: [Number, String] },
    depth: { default: 1, type: [Number, String] },
    r: { default: "", type: [Number, String] },
    stroke: { default: "", type: String },
    strokeWidth: { default: 3, type: [String, Number] },
    fill: { default: "color('primary')", type: String },
    scale: { default: "1 1 1", type: [String, Number, Array, Object] },
    position: { default: "0 0 0", type: [String, Number, Array, Object] },
    rotation: { default: "0 0 0", type: [String, Number, Array, Object] },
    opacity: { default: 1, type: [Number, String] },
    shading: { default: true, type: Boolean }
  },
  computed: {
    frontfacePoints() {
      return [
        [
          this.r ? this.r : this.width / 2,
          this.r ? this.r : this.height / 2,
          this.r ? this.r : this.depth / 2
        ],
        [
          this.r ? this.r : this.width / 2,
          this.r ? -this.r : this.height / -2,
          this.r ? this.r : this.depth / 2
        ],
        [
          this.r ? -this.r : this.width / -2,
          this.r ? -this.r : this.height / -2,
          this.r ? this.r : this.depth / 2
        ],
        [
          this.r ? -this.r : this.width / -2,
          this.r ? this.r : this.height / 2,
          this.r ? this.r : this.depth / 2
        ],
        [
          this.r ? this.r : this.width / 2,
          this.r ? this.r : this.height / 2,
          this.r ? this.r : this.depth / 2
        ]
      ];
    },
    backfacePoints() {
      return [
        [
          this.r ? this.r : this.width / 2,
          this.r ? this.r : this.height / 2,
          this.r ? -this.r : this.depth / -2
        ],
        [
          this.r ? this.r : this.width / 2,
          this.r ? -this.r : this.height / -2,
          this.r ? -this.r : this.depth / -2
        ],
        [
          this.r ? -this.r : this.width / -2,
          this.r ? -this.r : this.height / -2,
          this.r ? -this.r : this.depth / -2
        ],
        [
          this.r ? -this.r : this.width / -2,
          this.r ? this.r : this.height / 2,
          this.r ? -this.r : this.depth / -2
        ],
        [
          this.r ? this.r : this.width / 2,
          this.r ? this.r : this.height / 2,
          this.r ? -this.r : this.depth / -2
        ]
      ];
    },
    connectorPoints() {
      return range(0, 3).map(i => [
        this.frontfacePoints[i],
        this.backfacePoints[i]
      ]);
    }
  },
  template: `
    <f-group3
      :position="position"
      :rotation="rotation"
      :scale="scale"
    >
      <f-group3 v-if="stroke">
        <f-line3
          :points="frontfacePoints"
          :stroke="stroke"
          :stroke-with="strokeWidth"
        />
        <f-line3
          :points="backfacePoints"
          :stroke="stroke"
          :stroke-with="strokeWidth"
        />
        <f-line3
          v-for="(points,i) in connectorPoints"
          :key="i"
          :stroke="stroke"
          :points="points"
          :stroke-with="strokeWidth"
        />
      </f-group3>
      <InternalBox3
        v-if="fill" 
        :width="width"
        :height="height"
        :depth="depth"
        :r="r"
        :shading="shading"
        :fill="fill"
        :opacity="opacity"
      />
    </f-group3>
  `
};
