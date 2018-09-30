import Render from "../components/Render.js";

export default {
  components: { Render },
  props: ["content"],
  methods: { marked },
  template: `
    <div v-html="marked(content, { breaks: true })" />
  `
};
