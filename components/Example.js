import Math from './Math.js'

export default {
  components: { Math },
  data: () => ({ value: 100 }),
  computed: {
    math() {
      return `∠C = \\colorbox{#eee}{${this.value}}°  - ( ∠A + ∠B ) = 180° - (50°+30° ) = 180° - 80° = 100°`;
    }
  },
  template: `
    <div>
      <Math :math="math" />
      <label>Angle: <code>{{value}}</code>
      <input type="range" v-model="value" />
    <div>
  `
}