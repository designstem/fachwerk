# Fachwerk

Fachwerk is a Javascript framework for creating interactive learning materials in the browser.

### For content authors

Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components.

> ✍️Try the edtiting this very site, all content can be altered and optionally saved to your browser. Github / Gist saving is in the works.

### For developers

Fachwerk is based on [VueJS](https://vuejs.org) and the latest browser technologies such as Javascript imports / exports and CSS variables. It provides an easy onboarding without any complex tooling or setup. Yes, this means <mark>there is no build step🕴️</mark>.

> 💾 Quickest way to get started is to  [download the sample project]() from Github.

To get started, create three files:

##### index.html

```html
<html>
<head>
  <!-- Load CSS styles -->
  <link rel="stylesheet" href="https://designstem.github.io/framework/styles.css">
</head>

<body>
  <!-- Load vendor Javascript -->
  <script src="https://designstem.github.io/framework/vendor.js"></script>
  
  <!-- Load main Javascript file index.js. Note: type="module" is required! -->
  <script src="./index.js" type="module"></script>
  
  <!-- Set up a placholder where framework can display its content -->
  <div id="app"></div>  
</body>

</html>
```

##### index.js

```js
// Use Javascript module import to get initialization mixin, Vue components and utility functions

import { Init } from "https://designstem.github.io/framework/mixins.js";
import * as components from "https://designstem.github.io/framework/components.js";
import * as utils from "https://designstem.github.io/framework/utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

new Vue({
  // Attaching Vue to <div id="app"></div>
  el: "#app",

  // Adding a mixin
  mixins: [Init],

  // Making utilities accessible to templates
  methods: { ...utils },

  // Fetching the index.md and rendering it
  template: `                         
  <f-fetch-data url="./index.md">
    <f-content-document
      slot-scope="data"
      :content="data.value"
    />
  </f-fetch-data>
`
});
```

##### index.md
```md
# Hello world
```
#### Running the project

To display run the project in your browser, you have to host the files in your local server. Easiest way to do it is to install [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en) and point it to your project folder.