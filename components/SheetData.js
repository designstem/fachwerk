import { parseSheet } from "../utils.js";

export default {
  description: `
Fetches data from Google Sheets.
  `,
  example: `
<SheetData
  id="110RcQmdpOkFcS2KIlahEh8QezwH2cwnihDiV__ZiYqk"
>
<pre
  style="width: 250px; height: 250px;"
  slot-scope="data"
>
{{
  data.value
}}
</pre>
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
