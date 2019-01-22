import { deg2rad, parseCoords } from "../../utils.js";
import { positionTransform3,rotationTransform3, scaleTransform3 } from '../../test/utils.js';

const Base = {
  inject: ["_baseUrl"],
  props: {
    baseUrl: {
      type: String,
      default() {
        return this._baseUrl;
      }
    }
  },
  provide() {
    return {
      _baseUrl: this.baseUrl
    };
  },
  methods: {
    dispatchEvent(name, detail, options = {}) {
      let e = new CustomEvent(name, Object.assign(options, {
        detail,
        bubbles: true,
        cancelable: true,
      }));
      return this.$el.dispatchEvent(e);
    }
  },
  template: `
    <div><slot/></div>
  `
};

const Object3D = {
  mixins: [Base],
  provide() {
    return {
      parentObj: this.curObj
    };
  },
  inject: ["parentObj"],
  props: {
    name: { type: String },
    type: { type: String, default: "Object3D" },
    obj: { type: Object },
    scale: { type: [Object, Number,Array,String] },
    position: { type: [Object,Array,String] },
    rotation: { type: [Object,Array,String] }
  },
  watch: {
    scale: {
      deep: true,
      handler(v) {
        this.setScale(v);
      }
    },
    position: {
      deep: true,
      handler(v) {
        Object.assign(this.curObj.position, v);
      }
    },
    rotation: {
      deep: true,
      handler(v) {
        const degV = {
          x: v.x ? deg2rad(v.x) : 0,
          y: v.y ? deg2rad(v.y) : 0,
          z: v.z ? deg2rad(v.z) : 0
        }
        Object.assign(this.curObj.rotation, degV);
        //Object.assign(this.curObj.rotation, v)
      }
    },
    obj(obj) {
      this.curObj = obj;
    },
    curObj(obj, oldObj) {
      this.unsetObj(oldObj);
      this.setObj(obj);
    }
  },
  data() {
    let curObj = this.obj;
    if (!curObj) {
      curObj = new THREE[this.type]();
    }
    return { curObj };
  },
  mounted() {
    this.setObj(this.curObj);
  },
  beforeDestroy() {
    this.unsetObj(this.curObj);
  },
  methods: {
    setObj(obj) {
      obj.name = this.name || obj.name || obj.type;
      Object.assign(obj.position, positionTransform3(this.position));
      this.setScale(scaleTransform3(this.scale));
      Object.assign(obj.position, positionTransform3(this.position));
      Object.assign(obj.rotation, rotationTransform3(this.rotation));
      if (this.parentObj) {
        this.parentObj.add(obj);
      }
      this.$emit("update:obj", obj);
    },
    unsetObj(obj) {
      this.$emit("update:obj", null);
      if (this.parentObj) {
        this.parentObj.remove(obj);
      }
    },
    setScale(v) {
      if (v && typeof v === "number") {
        v = { x: v, y: v, z: v };
      }
      Object.assign(this.curObj.scale, v);
    }
  }
};

const Scene = {
  mixins: [Object3D],
  inject: ["global"],
  props: {
    obj: { type: Object }
  },
  data() {
    let curObj = this.obj;
    if (!curObj) {
      curObj = new THREE.Scene();
    }
    curObj.name = curObj.name || curObj.type;
    return { curObj };
  },
  mounted() {
    let scene = this.curObj;
    this.global.scene = scene;
    window.scene = scene;
  }
};

const Renderer = {
  provide() {
    return {
      parentObj: null,
      _baseUrl: null,
      global: this.global
    };
  },
  props: {
    size: {
      type: Object,
      required: true
    },
    obj: { type: Object },
    background: { type: String, default: '#ffffff'}
  },
  data() {
    let curObj = this.obj;
    if (!curObj) {
      curObj = new THREE.SVGRenderer({ antialias: true });
      //curObj = new THREE.WebGLRenderer({ antialias: true });
      curObj.setClearColor(this.background);
    }
    curObj.name = curObj.name || curObj.type;
    curObj.setSize(this.size.w, this.size.h);
    // fixme: better solution for global vars
    let global = {};
    global.rendererSize = this.size;
    global.rendererDom = curObj.domElement;
    return { curObj, global };
  },
  mounted() {
    this.$refs.container.appendChild(this.curObj.domElement);
    this.animate();
  },
  methods: {
    animate() {
      requestAnimationFrame(this.animate);
      this.curObj.render(this.global.scene, this.global.camera);
    }
  },
  template: `
  <div>
    <slot></slot>
    <div ref="container"></div>
  </div>
  `
};

const Camera = {
  mixins: [Object3D],
  inject: ["global"],
  props: {
    obj: { type: Object }
  },
  data() {
    let curObj = this.obj;
    const { w, h } = this.global.rendererSize;
    if (!curObj) {
      curObj = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
    }
    curObj.name = curObj.name || curObj.type;
    return { curObj };
  },
  mounted() {
    this.global.camera = this.curObj;
  }
};

