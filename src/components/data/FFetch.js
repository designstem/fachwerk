export default {
  description: `
Fetches data via AJAX.


#### Fetching data from single local URL as text

<f-fetch
  src="../README.md"
  v-slot="{ value }"
>
  <pre>{{ value.slice(0,100) }}</pre>
</f-fetch>

#### Fetching data from multple local URLs as text

<f-fetch
  :src="['../README.md','../RELEASES.md']"
  v-slot="{ value }"
>
  <div>
    <pre v-for="v in value">{{ v.slice(0,100) }}...</pre>
  </div>
</f-fetch>

#### Fetching data from remote URL as JSON

<f-fetch
  src="https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"
  type="json"
  v-slot="{ value }"
>
  <pre>{{ value.description }}</pre>
</f-fetch>
  `,
  data: () => ({ value: null, loaded: false }),
  props: {
    src: { default: "", type: [String,Array] },
    type: { default: "text", type: String }
  },
  slots: {
    value: {
      type: "string",
      description:
        "Fetched contents as a `string`, `array` or `object`. When `src` is an array of multiple URLs, `value` is an `array` of `string`s, `array`s or `object`s"
    }
  },
  methods: {
    fetchType(src, type) {
      return fetch(src).then(res => {
        if (type == "json") {
          return res.json();
        }
        return res.text();
      });
    }
  },
  mounted() {
    if (Array.isArray(this.src)) {
      Promise.all(this.src.map(src => this.fetchType(src, this.type)))
        .then(res => {
          this.value = res;
          this.loaded = true;
        })
        .catch(error => console.log(error));
    } else {
      this.fetchType(this.src, this.type)
        .then(res => {
          this.value = res;
          this.loaded = true;
        })
        .catch(error => console.log(error));
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
