import * as components from "./framework.js";
import * as utils from "./utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

new Vue({
  el: "#app",
  data: () => ({
    contentFiles: [
      { title: "Empty playground", file: "./contents/playground.md", preview: 0 },
      { title: "What is Markdown?", file: "./contents/markdown.md", preview: 0 },
      //{ title: "How to make slides?", file: "./contents/slides.md", preview: 1 },
      { title: "Spirals tutorial", file: "./contents/spirals.md", preview: 1 },
      { title: "Misc experiments", file: "./contents/experiments.md", preview: 0 }
    ],
    content: "",
    activeContent: 0,
    previews: [
      components.FContentDocument,
      components.FContentSlides
    ],
    activePreview: 0,
  }),
  mounted() {
    this.$watch(
      "activeContent",
      activeContent => {
        fetch(this.contentFiles[activeContent].file)
          .then(res => res.text())
          .then(content => {
            this.content = content;
            this.activePreview = this.contentFiles[activeContent].preview
          });
      },
      { immediate: true }
    );
  },
  template: `
  <div>
    <header style="background: var(--yellow);">
      <div>
        <a href="https://designstem.github.io/framework">Fachwek</a>
        → Editor
      </div>
      <f-buttons :buttons="['As Document','As Slides']" v-model="activePreview" />
    </header>
    <f-tabs :buttons="contentFiles.map(c => c.title)" v-model="activeContent" />
    
    <f-theme>
      <f-content-editor
      :content="content"
      :autosave="false"
    >
      <component slot-scope="data"
        :is="previews[activePreview]"
        :content="data.content"
        base="8px"
      />
    </f-content-editor>
</f-theme>
</div>
  `
});
