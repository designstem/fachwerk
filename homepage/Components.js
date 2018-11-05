import Render from "../components/Render.js";
import Markdown from "../components/Markdown.js";

import Editor from "../components/layout/FEditor.js";

import { sortedComponents } from "../framework.js";
import { kebabCase } from "../utils.js";

const Props = {
  props: { props: { type: [Object, Array] } }, // Arrays are Objects in JS
  methods: {
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
    <div style="font-size: 0.9rem">
    <table>
      <thead>
        <th>Name</th>
        <th>Default</th>
        <th>Type</th>
      </thead>
      <tbody>
        <tr v-for="prop in propsData">
          <td><code style="background: none">:{{ prop.name }}</code></td>
          <td><code v-if="prop.default" style="background: none">{{ prop.default }}</code></td>
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
          <div style="display: flex">
            <div style="width: 300px;">
              <h2><{{ kebabCase(c.name) }}></h2>
              <Markdown :content="c.description" />
              <br>
              <template v-if="c.props">
                <h3>Props</h3>
                <Props :props="c.props" />
              </template>
            </div>
            <div style="flex:1; margin-left: 2rem;">
              <Editor v-model="c.example" />
            </div>
            <Render :t="'<div>'+c.example+'</div>'" style="width: 250px; align-items: flex-start; margin-left: 2rem;" />
          </div>
        </div>
    </div>
  `
};
