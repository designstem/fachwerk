import {
  Vue,
  components,
  parseContent,
  send,
  isimageurl,
  color,
  slug,
  store,
  Css
} from "../../../fachwerk.js";

export default {
  props: {
    src: { default: "", type: String }
  },
  data: () => ({
    currentContent: ""
  }),
  template: `
  <f-fetch
    :src="src"
    @value="content => currentContent = content"
    style="
      margin: var(--base3) 0;
    "
  >
    <div class="grid" style="
      --cols: 1fr 1fr;
      --gap: 0;
      box-shadow: 0 0 5px 0 rgba(0,0,0,0.1);
      align-items: stretch;
      border-radius: 2px;
      overflow: hidden;
    ">
      <f-advanced-editor
        v-model="currentContent"
        style="background: var(--paleblue)"
      />
      <f-content
        :content="currentContent"
        style="height: 100%; min-height: auto;"
      />
      
    </div>
  </f-fetch>
  `
};
