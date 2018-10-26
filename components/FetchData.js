export default {
  description: `
Fetches data via AJAX.
  `,
  example: `
<FetchData
  url="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20%28select%20woeid%20from%20geo.places%281%29%20where%20text%3D%22Berlin%22%29&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
  type="json"
>
<pre
  style="width: 250px"
  slot-scope="data"
>
Weather in Berlin:
{{
  data.value
  .query.results.channel.item.condition.text
}}
</pre>
</FetchData>
  `,
  data: () => ({ value: null, loaded: false }),
  props: {
    url: { default: "", type: String },
    type: { default: "text", type: String }
  },
  mounted() {
    if (this.url && this.type == 'json') {
      fetch(this.url)
        .then(res => {
          if (this.type == 'json') {
            return res.json()
          }
          return res.text()
        })
        .then(res => {
          this.value = res;
          this.loaded = true
        })
        .catch(error => console.log(error))
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
