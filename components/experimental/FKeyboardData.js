export default {
  tag: 'Experimental',
  props: { keys: { default: [], type: Array } },
  example: `
<f-keyboard-data :keys="['a']">
  <f-buttons slot-scope="data" :buttons="['a']" :value="1 - data.values[0]">
</f-keyboard-data>
  `,
  data: () => ({ values: [] }),
  mounted() {
    this.values = this.keys.map(_ => 0);
    document.addEventListener(
      "keydown",
      e => {
        // if (e.defaultPrevented) {
        //   return;
        // }
        this.keys.forEach((k, i) => {
          if (e.key == k) {
            this.$set(this.values, i, 1 - this.values[i]);
          }
        });
        //e.preventDefault();
      },
      false
    );
  },
  template: `
    <slot :values="values" />
  `
};
