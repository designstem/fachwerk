//Vue.config.ignoredElements.push("a-box");

export default {
  props: { fill: { default: "black" } },
  example: `
See the VrScene example above
  `,
  template: `
    <a-box height="1" color="black" opacity="0.5" ></a-box>
  `
};