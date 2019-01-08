import { snapToGrid } from '../../utils.js'

export default {
  description: `
> Will be renamed to FDrag

<f-scene grid>
  <f-drag-data
    slot-scope="sData"
    :points="[{ x: 1, y: 0 },{ x: 0, y: 1 },{ x: -1, y: -1 }]"
    :value="sData.value"
  >
    <f-line
      slot-scope="dData"
      :points="dData.value"
      closed
    />
  </f-drag-data>
</f-scene>  
  `,
  props: {
    points: { default: [], type: Array },
    value: { default: [], type: Array },
    step: { default : false, type: Boolean }
  },
  data: () => ({ currentPoints: [] }),
  methods: {
    handleDown(i) {
      this.$set(this.currentPoints[i],'pressed',true)
    },
    handleUp(i) {
      this.$set(this.currentPoints[i],'pressed',false)
    }
  },
  computed: {
    finalPoints() {
      return this.currentPoints.map((p,i) => {
        if (p.pressed) {
          p.x = this.step ? snapToGrid(this.value[0], this.step) : this.value[0]
          p.y = this.step ? snapToGrid(this.value[1], this.step) : this.value[1]
        }
        return p
      })
    }
  },
  mounted() {
    this.currentPoints = this.points
  },
  template: `
    <f-group>
      <slot :value="finalPoints" />
      <f-circle 
        v-for="(p,i) in finalPoints"
        :key="i"
        :x="p.x"
        :y="p.y"
        :r="p.pressed ? 0.22  : 0.2"
        fill="rgba(255,255,255,0.95)"
        @mousedown.native="handleDown(i)"
        @touchstart.native="handleDown(i)"
        @mouseup.native="handleUp(i)"
        @touchend.native="handleDown(i)"
        style="cursor: move;"
      />        
    </f-group>
  `
};