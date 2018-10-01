import Buttons from "../components/Buttons.js";
import ContentDocument from "../components/ContentDocument.js";
import ContentSlides from "../components/ContentSlides.js";
import ContentCards from "../components/ContentCards.js";
import Editor from "../components/Editor.js";

import trianglesample from "./trianglesample.js";
import mathsample from "./mathsample.js";
import playgroundsample from "./playgroundsample.js";

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
      { title: "Playground", sample: playgroundsample },
      { title: "Finding Triangles", sample: trianglesample },
      { title: "Math theory", sample: mathsample }
    ],
    activeComponent: 0,
    activeSample: 0
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
      <div
        style="display: flex;"
        :style="{height: activeComponent == 1 ? 'calc(100vh - 5rem)' : ''}"
      >
        <div style="width: 450px;">
          <Editor style="padding: 1rem" v-model="content" />
        </div>
        <div style="flex: 1; padding: 1.5rem;">
          <component
            :is="components[activeComponent].component"
            :content="content"
          />
        </div>
      </div>
    </div>
  `
});
