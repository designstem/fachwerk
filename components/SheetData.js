import { parseSheet } from "../utils.js";

export default {
  description: `
Fetches data from Google Sheets.
  `,
  example: `
<SheetData id="110RcQmdpOkFcS2KIlahEh8QezwH2cwnihDiV__ZiYqk">
<TwoScene slot-scope="data">
  <rect 
    v-for="(v,i) in data.value"
    :x="scale(i,0,data.value.length,-1.9,1.9)"
    :y="-2"
    :height="scale(v.age,0,100,0,2.9)"
    :width="(4 / data.value.length) - 0.1"
    fill="var(--color-red)"
    rx="0.05"
  />  
</TwoScene>
</SheetData>
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
