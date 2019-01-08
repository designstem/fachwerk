export default {
  props: { keys: { default: [], type: Array } },
  description: `
> This component will be removed soon.

<p>Press <b>a</b> on the keyboard:</p>
<f-keyboard-data :keys="['a']">
  <f-buttons slot-scope="data" :buttons="['a']" :value="1 - data.value[0]"/>
</f-keyboard-data>
  `,
  data: () => ({ values: [] }),
  mounted() {
    this.values = this.keys.map(_ => 0);
    document.addEventListener(
      "keydown",
      e => {
        this.keys.forEach((k, i) => {
          if (e.key == k) {
            this.$set(this.values, i, 1 - this.values[i]);
          }
        });
      },
    );
  },
  template: `
    <slot :value="values" />
  `
};
