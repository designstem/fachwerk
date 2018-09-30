import { cx, cy } from '../../utils.js'

export default {
  data: () => ({ maxSides: 16, sides: 6, size: 100 }),
  computed: {
    viewBox() {
      return `-${this.size / 2} -${this.size / 2} ${this.size} ${this.size}`;
    },
    points() {
      return Array.from({
        length: this.sides
      })
        .slice(0, this.sides)
        .map((_, i) => [
          cx((360 / this.sides) * i, this.size / 2 - 3),
          cy((360 / this.sides) * i, this.size / 2 - 3)
        ]);
    }
  },
  template: `
    <div style="opacity: 0.2">
      <svg :width="size" :height="size" :view-box.camel="viewBox">
        <circle
          cx="0"
          cy="0"
          :r="size / 2 - 2"
          fill="none"
          stroke="var(--color-gray-dark)"
          opacity="0.5"
        />
        <polygon
          :points="points.map(p => p.join(',')).join(' ')"
          fill="none"
          stroke="var(--color-gray-dark)"
          stroke-width="3"
        />
        <line
          v-for="point in points"
          x1="0"
          y1="0"
          :x2="point[0]"
          :y2="point[1]"
          stroke="var(--color-gray-dark)"
          opacity="0.5"
        />
      </svg>
      <label>Number of sides: <code>{{sides}}</code></label>
      <input type="range" v-model="sides" min="3" :max="maxSides" />
    </div>
  `
};
