// import {WebGLRenderer} from 'three'

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
      let e = new CustomEvent(name, {
        detail,
        bubbles: true,
        cancelable: true,
        ...options
      });
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
    scale: { type: [Object, Number] },
    position: { type: Object },
    rotation: { type: Object }
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
        Object.assign(this.curObj.rotation, v);
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
      this.setScale(this.scale);
      Object.assign(obj.position, this.position);
      Object.assign(obj.rotation, this.rotation);
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
  inject: ['global'],
  props: {
    obj: { type: Object }
  },
  data() {
    let curObj = this.obj
    if (!curObj) {
      curObj = new THREE.Scene()
    }
    curObj.name = curObj.name || curObj.type
    return { curObj }
  },
  mounted() {
    let scene = this.curObj
    this.global.scene = scene
    //window.THREE = THREE
    window.scene = scene
  },
}

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
    obj: { type: Object }
  },
  data() {
    let curObj = this.obj;
    if (!curObj) {
      curObj = new THREE.SVGRenderer({ antialias: true });
      curObj.setClearColor(0xffffff);
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
  inject: ['global'],
  props: {
    obj: { type: Object }
  },
  data() {
    let curObj = this.obj
    const { w, h } = this.global.rendererSize
    if (!curObj) {
      curObj = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000)
    }
    curObj.name = curObj.name || curObj.type
    return { curObj }
  },
  mounted() {
    this.global.camera = this.curObj
  }
}


const Light = {
  mixins: [Object3D],
  props: {
    hex: Number,
    intensity: Number
  },
  data() {
    let curObj = this.obj
    if (!curObj) {
      curObj = new THREE.DirectionalLight(this.hex, this.intensity)
    }
    curObj.name = curObj.name || curObj.type
    return { curObj }
  }
}

const Stroke = {
  mixins: [Object3D],
  props: ["from", "to"],
  data() {
    let curObj = this.obj
    if (!curObj) {
      var material = new THREE.LineBasicMaterial({ color: 0x333333, linewidth: 3 });
      var geometry = new THREE.Geometry();
      geometry.vertices.push(new THREE.Vector3(this.from.x, this.from.y, this.from.z));
      geometry.vertices.push(new THREE.Vector3(this.to.x, this.to.y, this.to.z));
      curObj = new THREE.Line(geometry, material);
    }
    curObj.name = curObj.name || curObj.type
    return { curObj }
  }
}

const Triangle = {
  mixins: [Object3D],
  props: ["v1", "v2", "v3"],
  data() {
    let curObj = this.obj
    if (!curObj) {
      var material = new THREE.MeshNormalMaterial();
      var geometry = new THREE.Geometry();
      geometry.vertices.push(new THREE.Vector3(this.v1.x, this.v1.y, this.v1.z));
      geometry.vertices.push(new THREE.Vector3(this.v2.x, this.v2.y, this.v2.z));
      geometry.vertices.push(new THREE.Vector3(this.v3.x, this.v3.y, this.v3.z));
      geometry.faces.push(new THREE.Face3(0, 1, 2));
      geometry.computeFaceNormals();
      curObj = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial({ opacity: 0.5, side: THREE.DoubleSide }));
    }
    curObj.name = curObj.name || curObj.type
    return { curObj }
  }
}

const Icosahedron = {
  mixins: [Object3D],
  data() {
    let curObj = this.obj;
    if (!curObj) {
      var geometry = new THREE.IcosahedronGeometry(1, 0);
      curObj = new THREE.Mesh(
        geometry,
        new THREE.MeshNormalMaterial({ opacity: 0.5, side: THREE.DoubleSide })
      );
    }
    curObj.name = curObj.name || curObj.type;
    return { curObj };
  }
};

const Dodecahedron = {
  mixins: [Object3D],
  data() {
    let curObj = this.obj;
    if (!curObj) {
      var geometry = new THREE.DodecahedronGeometry(1, 0);
      curObj = new THREE.Mesh(
        geometry,
        new THREE.MeshNormalMaterial({ opacity: 0.5, side: THREE.DoubleSide })
      );
    }
    curObj.name = curObj.name || curObj.type;
    return { curObj };
  }
};



