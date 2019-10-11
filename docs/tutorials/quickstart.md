# Quickstart

## Start a new project

Go to a playground https://designstem.github.io/fachwerk_example

Click on **Edit** button on the corner and click on the integrated editor.

Remember to click on **"Save locally"** button or use <kbd>Alt + s</kbd> keys regularily to **save your content to your browser**.  This means the contents will be available when you reload the page or visit the page in the next time in the same browser.

> **Your content changes are not available for other people visting the same webpage**. See <f-link to="/publishing-content">Publishing content to web</f-link> section how to publish content for everybody to see.

## Writing content

### Text formatting

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

### Headings

To write headings, use a hash `#` character, up to 5 levels of headings is supported. So,

	# Title

gives you first level heading:

# Title


When you use **number** and **period** like `#### 1.` in the beginning of the heading, it will automatically turned into a bullet:

#### 1. Bullet

### Ordered lists

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

### Links

***TBD***

### Images

***TBD***

### More formatting

> There are way more ways to format the content, see <f-link to="/formatting-content">Formatting content</f-link> guide.

---

## Adding graphics

Enough of text, let's add some 2D graphics. Fachwerk offers several graphic components, suitable for graph drawing, vector art and bitmap generation.

### Drawing graphs

#### Point

Let's start with a simple 2D scene and draw a simple **point**. We draw using HTML-like tags, but they are custom, Fachwerk tags, starting with `f-`.

```
<f-scene>
  <f-point />
</f-scene>
```

> Note that `<f-point />` is a shorthand for longer code `<f-point></f-point>`. We use the short syntax in all the examples.

We get the following graph:

<f-scene grid>
  <f-point />
</f-scene>


Not much of a looker but you can probably guess the coordinate system alread: we are using standard <var class="gray">cartesian coordinate system</var> for graph drawing. 

Let's add more **points** to the graph with coordinates to verify we have figured our where <var>x</var> and <var class="green">y</var> are in the graph.

```
<f-scene grid>
  <f-point position="-1 -1" />
  <f-point position=" 1 -1" />
  <f-point position="-1  1" />
  <f-point position=" 1  1" />
</f-scene>
```

For specifying a set of multiple points, there is actually a shortcut, we can draw multiple points in one go by specifing `position` attribute:

```
<f-scene grid>
  <f-point position="-1 -1, 1 -1, -1 1, 1 1" />
</f-scene>
```

So we get the following:

<f-scene grid>
  <f-point position="-1 -1" />
  <f-point position=" 1 -1" />
  <f-point position="-1  1" />
  <f-point position=" 1  1" />
</f-scene>

#### Line

Time to draw a **line** on the graph!.

```
<f-scene grid responsve>
  <f-line points="-1 -1, 1 1" />
</f-scene>
```

This code gives us the line below. 

<f-scene grid>
	<f-line points="-1 -1, 1 1" />
</f-scene>
