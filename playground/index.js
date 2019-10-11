import { fachwerk } from "../src/fachwerk.js";

const FSimpleContentEditor = {
  data: () => ({ content: "" }),
  mounted() {
    console.log(this.$slots.default)
    //this.content = this.$el.bla
  },
  template: `
  <div>
    <div id="bla" v-show="false"><slot /></div>
    <div>{{ content }}</div>
  </div>
  `
};

fachwerk({
  components: { FSimpleContentEditor },
  editor: "show",
  menu: "none",
  type: "document"
});
