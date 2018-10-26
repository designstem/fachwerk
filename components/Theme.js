export default {
  description: `
Themes the content
  `,
  example: `
<buttons-data
  :value="1"
  :buttons="['Light', 'Dark', 'Blue','Yellow']
">
  <theme
    slot-scope="data"
    :theme="['light', 'dark', 'blue', 'yellow'][data.value]"
    style="padding: 1rem;"
  >
    <h2>Themed content</h2>
    <p>Some <code>code</code> here</p>
    <two-scene size="220px">
      <two-grid />
      <two-circle />
    </two-scene>
  </theme>
</buttons-data>
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
