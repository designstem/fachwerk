import Markdown from "../Markdown.js";
import { docs } from '../../utils.js'

export default {
  components: { Markdown },
  data: () => ({ docs: docs() }),
  template: `
      <Markdown :content="docs.join('<br><p />')" />
  `
}