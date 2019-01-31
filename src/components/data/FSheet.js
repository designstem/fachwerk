import { parseSheet } from "../../../utils.js";

export default {
  description: `
> This component will be renamed so that \`data\` suffix will be removed.

Fetches data from Google Sheets.

<f-sheet id="110RcQmdpOkFcS2KIlahEh8QezwH2cwnihDiV__ZiYqk">
  <f-scene slot-scope="data">
    <rect 
      v-for="(v,i) in data.value"
      :x="scale(i,0,data.value.length,-1.9,1.9)"
      :y="-2"
      :height="scale(v.age,0,100,0,2.9)"
      :width="(4 / data.value.length) - 0.1"
      fill="var(--red)"
      rx="0.05"
    />  
  </f-scene>
</f-sheet>
  `,
  data: () => ({ value: null, loaded: false }),
  props: {
    id: { default: "", type: String }
  },
  mounted() {
    if (this.id) {
      fetch(
        `https://spreadsheets.google.com/feeds/list/${
          this.id
        }/od6/public/values?alt=json`
      )
        .then(res => res.json())
        .then(res => {
          this.value = parseSheet(res);
          this.loaded = true;
        });
    }
  },
  render() {
    return this.loaded
      ? this.$scopedSlots.default
        ? this.$scopedSlots.default({
            value: this.value
          })
        : ""
      : "";
  }
};
