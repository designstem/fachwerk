import Markdown from "../components/Markdown.js";
import AdvancedEditor from "../components/AdvancedEditor.js";

import sample from "./sample.js";

new Vue({
  el: "#app",
  components: { AdvancedEditor, Markdown },
  data: () => ({ content: sample }),
  template: `
    <div>
      <header>
        Content
      </header>
      <main style="height: calc(100vh - 5rem)">
        <section>
          <AdvancedEditor v-model="content" />
        </section>
        <section style="padding: 2rem;">
          <Markdown :content="content" />
        </section>
      </main>
    </div>
  `
});
