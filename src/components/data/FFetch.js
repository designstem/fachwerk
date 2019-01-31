export default {
  description: `
> This component will be renamed so that \`data\` suffix will be removed.

Fetches data via AJAX.

<f-fetch
  url="https://sofetch.glitch.me/https://samples.openweathermap.org/data/2.5/weather?q=Berlin,de&appid=b6907d289e10d714a6e88b30761fae22"
  type="json"
>
  <pre
    slot-scope="data"
    v-html="'Berlin weather: ' + data.value.weather[0].main"
  />
</f-fetch>
  `,
  data: () => ({ value: null, loaded: false }),
  props: {
    url: { default: "", type: String },
    type: { default: "text", type: String }
  },
  mounted() {
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
