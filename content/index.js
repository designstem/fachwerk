import Markdown from "../components/Markdown.js";
import AdvancedEditor from "../components/AdvancedEditor.js";
import Editor from "../components/Editor.js";

import sample from "./sample.js";

new Vue({
  el: "#app",
  components: { Editor, AdvancedEditor, Markdown },
  data: () => ({ content: sample }),
  template: `
    <div>
      <header>
        Content
      </header>
      <main style="height: calc(100vh - 5rem)">
        <section>
          <Editor v-model="content" />
        </section>
        <section style="flex: 1; padding: 2rem;">
          <Markdown :content="content" />
        </section>
      </main>
    </div>
  `
});
