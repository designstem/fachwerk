import Buttons from "../components/Buttons.js";
import ContentDocument from "../components/ContentDocument.js";
import ContentSlides from "../components/ContentSlides.js";
import ContentCards from "../components/ContentCards.js";
import Editor from "../components/Editor.js";

import trianglesample from "./trianglesample.js";
import mathsample from "./mathsample.js";
import threesample from "./threesample.js";

new Vue({
  el: "#app",
  components: {
    Editor,
    ContentDocument,
    ContentSlides,
    Buttons
  },
  data: () => ({
    content: "",
    components: [
      { title: "Document", component: ContentDocument },
      { title: "Slides", component: ContentSlides },
      { title: "Cards", component: ContentCards }
    ],
    samples: [
      { title: "Finding Triangles", sample: trianglesample },
      { title: "Math theory", sample: mathsample },
      { title: "3D examples", sample: threesample }
    ],
    activeComponent: 0,
    activeSample: 2
  }),
  mounted() {
    this.$watch(
      "activeSample",
      value => {
        this.content = this.samples[value].sample;
      },
      { immediate: true }
    );
  },
  template: `
    <div>
      <header>
        <div>
          <a href="..">Styles</a>
        → Content editor
        </div>
        <Buttons :buttons="samples.map(s => s.title)" v-model="activeSample"/>
        <Buttons :buttons="components.map(c => c.title)" v-model="activeComponent"/>
      </header>
      <main style="height: calc(100vh - 5rem)">
        <section>
          <Editor v-model="content" style="height: 100%" />
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
