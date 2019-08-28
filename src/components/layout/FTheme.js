export default {
  description: `
Themes the content.

Technically it adjust CSS custom properties and redefines the color constants for the child elements.

<f-buttons
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
</f-buttons>
  `,
  props: {
    theme: { default: "light", type: String }
  },
  data: function() {
    return {
      currentTheme: this.theme,
      themes: {
        light: {
          background: "var(--white)",
          "--background": "var(--white)",
          "--primary": "var(--darkgray)",
          "--secondary": "var(--gray)",
          "--tertiary": "var(--lightgray)",
          "--lightblue": "var(--darkblue)",
          "--quaternary": "var(--lightgray)",
          "--blue": "var(--blue)",
          "--accent": "var(--purple)",
          "--lightemphasis": "var(--lighteryellow)",
          "--emphasis": "var(--yellow)"
        },
        dark: {
          background: "var(--darkestgray)",
          "--background": "var(--darkestgray)",
          "--primary": "var(--lightergray)",
          "--secondary": "var(--lightgray)",
          "--tertiary": "var(--gray)",
          "--lightblue": "var(--darkblue)",
          "--quaternary": "var(--darkgray)",
          "--blue": "var(--lightgray)",
          "--lightemphasis": "var(--darkgray)",
        },
        blue: {
          background: "var(--darkblue)",
          "--background": "var(--darkblue)",
          "--paleblue": "var(--black)",
          "--primary": "var(--lightergray)",
          "--secondary": "var(--lightgray)",
          "--tertiary": "var(--gray)",
          "--lightblue": "var(--darkblue)",
          "--quaternary": "var(--darkergray)",
          "--emphasis": "var(--blue)",
          "--lightemphasis": "var(--black)",
          "--purple": "var(--blue)"
        },
        yellow: {
          background: "var(--yellow)",
          "--background": "var(--yellow)",
          "--emphasis": "var(--red)",
          "--lightemphasis": "var(--lightergray)",
          "--primary": "var(--darkgray)",
          "--lightblue": "var(--darkblue)",
          "--gray": "var(--darkgray)",
          "--secondary": "var(--lightgray)",
          "--tertiary": "var(--gray)",
          "--quaternary": "var(--gray)",
          "--icon-stroke": "var(--darkgray)",
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