const Mesh = {
  mixins: [Object3D],
  props: {
    type: { type: String, default: 'Mesh' }
  },
  provide() {
    return { meshVm: this }
  }
}

// const Geometry = {
//   mixins: [Base],
//   inject: ['meshVm'],
//   props: {
//     args: { type: Array, default: () => [] },
//     type: { type: String, default: '' }
//   },
//   data() {
//     let mod = `${this.type}Geometry`
//     let geometry = new THREE[mod](...this.args)
//     return { geometry }
//   },
//   mounted() {
//     this.meshVm.curObj.geometry = this.geometry
//   },
//   beforeDestroy() {
//     this.meshVm.curObj.geometry = null
//   }
// }

import { cx, cy } from '../components/utils.js'

new Vue({
  el: "#app",
  components: {
    Renderer,
    Scene,
    Camera,
    Light,
    Mesh,
    Stroke,
    Triangle,
    Icosahedron,
    Dodecahedron
  },
  data: () => ({ rotateY: 0, rotateX: 0.75, count: 0 }),
  methods: { cx, cy },
  template: `
  <div>
    <header>
      <div>
        <a href="..">Styles</a>
        → ThreeJS playground
      </div>
    </header>
    <div style="padding: 2rem; display: grid; grid-template-columns: 2fr 2fr 1fr; grid-gap: 2rem;">
      <div>
        <h1>3D in SVG</h1>
        <div class="intro">
          <p>This is a simple demonstration of SVG rendering of 3D shapes. We use ThreeJS library under the hood
          but the functionality is exposed via simple components.</p>
          <p>In this example we use two custom components:</p>
          <br>
<pre>
&lt;Stroke
  from="{x: 1, y: 0, y: 0}"
  to="{x: 0, y: 1, y: 0}"
&gt;
</pre>
<br>
<pre>
&lt;Triangle
  v1="{x: 1, y: 0, y: 0}"
  v2="{x: 0, y: 1, y: 0}"
  v3="{x: 0, y: 0, y: 1}"
&gt;
</pre>
        </div>
      </div>
      <Renderer :size="{ w: 400, h: 400 }">
        <Scene>
          <Camera :position="{ z: 2.5 }" />
          <Mesh :rotation="{x: rotateX, y: rotateY, z: 0}">
            <Dodecahedron />
            <template
              v-for="(a,j) in Array.from({ length: 14 }).map((_,i) => i + 3)"
              v-if="count == j"
            >
              <Triangle
                v-for="(c,i) in a"
                :v1="{x: cx(360 / a * c,1), y: 0, z: cy(360 / a * c,1)}"
                :v2="{x: cx(360 / a * (c + 1),1), y: 0, z: cy(360 / a * (c + 1),1)}"
                :v3="{ x: 0, y: 0, z: 0 }"
              />
            </template>
          <Stroke
            v-for="(c,i) in 3"
            :key="'b' + i"
            :from="{x: cx(360 / 3 * c,1.5), y: 0, z: cy(360 / 3 * c,1.5)}"
            :to="{x: cx(360 / 3 * (c + 1),1.5), y: 0, z: cy(360 / 3 * (c + 1),1.5)}"
          />
          </Mesh>
        </Scene>
      </Renderer> 
      <div>
        <h3>Rotation</h3>
        <label>X rotation axis <code>{{ rotateX }}</code></label>
        <input type="range" v-model="rotateX" step="0.01" max="4" />
        <label>Y rotation axis <code>{{ rotateY }}</code></label>
        <input type="range" v-model="rotateY" step="0.01" max="4" />
        <h3>Geometry</h3>
        <label>Polygon count <code>{{ parseInt(count) + 3 }}</code></label>
        <input type="range" v-model="count" max="13" />
      </div>
    </div>
    </div>
  `
});
