export default {
  description: `
Fetches data via AJAX.

<f-fetch
  src="https://sofetch.glitch.me/https://samples.openweathermap.org/data/2.5/weather?q=Berlin,de&appid=b6907d289e10d714a6e88b30761fae22"
  type="json"
  v-slot="{ value }"
>
  <output>Berlin weather: {{ value.weather[0].main }}</output>
</f-fetch>
  `,
  data: () => ({ value: null, loaded: false }),
  props: {
    src: { default: "", type: String },
    // @TODO Remove url parameter
    url: { default: "", type: String, description: "***NEEDS UPDATE***, use `src`" },
    type: { default: "text", type: String }
  },
  slots: {
    value: {
      type: "string",
      description: `Fetched contents. When \`type="json"\` is set, type can be \`array\` or \`object\``
    }
  },
  mounted() {
    fetch(this.src || this.url)
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
