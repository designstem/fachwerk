import { parseSheet } from "../../../fachwerk.js"
;

export default {
  description: `
Fetches data from Google Sheets.

#### Fetched data

<f-sheet
  id="110RcQmdpOkFcS2KIlahEh8QezwH2cwnihDiV__ZiYqk"
  v-slot="{ value }"
>
  <pre>{{ value }}</pre>
</f-sheet>

#### Drawing a graph based on fetched data

<f-sheet
  id="110RcQmdpOkFcS2KIlahEh8QezwH2cwnihDiV__ZiYqk"
  v-slot="{ value }"
>
  <f-scene>
    <rect 
      v-for="(v,i) in value"
      :x="scale(i,0,value.length,-1.9,1.9)"
      :y="-2"
      :height="scale(v.age,0,100,0,2.9)"
      :width="(4 / value.length) - 0.1"
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
  slots: {
    value: {
      type: "array",
      description: "Fetched table contents as array of objects"
    }
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
