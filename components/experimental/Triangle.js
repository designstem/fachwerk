export default {
  props: {
    p1: {
      default: () => ({ x: 90, y: 10 })
    },
    p2: {
      default: () => ({ x: 90, y: 90 })
    },
    p3: {
      default: () => ({ x: 10, y: 90 })
    },
    value: {}
  },
  data: () => ({
    size: 100,
    currentIndex: 0,
    points: []
  }),
  created: function() {
    this.points = this.computedPoints;
  },
  computed: {
    viewBox() {
      return `0 0 ${this.size} ${this.size}`;
    },
    computedPoints() {
      return Array.from([this.p1, this.p2, this.p3]);
    },
    coordinates() {
      return `${this.points[0].x},${this.points[0].y} ${this.points[1].x},${
        this.points[1].y
      } ${this.points[2].x},${this.points[2].y} `;
    }
  },
  methods: {
    onSceneMousemove(event) {
      const rect = this.$refs.svg.getBoundingClientRect();
      if (this.currentIndex > -1 && this.points[this.currentIndex].dragging) {
        this.points[this.currentIndex].x = event.clientX - rect.left;
        this.points[this.currentIndex].y = event.clientY - rect.top;
      }
    },
    onPointMousedown(index) {
      this.currentIndex = index;
      this.points[index].dragging = true;
    },
    onPointMouseup() {
      delete this.points[this.currentIndex].dragging;
      this.points[this.currentIndex].dragging = false;
      this.$emit("input", this.points);
      this.currentIndex = -1;
    }
  },
  template: `
    <div>
      <svg :width="size" :height="size" :view-box.camel="viewBox" 
        @mousemove="onSceneMousemove"
        @mouseup.stop="onPointMouseup"
        ref="svg"
    >
       
        <polygon
          :points="coordinates"
         
          fill="none"
          stroke="var(--primary)"
          stroke-width="3"
          
        />
        <circle
            v-for="(point, index) in points"
            :cx="point.x"
            :cy="point.y"
            r="6"
            @mousedown.stop="onPointMousedown(index)"
        />

      </svg>
      
      <!--<label>First point x: <code>{{points[0].x}}</code></label>
      <input type="range" v-model="points[0].y" min="0" max="100" />-->
    </div>
  `
};
