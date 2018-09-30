import Buttons from "../components/Buttons.js";
import ContentDocument from "../components/ContentDocument.js";
import ContentSlides from "../components/ContentSlides.js";
import ContentCards from "../components/ContentCards.js";
import AdvancedEditor from "../components/AdvancedEditor.js";
import Editor from "../components/Editor.js";

import sample from "./sample.js";

new Vue({
  el: "#app",
  components: {
    Editor,
    AdvancedEditor,
    ContentDocument,
    ContentSlides,
    Buttons
  },
  data: () => ({
    content: sample,
    components: [
      { title: "Document", component: ContentDocument },
      { title: "Slides", component: ContentSlides },
      { title: "Cards", component: ContentCards }
    ],
    activeComponent: 0
  }),
  template: `
    <div>
      <header>
        <div>
          <a href="..">Styles</a>
        → Content editor
        </div>
        <Buttons :buttons="components.map(c => c.title)" v-model="activeComponent"/>
      </header>
      <main style="height: calc(100vh - 5rem)">
        <section>
          <Editor v-model="content" style="height: 100%" >
        </section>
        <section>
          <component
            :is="components[activeComponent].component"
            :content="content"
          />
        </section>
      </main>
    </div>
  `
});
