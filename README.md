# Fachwerk

Web framework for creating interactive learning materials.

There are thee main ways to getting started:

### **A** Write the content and play around with the content online

Just click around :)

### **B** Write and host locally

Set up three local files:

> 💾 You can [download the project]() from Fachwerk templates page.

##### index.html

```html
<html>
<head>

  <!-- Load CSS styles -->
  
  <link rel="stylesheet" href="https://designstem.github.io/framework/style.css">

</head>

<body>

  <!-- Load CSS styles -->
 
  <script src="https://designstem.github.io/framework/vendor.js"></script>

  <!-- Load index.js Javascript file. Note: type="module" is required! -->

  <script src="./index.js" type="module"></script>
  
  <!-- Set up a placholder where framework can display its content -->
  
  <div id="app"></div>

  <!-- Here could be a regular HTML content -->
  
</body>

</html>
```

##### index.js

```js
// Use Javascript module import to get initialization mixin, Vue components and utility functions

import Init from "https://designstem.github.io/framework/components/Init.js";
import * as components from "https://designstem.github.io/framework/framework.js";
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

  // Fetching the README.md and rendering it
  template: `                         
  <f-fetch-data url="./README.md">
    <f-content-document
      slot-scope="data"
      :content="data.value"
    />
  </f-fetch-data>
`
});
```

> ⚠️ To display run the project in your local browser, you have to host the files in your local server.
Easiest way to do it is to install [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en) and point it to your project folder.