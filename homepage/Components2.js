import Render from "../components/Render.js";
import Markdown from "../components/Markdown.js";

import Editor from "../components/layout/FEditor.js";

import { sortedComponents } from "../framework.js";
import { kebabCase } from "../utils.js";

const Props = {
  props: { props: { type: [Object, Array] } }, // Arrays are Objects in JS
  methods: {
    kebabCase,
    formatDefault(prop) {
      if (prop.hasOwnProperty("default")) {
        if (
          prop.default instanceof Object &&
          !(prop.default instanceof Array)
        ) {
          return "{}";
        }
        return prop.default.length == 0 ? "[]" : String(prop.default);
      }
      return null;
    },
    formatType(prop) {
      if (prop.hasOwnProperty("type")) {
        const t =
          prop.type instanceof Array
            ? prop.type[0]()
            : typeof prop.type == "function"
              ? prop.type()
              : prop.type;
        return t instanceof Array ? "array" : typeof t;
      }
      return null;
    }
  },
  computed: {
    propsData() {
      if (this.props) {
        return this.props instanceof Array
          ? this.props.map(p => ({ name: p }))
          : Object.entries(this.props).map(p => ({
              name: p[0],
              default: this.formatDefault(p[1]),
              type: this.formatType(p[1])
            }));
      } else {
        return [];
      }
    }
  },
  template: `
    <div style="font-size: 0.8rem">
    <table>
      <thead>
        <th>Name</th>
        <th>Default</th>
        <th>Type</th>
      </thead>
      <tbody>
        <tr v-for="prop in propsData">
          <td><code style="background: none">:{{ kebabCase(prop.name) }}</code></td>
          <td><code v-if="prop.default" style="white-space: normal; width: 500px; overflow: hidden; background: none;">{{ prop.default }}</code></td>
          <td>
            <code
              v-if="prop.type"
              style="background: none; color: var(--secondary)">
                {{ prop.type }}
            </code>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  `
};

export default {
  components: { Render, Editor, Markdown, Props },
  props: { tag: { default: null } },
  data: function() {
    return { componentData: sortedComponents
      .map(c => Object.entries(c)[0])
      .map(c => Object.assign(c[1], { name: c[0] }))
      .filter(c => c.example)
      .filter(c => {
        return this.tag ? this.tag == c.tag : true
      })
      .map(({ name, example, description, props }) => ({
        name,
        example: example ? example.trim() : "",
        description: description || "",
        props
      }))
  }},
  methods: { kebabCase },
  template: `
    <div>
        <div v-for="(c,i) in componentData" :style="{
          padding: '2rem 0',
          minHeight: '15rem'
        }"
        >
          <div class="components2">
            <div>
            <h2><{{ kebabCase(c.name) }}></h2>
              <Markdown :content="c.description" />
              <br>
              <template v-if="c.props">
                <h4>Attributes</h4>
                <Props :props="c.props" />
              </template>
            </div>
            <div style="position: relative">
              <Editor style="position: absolute; top: 0, right: 0; left: 0; bottom: 0;" v-model="c.example" />
            </div>
          </div>
          <div style="margin-top: var(--base4);">
          <h4>Preview</h4>
            <Render :t="'<div>'+c.example+'</div>'" />
          </div>
        </div>
    </div>
  `
};
