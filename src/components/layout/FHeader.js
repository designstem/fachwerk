export default {
  description: `
Displays a page header, accepts \`link\` array for header links.

<f-header :links="[{ title: 'Hello', src: '' }]" />

<br>

`,
  props: {
    links: { default: "", type: [String, Array] }
  },
  template: `
  <header>
    <div>
      <a v-for="link in links" :href="link.src">{{ link.title }}</a>
    </div>
  </header>
  `
};
