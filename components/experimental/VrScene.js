Vue.config.ignoredElements = [
  "a-scene",
  "a-sky",
  "a-box"
]

export default {
  description: `
A-Frame wrapper 
  `,
  example: `
<VrScene>
</VrScene>
  `,
  template: `
    <a-scene embedded style="
      width: 250px;
      height: 250px;
    ">
      <a-entity position="0 0 2.5" camera look-controls />
      <a-box color="black"></a-box>
      <a-sky color="white"></a-sky>
    </a-scene>
  `
};