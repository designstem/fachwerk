export default {
  tag: 'Content',
  description: `
Themes the content
  `,
  example: `
<f-buttons-data
  :value="1"
  :buttons="['Light', 'Dark', 'Blue','Yellow']
">
  <f-theme
    slot-scope="data"
    :theme="['light', 'dark', 'blue', 'yellow'][data.value]"
    style="padding: 1rem;"
  >
    <h2>Themed content</h2>
    <p>Some <code>code</code> here</p>
    <f-scene size="220px">
      <f-grid />
      <f-circle />
    </f-scene>
  </f-theme>
</f-buttons-data>
  `,
  props: {
    theme: { default: "light", type: String }
  },
  data: () => ({
    themes: {
      light: {},
      dark: {
        background: "var(--darkestgray)",
        "--primary": "var(--lightergray)",
        "--secondary": "var(--lightgray)",
        "--tertiary": "var(--gray)",
        "--lightblue": "var(--darkblue)",
        "--blue": "var(--lightgray)"
      },
      blue: {
        background: "var(--darkblue)",
        "--primary": "var(--lightergray)",
        "--secondary": "var(--lightgray)"
      },
      yellow: {
        background: "var(--yellow)",
        "--primary": "var(--darkgray)",
        "--lightblue": "var(--darkblue)",
        "--blue": "var(--lightgray)"
      }
    }
  }),
  template: `
    <div :style="themes[theme]">
      <slot />
    </div>
  `
};