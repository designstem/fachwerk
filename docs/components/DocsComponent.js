import { kebabcase } from "../../fachwerk.js";

export default {
  props: ["title", "c", "type"],
  methods: {
    propsTable(props) {
      return Object.entries(props).map(p => ({
        Name: `\`:${kebabcase(p[0])}\``,
        Default: p[1].default
          ? `\`${String(p[1].default).replace(/'primary'/, '"primary"')}\``
          : "",
        Type: `\`${
          Array.isArray(p[1].default) ? "array" : typeof p[1].default
        }\``,
        Description: p[1].description ? `${p[1].description}` : ""
      }));
    },
    cssTable(props) {
      return Object.entries(props).map(([key, value]) => ({
        Name: `\`${key}\``,
        Value: `\`${value.default}\``,
        Description: value.description ? `${value.description}` : ""
      }));
    },
    slotsTable(props) {
      return Object.entries(props).map(([key, value]) => ({
        Name: `<code>{ ${key} }</code>`,
        Type: `\`${value.type}\``,
        Description: value.description ? `${value.description}` : ""
      }));
    },
    generateContent(title, c) {
      return `## ${kebabcase(title)}

${c.description ? c.description.trim() : ""}
${c.example ? c.example.trim() : ""}
${c.props ? `\n\n#### Props` : ""}

${
  c.props
    ? `<f-table :rows='${JSON.stringify(
        this.propsTable(c.props),
        null,
        2
      ).replace(/'/g, '\\"')}'
/>`
    : ""
}
${c.slots ? `\n\n#### Slots` : ""}
${
  c.slots
    ? `<f-table :rows='${JSON.stringify(this.slotsTable(c.slots), null, 2)}'
    />`
    : ""
}
${c.cssprops ? `\n\n#### CSS variables` : ""}
${
  c.cssprops
    ? `<f-table :rows='${JSON.stringify(this.cssTable(c.cssprops), null, 2)}' 
    />`
    : ""
}

#### Import

Component can be imported using Javascript import:
  
    import { ${title} } from "https://designstem.github.io/fachwerk/fachwerk.js"
    
    Vue.component('${title}', ${title})

    // Later in the Vue template or Markdown file

    <${kebabcase(title)} />

      `;
    }
  },
  template: `
  <f-content-editor2
    type="document"
    edit="show"
    :title="title"
    :type="type"
    :content="generateContent(title,c)"
  />
  `
};
