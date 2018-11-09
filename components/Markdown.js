import Render from "./Render.js";

export default {
  components: { Render },
  props: ["content"],
  methods: { marked },
  template: `
  <div>
    <Render :t="'<div>' + marked(content, { breaks: true }) + '</div>'" />
  </div>
  `
};
