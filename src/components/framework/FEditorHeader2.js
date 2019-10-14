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
    value: { default: "", type: String }
  },
  template: `
    <div style="
      height: var(--base6);
      padding: 0 var(--base);
      background: var(--paleblue);
      display: flex;
      align-items: center;
      justify-content: space-between;
    ">
      <a class="quaternary" @click="$global.$emit('edit')"><f-close-icon /></a>
      &nbsp;
    </div>
    `
};