export default {
  description: `
A playground for generative vector graphics. Compared to the \`<f-scene>\` it is a standard \`svg\` document so the coordinate system and sizing is working in the expected way.

<f-artboard width="400" height="400" grid>
  <f-circle
    v-for="r in range(0,300,10).reverse()"
    x="200"
    y="200"
    :r="r"
    :fill="hsl(r)"
  />
</f-artboard>
  `,
  props: {
    width: { default: 600, type: [Number, String] },
    height: { default: 600, type: [Number, String] },
    grid: { default: false, type: Boolean },
    step: { default: 25, type: [Number, String] },
    id: { default: "scene", type: String }
  },
  slots: {
    mouse: {
      type: "object",
      description: "Mouse data as `mouse.x` `mouse.y` `mouse.pressed`"
    }
  },
  provide() {
    return {
      svgScale: () => 1
    };
  },
  template: `
  <f-svg 
    :width="width"
    :height="height"
    class="f-artboard"
    v-slot="{ mouse }"
    :id="id"
  >
    <f-group>
      <f-basegrid 
        v-if="grid"
        :inner-width="width"
        :inner-height="height"
        :step="step"
      />
      <f-basegrid 
        v-if="grid"
        :inner-width="width"
        :inner-height="height"
        :step="step * 4"
      />
      <slot :mouse="mouse" />
    </f-group>
  </f-svg>
  `
};
