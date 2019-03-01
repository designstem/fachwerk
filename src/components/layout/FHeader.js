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
      <div v-for="link in links" >
        <a :href="link.src">{{ link.title }}</a>&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  </header>
  `
};
