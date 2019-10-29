# Fachwerk

Fachwerk is a Javascript framework for creating interactive learning materials in the browser.

Content can be authored in a Markdown format, with custom additions such as dynamic layouts, interactivity and wide range of HTML-like components.

Fachwerk is based on [VueJS](https://vuejs.org) and the latest browser technologies such as Javascript imports / exports and CSS variables. It provides an easy onboarding without any complex tooling or setup. Yes, this means 🦄 **there is no build step**.

## Links

🏰 <a href="https://designstem.github.io/fachwerk">Homepage</a>

📖 <a href="https://designstem.github.io/fachwerk/docs">Documentation</a>

🚀 <a href="https://designstem.github.io/fachwerk/docs/#/start-a-new-project"> Quickstart guide</a>

## Custom start

Easiest way to have a custom Fachwerk application is to create a three files in your machine

##### 1. index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      href="https://designstem.github.io/fachwerk/fachwerk.css"
    />
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
# Hello 🌏

<f-scene grid>
  <f-circle />
</f-scene>
```

To run the project in your browser, you have to host the files in your local server. Easiest way to do it is to install [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en) and point it to your project folder. You can also use the commandline tools of your choice.

## Customizing the framework

In many cases the framework needs additional customization. You can start with small tweaks, add custom components or use set up your project in whole custom way.

### Custom configuration

Fachwerk has several setup options you can pass in as an object:

```
fachwerk({ el: "#fachwerk" })
```

| key          | default        | options                                | description                                          |
| ------------ | -------------- | -------------------------------------- | ---------------------------------------------------- |
| `el`         | `"#fachwerk"`  |                                        | HTML tag id the content goes into                    |
| `src`        | `"./index.md"` |                                        | Path of the Markdown file, local path or web address |
| `title`      | `"Fachwerk"`   |                                        | Title of the project. Used for local storage ID      |
| `edit`       | `"hide"`       | `"none"` `"hide"` `"show"`             | Show integrated live editor?                         |
| `menu`       | `"hide"`       | `"none"` `"hide"` `"show"`             | Show navigation menu?                                |
| `type`       | `"document"`   | `"slides"` `"document"`                | Presentation mode                                    |
| `typebutton` | `"show"`       | `"none"` `"show"`                      | Show presentation mode switcher?                     |
| `home`       | `""`           |                                        | Home navigation URL, local file path or web address  |
| `theme`      | `"light"`      | `"light"` `"dark"` `"blue"` `"yellow"` | Global theme                                         |
| `style`      | `{}`           |                                        | Add custom styles                                    |
| `components` | `{}`           |                                        | Add custom components                                |
| `utils`      | `{}`           |                                        | Add custom utilities                                 |

### Custom styles

Fachwerk supports custom style overrides, they are especially helpful setting global CSS variables.

Here is how to do it:

##### index.js

```js
fachwerk({ styles: { "--content-padding": "var(--base10)" } });
```

### Custom components

Fachwerk builtin components inside Markdown files are very powerful, but they can can be to long and unwieldy to be handled inside content.

The solution is to extract complex components to separate component files. They can still communicate with builtin components and document with global state and events.

Here is how to do it:

##### index.js

```js
import { fachwerk } from "https://designstem.github.io/fachwerk/fachwerk.js";

import CustomComponent from "./CustomComponent.js";

fachwerk({ components: { CustomComponent } });
```

##### CustomComponent.js

```js
import { utils } from "https://designstem.github.io/fachwerk/fachwerk.js";

export default {
  methods: { ...utils },
  template: `<div>Hey, I am a custom component</div>`
};
```

##### index.md

```md
# Hallo Welt

<custom-component />
```

See VueJS [component documentation](https://vuejs.org/v2/guide/components.html) for more details.

### Custom utilities

Sometimes it might be useful to have your own set of utility functions to be available for templates, here is how to add them to framework:

##### utils.js

```js
export const add = (a, b) => a + b;
```

##### index.js

```js
import { fachwerk } from "https://designstem.github.io/fachwerk/fachwerk.js";

import * as utils from "./utils.js";

fachwerk({ utils });
```

### Custom project

There are cases you want a full control how the framework is set up. Just replace your index.js with the following:

##### index.js

```js
import {
  Vue,
  components,
  utils
} from "https://designstem.github.io/fachwerk/fachwerk.js";

// Register components globally

for (const name in components) {
  Vue.component(name, components[name]);
}

// If you have custom components,
// install them here:
//
// import CustomComponent from "./CustomComponent.js";
// Vue.component("custom-component", CustomComponent);

// Set up a global event bus

Vue.prototype.$global = new Vue({ data: { state: {} } });

// Initialize VueJS

new Vue({
  // HTML tag id the content goes into

  el: "#fachwerk",

  methods: {
    // Allow utils to be used in templates

    ...utils

    // Custom methods go here
  },

  // Reactive data will be here
  // Note that it will be only accessible
  // in the template, not inside Markdown
  // Use get() / set() helpers to
  // pass values to index.md content

  data: {},

  // In the main template fetch and
  // display index.md. This template
  // can be totally custom and can
  // mix and match Fachwerk and custom
  // components and utilities.

  template: `
  <f-fetch src="./index.md" v-slot="{ value: content }">
    <f-content-editor :content="content" />
  </f-fetch>
  `
});
```
