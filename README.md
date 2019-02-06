# Fachwerk

Fachwerk is a Javascript framework for creating interactive learning materials in the browser.

### For content authors

Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components.

### For developers

Fachwerk is based on [VueJS](https://vuejs.org) and the latest browser technologies such as Javascript imports / exports and CSS variables. It provides an easy onboarding without any complex tooling or setup. Yes, this means ***there is no build step*** 🦄

## Getting started

Create three files in the folder of you local machine:

##### index.html

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Load CSS styles -->
  <link rel="stylesheet" href="https://designstem.github.io/fachwerk/styles.css">
</head>

<body>  
  <!-- Set up a placholder where framework can display its content -->
  <div id="app"></div>  
  <!-- Load main Javascript file index.js. Note: type="module" is required! -->
  <script src="./index.js" type="module"></script>
</body>

</html>
```

##### index.js

```js
// Use Javascript imports to get Vue library, framework initialization mixin, components and utility functions

import { Vue } from "https://designstem.github.io/fachwerk/vendor.js";
import { Init } from "https://designstem.github.io/fachwerk/mixins.js";
import * as components from "https://designstem.github.io/fachwerk/components.js";
import * as utils from "https://designstem.github.io/fachwerk/utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

new Vue({
  // Attaching Vue to <div id="app"></div>
  el: "#app",

  // Adding a mixin to initialize the framework
  mixins: [Init],

  // Making utilities accessible to templates
  methods: { ...utils },

  // Fetching the index.md and rendering it
  template: `                         
  <f-fetch url="./index.md">
    <f-content
      slot-scope="data"
      :content="data.value"
    />
  </f-fetch>
`
});
```

##### index.md
```md
# Hello world

<f-scene grid>
  <f-circle />
</f-scene>
```
#### Running the project

To run the project in your browser, you have to host the files in your local server. Easiest way to do it is to install [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en) and point it to your project folder. You can also use the commandline tools of your choice.

> Note that the framework is tested only in the latest Chrome browser, it *might* work also on other evergreen browsers.
