import { kebabCase } from "../utils.js";
import PropsTable from './PropsTable.js'

export default {
  props: {
    component: { default: {}, type: Object }
  },
  methods: { kebabCase },
  components: { PropsTable },
  template: `
    <div>
      <h3>&lt;{{ kebabCase(component.name) }}&gt;</h3>
      <div class="grid" style="--cols: 1fr 3fr">
        <div>
          <markdown v-if="component.description" :content="component.description" />
          <div style="max-height: calc(var(--base) * 50); overflow: auto;">
            <h5>Props</h5>
            <PropsTable :props="component.props" />
          </div>
        </div>
        <div>
          <f-content-editor
            v-if="component.example"
            :content="component.example.trim()"
            :autosave-id="component.name"
            style="min-height: calc(var(--base) * 15)"
          ><f-content-document slot-scope="{content}" :content="content" /></f-content-editor> 
        </div>
      </div>
      <br><br>
      
    </div>
  `
};