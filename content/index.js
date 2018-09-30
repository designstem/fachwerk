import ContentDocument from "../components/ContentDocument.js";
import AdvancedEditor from "../components/AdvancedEditor.js";
import Editor from "../components/Editor.js";

import sample from "./sample.js";

new Vue({
  el: "#app",
  components: { Editor, AdvancedEditor, ContentDocument },
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
          <ContentDocument :content="content" />
        </section>
      </main>
    </div>
  `
});
