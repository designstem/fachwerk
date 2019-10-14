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
  <f-fetch :src="src" @value="content => currentContent = content">
    <div class="grid" style="
      --cols: 1fr 1fr;
      box-shadow: 0 0 5px 0 rgba(0,0,0,0.1);
      align-items: stretch;
    ">
      <f-advanced-editor2
        v-model="currentContent"
        style="background: var(--paleblue)"
      />
      <f-content2
        :content="currentContent"
        style="height: 100%"
      />
      
    </div>
  </f-fetch>
  `
};
