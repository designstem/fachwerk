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
      { title: "Markdown basics", file: "./content/markdown.md", preview: 0 },
      { title: "Interactive slides", file: "./content/interactive.md", preview: 1 },
      { title: "Component communication", file: "./content/communication.md", preview: 0 },
      { title: "Math basics", file: "./content/math.md", preview: 0 },
      { title: "Drawing the spirals", file: "./content/spirals2.md", preview: 1 },
      { title: "Various xperiments", file: "./content/experiments.md", preview: 0 },
      { title: "Now it is you turn!", file: "./content/empty.md", preview: 0 },
    ],
    content: "",
    activeContent: 2,
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
        <a href="https://designstem.github.io/framework">Fachwerk</a>
        → Documentation
      </div>
      <p style="margin: 0;"><kbd>Alt</kbd> + <kbd>F</kbd> for fullscreen, <kbd>Alt</kbd> + <kbd>T</kbd> for dark theme</p>
      <f-buttons :buttons="['As Document','As Slides']" v-model="activePreview" />
    </header>
    <f-theme class="grid" style="--gap: 0; --cols: 200px 3px 1fr; --rows:400vh;">
    <f-menu :items="contentFiles.map(c => c.title)" v-model="activeContent" />
    <f-vr />
    <f-content-editor
      :content="content"
      :autosave="false"
    >
      <component slot-scope="data"
        :is="previews[activePreview]"
        :content="data.content"
        base="8px"
        style="--gap: var(--base4);"
      />
    </f-content-editor>
    </f-theme>
</div>
  `
});
