# Writing content

### Basic text

Let's start with a simple paragraph. Fachwerk's content is based on **Markdown**, a simple text format that is converted to HTML.

It supports **bold**, *italic* and you can use ***bold + italic*** or <mark>\<mark></mark> for text highlights, <kbd>kbd</kbd> keyboard reference, <var>var</var> for variables and `code` for code snippets.

### Alternative text

~Alternatively, texts can also be formatted to have a **different**, a more *classy* look.~

~This format is meant for longer texts, but note that you have to will have to mark each paragraph separately with a tilde character.~

### Links

Links in the text are automatically clickable:

https://help.github.com/articles/basic-writing-and-formatting-syntax/ 

To add a custom link title, use a following syntax:

```
Here is the link about [Markdown](https://help.github.com/articles/basic-writing-and-formatting-syntax/)
```

Here is the link about [Markdown](https://help.github.com/articles/basic-writing-and-formatting-syntax/)

<br>

### Headings

For headings use the following syntax:

```
# Heading 1
```

It is the same as to write it in HTML:

```
<h1>Heading 1</h1>
```

We support up to five levels of headings:

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5

<br>

### Bullets

Headings can also have bullets:

```
### **B**Bullets
```

Is the same as to write it in HTML:

```
<h1><span class="bullet">1</span>Heading</h1>
```

Lets get down to it:

# **1**Heading 1
## **2**Heading 2
### **3**Heading 3
#### **4**Heading 4
##### **5**Heading 5

<br>

### Big and small

Content can be made bigger and smaller using `<big>` and `<small>` tags:

<big>Big text</big>

<small>Small text</small>

All textual content can be made bigger and smaller. You also go `<big><big><big>` and beyond:

# <big><big><big>Heading</big></big></big>

### Lists

Unordered list:

  * Autobahn
  * Radio-Aktivität

Ordered list:

  1. Trans-Europa Express
  2. Computerwelt

<br>

### Fact boxes

> Here is a fact for you.

It is the same as to use `<blockquote>` tag it in HTML.

### Collapsed fact boxes

<details>
	<summary>Click to see the fact</summary>
  
  Here is the fact: *Markdown is supported here*

</details>

### Variables

Variables can be marked as such: <var>variable</var>.

There is a range of colors available for `<var>` tags: <var class="orange">orange</var> <var class="yellow">yellow</var> <var class="blue">blue</var> <var class="purple">purple</var> <var class="blue">blue</var> <var class="green">green</var> <var class="gray">gray</var>.

### Code

For code snippets inside text use `this format`.

For longer block of code, one can use following format:

```
longer
  code
    blocks
```

### Terminal output

Terminal output can be formatted using `output` tag:

<output>Compiling results...</output>

Additional formatting can be added using color classes:

<output>
<span class="gray">Gray</span> <span class="green-bg"> green </span> <span class="red-bg"> red </span>
</output>