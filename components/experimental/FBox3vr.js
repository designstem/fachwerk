//Vue.config.ignoredElements.push("a-box");

export default {
  tag: 'Experimental',
  props: { fill: { default: "black" } },
  template: `
    <a-box height="1" color="black" opacity="0.5" ></a-box>
  `
};