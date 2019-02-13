# Fachwerk

Fachwerk is a Javascript framework for creating interactive learning materials in the browser.

Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components.

Fachwerk is based on [VueJS](https://vuejs.org) and the latest browser technologies such as Javascript imports / exports and CSS variables. It provides an easy onboarding without any complex tooling or setup. Yes, this means ***there is no build step*** 🦄

## Getting started

Easiest way to have a custom Fachwerk application is to create a three files in your machine

##### 1. index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://designstem.github.io/fachwerk/fachwerk.css" />
  </head>
  <body>
    <div id="fachwerk"></div>
    <script type="module" src="./index.js"></script>
  </body>
</html>
```

##### 2. index.js

```js
import { fachwerk } from "https://designstem.github.io/fachwerk/fachwerk.js";
fachwerk();
```

##### 3. index.md

```md
# Hello world

<f-scene grid>
  <f-circle />
</f-scene>
```

To run the project in your browser, you have to host the files in your local server. Easiest way to do it is to install [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en) and point it to your project folder. You can also use the commandline tools of your choice.

## Customizing the framework

In many cases the framework needs additional customization. You can start with small tweaks, add custom components or use set up your project in whole custom way

### Custom configuration

Fachwerk has several options for initialization:

    fachwerk({
      el: "#fachwerk",      // Name of the html id the content goees
      url: "./index.md",    // Name and path of the main Markdown file
      editor: "show",       // Options for live editor, "none", "hide", "show"
      components: {},       // See below
    })
    
### Custom components

Fachwerk builtin components inside Markdown files can express quite complex interactions, but they can often get too long and unwieldy to be handled inside content.

The solution is to extract complex components to separate component file. They can still communicate with builtin components and document with global state and events (see the respective documentation in 🔮**Advanced Guides** in the [documentation](/docs)).

Here is how to do it:

##### index.js

```js
import { fachwerk, utils } from "https://designstem.github.io/fachwerk/fachwerk.js";

const CustomComponent = {
  methods: { ...utils },
  template: `<div>Hey, I am custom component</div>`
};

fachwerk({ components: { CustomComponent } });
```

##### index.md

```md
# My content

<custom-component />
```

See VueJS [component documentation](https://vuejs.org/v2/guide/components.html) for more details.

### Custom project

There are may cases you want a full control how the framework is set up. Here is more or less how `fachwerk()` function works, you can do the same for your project, just replace your index.js with this:

##### index.js

```js

// Import Vue library, builtin components and utils:

import { Vue, components, utils } from "https://designstem.github.io/fachwerk/fachwerk.js";

// Register components globally

for (const name in components) {
  Vue.component(name, components[name]);
}

// Set up global event bus

Vue.prototype.$global = new Vue({ data: { state: {} } });

// Initialize VueJS

new Vue({

  // HTML element id where content goes
  el: "#fachwerk",
  
  // Allow utils to be used in templates
  methods: { ...utils },

  // Reactive data will be here
  // Note that it will be only accessible
  // in the template, not inside Markdown
  // Use get() / set() utils to 
  // pass values to Markdown

  data: {},

  // In the main template fetch and
  // display index.md

  template: `
  <f-fetch url="./index.md">
    <f-content
      slot-scope="{ value }"
      :content="value"
    />
  </f-fetch>
`
});