const generateSTL = scene => {
  var vector = new THREE.Vector3();
  var normalMatrixWorld = new THREE.Matrix3();

  var output = "";

  output += "solid exported\n";

  scene.traverse(function(object) {
    if (object instanceof THREE.Mesh) {
      // if object is hidden - exit
      if (object.visible == false) return;

      var geometry = object.geometry;
      var matrixWorld = object.matrixWorld;
      var mesh = object;

      if (geometry instanceof THREE.BufferGeometry)
        geometry = new THREE.Geometry().fromBufferGeometry(geometry);

      if (geometry instanceof THREE.Geometry) {
        var vertices = geometry.vertices;
        var faces = geometry.faces;

        normalMatrixWorld.getNormalMatrix(matrixWorld);

        if (typeof faces != "undefined") {
          for (var i = 0, l = faces.length; i < l; i++) {
            var face = faces[i];

            vector
              .copy(face.normal)
              .applyMatrix3(normalMatrixWorld)
              .normalize();

            output +=
              "\tfacet normal " +
              vector.x +
              " " +
              vector.y +
              " " +
              vector.z +
              "\n";
            output += "\t\touter loop\n";

            var indices = [face.a, face.b, face.c];

            for (var j = 0; j < 3; j++) {
              var vertexIndex = indices[j];
              if (
                typeof geometry.skinIndices !== "undefined" &&
                geometry.skinIndices.length == 0
              ) {
                vector.copy(vertices[vertexIndex]).applyMatrix4(matrixWorld);
                output +=
                  "\t\t\tvertex " +
                  vector.x +
                  " " +
                  vector.y +
                  " " +
                  vector.z +
                  "\n";
              } else {
                vector.copy(vertices[vertexIndex]); //.applyMatrix4( matrixWorld );

                // see https://github.com/mrdoob/three.js/issues/3187
                var boneIndices = [
                  geometry.skinIndices[vertexIndex].x,
                  geometry.skinIndices[vertexIndex].y,
                  geometry.skinIndices[vertexIndex].z,
                  geometry.skinIndices[vertexIndex].w
                ];

                var weights = [
                  geometry.skinWeights[vertexIndex].x,
                  geometry.skinWeights[vertexIndex].y,
                  geometry.skinWeights[vertexIndex].z,
                  geometry.skinWeights[vertexIndex].w
                ];

                var inverses = [
                  skeleton.boneInverses[boneIndices[0]],
                  skeleton.boneInverses[boneIndices[1]],
                  skeleton.boneInverses[boneIndices[2]],
                  skeleton.boneInverses[boneIndices[3]]
                ];

                var skinMatrices = [
                  skeleton.bones[boneIndices[0]].matrixWorld,
                  skeleton.bones[boneIndices[1]].matrixWorld,
                  skeleton.bones[boneIndices[2]].matrixWorld,
                  skeleton.bones[boneIndices[3]].matrixWorld
                ];

                //this checks to see if the mesh has any morphTargets - jc
                if (geometry.morphTargets !== "undefined") {
                  var morphMatricesX = [];
                  var morphMatricesY = [];
                  var morphMatricesZ = [];
                  var morphMatricesInfluence = [];

                  for (var mt = 0; mt < geometry.morphTargets.length; mt++) {
                    //collect the needed vertex info - jc
                    morphMatricesX[mt] =
                      geometry.morphTargets[mt].vertices[vertexIndex].x;
                    morphMatricesY[mt] =
                      geometry.morphTargets[mt].vertices[vertexIndex].y;
                    morphMatricesZ[mt] =
                      geometry.morphTargets[mt].vertices[vertexIndex].z;
                    morphMatricesInfluence[mt] = morphTargetInfluences[mt];
                  }
                }

                var finalVector = new THREE.Vector4();

                if (mesh.geometry.morphTargets !== "undefined") {
                  var morphVector = new THREE.Vector4(
                    vector.x,
                    vector.y,
                    vector.z
                  );

                  for (var mt = 0; mt < geometry.morphTargets.length; mt++) {
                    //not pretty, but it gets the job done - jc
                    morphVector.lerp(
                      new THREE.Vector4(
                        morphMatricesX[mt],
                        morphMatricesY[mt],
                        morphMatricesZ[mt],
                        1
                      ),
                      morphMatricesInfluence[mt]
                    );
                  }
                }

                for (var k = 0; k < 4; k++) {
                  var tempVector = new THREE.Vector4(
                    vector.x,
                    vector.y,
                    vector.z
                  );
                  tempVector.multiplyScalar(weights[k]);
                  //the inverse takes the vector into local bone space
                  tempVector
                    .applyMatrix4(inverses[k])
                    //which is then transformed to the appropriate world space
                    .applyMatrix4(skinMatrices[k]);
                  finalVector.add(tempVector);
                }

                output +=
                  "\t\t\tvertex " +
                  finalVector.x +
                  " " +
                  finalVector.y +
                  " " +
                  finalVector.z +
                  "\n";
              }
            }
            output += "\t\tendloop\n";
            output += "\tendfacet\n";
          }
        }
      }
    }
  });

  output += "endsolid exported\n";

  return output;
};

export { Object3D, Renderer, Scene, Camera, generateSTL };
