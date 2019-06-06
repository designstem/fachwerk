export default {
  description: `
Fetches data via AJAX.

<f-fetch
  src="../README.md"
  v-slot="{ value }"
>
  <pre>{{ value.slice(0,100) }}</pre>
</f-fetch>

<!--f-fetch
  src="https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"
  type="json"
  v-slot="{ value }"
>
  <pre>{{ value.description }}</pre>
</f-fetch-->
  `,
  data: () => ({ value: null, loaded: false }),
  props: {
    src: { default: "", type: String },
    type: { default: "text", type: String }
  },
  slots: {
    value: {
      type: "string",
      description: `Fetched contents. When \`type="json"\` is set, type can be \`array\` or \`object\``
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
    this.fetchType(this.src, this.type)
      .then(res => {
        this.value = res;
        this.loaded = true;
      })
      .catch(error => console.log(error));
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
