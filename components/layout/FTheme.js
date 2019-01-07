export default {
  description: `
Themes the content.

⌨️ Allows to toggle between light and dark theme using <kbd>Alt</kbd> <kbd>t</kbd>.

Technically it adjust CSS custom properties and redefines the color constants for the child elements.

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
  data: function() {
    return {
      currentTheme: this.theme,
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
          "--secondary": "var(--lightgray)",
          "--lightblue": "var(--darkblue)",
        },
        yellow: {
          background: "var(--yellow)",
          "--primary": "var(--darkgray)",
          "--lightblue": "var(--darkblue)",
          "--blue": "var(--lightgray)"
        }
      }
    };
  },
  template: `
    <div :style="themes[theme]">
      <slot />
    </div>
  `
};
