import * as utils from "https://designstem.github.io/fachwerk/utils.js";

export default {
  props: {
    title: { default: '', type: String },
    titleColor: { default: '#333', type: String },
    backgroundColor: { default: '#ddd', type: String },
    cursorTimeout: { default: 700, type: Number },
    position: { default: '0 0 0', type: String },
    rotation: { default: '0 0 0', type: String },
    scale: { default: '1 1 1', type: String },
  },
  computed: {
    x() {
      return this.title.length * -0.1
    },
    width() {
      return this.title.length / 2
    }
  },
  methods: { ...utils },
  data: () => ({ focus: false, active: false }),
  template: `
  <a-entity
    :position="position"
    :rotation="rotation"
    :scale="scale"
  >
    <a-entity
      scale="0.65 0.65 0.65"
    >
      <a-rounded
        radius="0.06"
        :width="width"
        :position="width / -2 + ' 0 0'"
        :material="{shader: 'flat'}"
        :color="backgroundColor"
        class="clickable"
        @mouseenter.prevent="focus = true;"
        @mouseleave.prevent="focus = false; active = false"
        @click.prevent="active = true"
      />
      <a-text
        :position="x + ' 0.5 0'"
        :value="title"
        :color="titleColor"
        width="7"
      />
      <f-animation-data
        :playing="focus && !active"
        :reset="true"
        :from="0"
        :to="width - 0.2"
        :duration="cursorTimeout"
      >
      <a-rounded
        slot-scope="{ value }"
        radius="0.02"
        :width="value"
        height="0.1"
        :position="(width / -2 + 0.1) + ' 0.05 0.1'"
        :material="{shader: 'flat'}"
        color="#777"
      />
      </f-animation-data>
    </a-entity>
  </a-entity>
  `
}