export default {
  inject: ["_baseUrl"],
  props: {
    baseUrl: {
      type: String,
      default() {
        return this._baseUrl;
      }
    }
  },
  provide() {
    return {
      _baseUrl: this.baseUrl
    };
  },
  methods: {
    dispatchEvent(name, detail, options = {}) {
      let e = new CustomEvent(
        name,
        Object.assign(options, {
          detail,
          bubbles: true,
          cancelable: true
        })
      );
      return this.$el.dispatchEvent(e);
    }
  },
  template: `
    <div><slot/></div>
  `
};