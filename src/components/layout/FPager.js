import { send, get } from "../../../fachwerk.js";

export default {
  description: `
Sets a global pager for slides, shows prev / next buttons and also provides keyboard hotkeys.

<f-pager />
`,
  methods: { send, get },
  template: `
     <portal to="topright" :order="2">
      <f-inline>
        <a class="quaternary" style="padding: 0 4px" @click="send('prev')" ><f-leftarrow-icon /></a>
        <a class="quaternary" style="padding: 0 4px" @click="send('next')" ><f-rightarrow-icon /></a>
      </f-inline>
    </portal>
  `
};
