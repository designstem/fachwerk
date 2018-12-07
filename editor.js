import * as components from "./framework.js";
import * as utils from "./utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}
const Init = {
  beforeCreate() {
    Vue.prototype.$global = new Vue({ data: { state: {} } });
    Vue.config.errorHandler = (err, vm, info) => {
      console.log(err);
    };
    Vue.config.warningHandler = (err, vm, info) => {
      console.log(err);
    };
  }
};
new Vue({
  mixins: [Init],
  el: "#app",
  data: () => ({
    contentFiles: [
      { title: "Empty", file: "./content/empty.md", preview: 0 },
      { title: "Markdown basics", file: "./content/markdown.md", preview: 0 },
      { title: "Component communication", file: "./content/communication.md", preview: 0 },
      { title: "Spirals tutorial", file: "./content/spirals.md", preview: 1 },
      { title: "Misc experiments", file: "./content/experiments.md", preview: 0 }
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
    <f-theme class="grid" style="--gap: 0; --cols: 200px 3px 1fr;">
    <f-menu :items="contentFiles.map(c => c.title)" v-model="activeContent" />
    <f-vr />
    <f-content-editor
      :content="content"
      :autosave="false"
      style="height: 100vh;"
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
