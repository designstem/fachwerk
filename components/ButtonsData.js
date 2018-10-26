
export default {
  description: `
Wrapper component, adding a set of buttons on below the content and passing the current button index as <code>data.value</code>.
  `,
  example: `
<ButtonsData :buttons="['Eins', 'Zwei', 'Drei']">
  <h1 slot-scope="data" class="bullet">{{ data.value + 1 }}</h1>
</ButtonsData>
  `,
  props: {
    buttons: { default: [], type: Array },
    value: { default: 0, type: Number },
  },
  data: function() {
    return { innerValue: this.value };
  },
  template: `
    <div>
      <slot :value="innerValue" />
      <buttons v-model="innerValue" :buttons="buttons" />
    </div>
  `
};
