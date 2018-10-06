
import Tabs from "../components/layout/Tabs.js";
import ContentDocument from "../components/layout/ContentDocument.js";
import ContentSlides from "../components/layout/ContentSlides.js";
import ContentCards from "../components/layout/ContentCards.js";

import Buttons from "../components/Buttons.js";
import Editor from "../components/Editor.js";

import trianglesample from "./trianglesample.js";
import mathsample from "./mathsample.js";
import playgroundsample from "./playgroundsample.js";
import vrsample from "./vrsample.js";

new Vue({
  el: "#app",
  components: {
    Editor,
    ContentDocument,
    ContentSlides,
    Buttons,
    Tabs
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
      { title: "Math theory", sample: mathsample },
      { title: "VR experiments", sample: vrsample }
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
          <a href="..">Fachwerk</a>
        → Content editor
        </div>
        <!--Buttons :buttons="samples.map(s => s.title)" v-model="activeSample"/-->
        <Buttons :buttons="components.map(c => c.title)" v-model="activeComponent"/>
      </header>
      <Tabs :buttons="samples.map(s => s.title)" v-model="activeSample" />
      <!--header style="background: white; height:4rem;">
        <div>
          Try some samples: 
          <div
            v-for="(s,i) in samples"
            :key="i"
            @click="activeSample = i"
            v-html="s.title"
            class="button_tertiary"
            style="margin-right: 0.5rem;"
          />
        </div>
      </header-->
      <div
        style="display: flex;"
        :style="{height: activeComponent == 1 ? 'calc(100vh - 5rem)' : ''}"
      >
        <div style="width: 450px;">
          <Editor v-model="content" />
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
