import Markdown from "./Markdown.js";

export default {
  components: { Markdown },
  props: ['content'],
  template: `
    <div>
      <Markdown :content="content"/>
    </div>
  `
}