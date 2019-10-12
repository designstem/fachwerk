## Start a new project

### First, the editor

Go to a Fachwerk example project with inline editor: 

<a class="primary" href="https://designstem.github.io/fachwerk_example" target="_blank">Open the editor</a> 

Then, click on **Edit** button and start editing the code.

Remember to click on **"Save locally"** button or use <kbd>Alt + s</kbd> keys regularily to **save your content to your browser**.  This means the contents will be available when you reload the page or visit the page in the next time in the same browser.

> **Your content changes are not available for other people visting the same webpage**. See <f-link to="/publishing-content">Publishing content to web</f-link> section how to publish content for everybody to see.

### Write content

#### Text formatting

Let's start with a text content. Fachwerk is based on Markdown, a simple text format that is automatically converted to HTML.

> See [Mastering Markdown](https://guides.github.com/features/mastering-markdown) guide for a complete reference of the syntax.

To format texts, use an asterisk `*` character:

`*italic*` gives you *italic*

`**bold**` gives you **bold**

`***highlight***` gives you a  ***highlight***

For advanced formatting, you will need to sprinke in some HTML tags:

`<var>variable</var>` gives you<var>variable</var>

`<strike>strikeout</strike>` gives you <strike>strikeout</strike>

`<kbd>Alt + s</kbd>` gives you <kbd>Alt + s</kbd>

#### Headings

To write headings, use a hash `#` character, up to 5 levels of headings is supported. So,

	# Heading 1

gives you first level heading:

<div style="opacity: 0.3">

# Heading 1

</div>

<br>

When you use **number** and **period** like `#### 1.` in the beginning of the heading, it will automatically turned into a bullet:

<div style="opacity: 0.3">

#### 1. Bullet

</div>

#### Ordered lists

Speaking of bullets: when you start a paragraph with **number** and **period** like `1.`, you will get a ordered list:

	1. Bullet
	2. Bullet

gives you

1. Bullet
2. Bullet


### Unordered lists

For unordered lists one can simply use asterisks: `*`:

	* Bullet
	* Bullet

gives you

* Bullet
* Bullet

### More formatting

> There are way more ways to format the content, see <f-link to="/formatting-text">Formatting content</f-link> guide.

<f-link class="tertiary" to="/add-2d-graphics">Let's add some 2D graphics</f-link>