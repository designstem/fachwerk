# Writing content

### Basic text

Let's start with a simple paragraph. Fachwerk's content is based on **Markdown**, a simple text format that is converted to HTML.

It supports **bold**, *italic* and ~strikeout~ text. One can also add HTML tags inside content such as <sub>sup</sub> HTML <sup>sup</sup> etc.

<br>

### Highlights

You can use <kbd>kbd</kbd> keyboard reference, <mark>mark</mark> for highlighted text and <var>var</var> for variables.

<br>

### Links

Links in text are automatically clickable:

https://help.github.com/articles/basic-writing-and-formatting-syntax/ 

To add a custom link title, use a following syntax:

```
Here is the link about [Markdown](https://help.github.com/articles/basic-writing-and-formatting-syntax/)
```

Here is the link about [Markdown](https://help.github.com/articles/basic-writing-and-formatting-syntax/)

<br>

### Headers

For headers use the following syntax:

```
# Header 1
```

It is the same as to write it in HTML:

```
<h1>Header 1</h1>
```

We support up to five levels of headers:

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5

<br>

### Bullets

Headers can also have bullets:

```
### **B**Bullets
```

Is the same as to write it in HTML:

```
<h1><span class="bullet">1</span>Header</h1>
```

Lets get down to it:

# **1**Header 1
## **2**Header 2
### **3**Header 3
#### **4**Header 4
##### **5**Header 5

Adding images is currently tricky, we rely on complex syntanx like `![](image_link_here.jpg)` but we are working on a simpler alternative.

<br>

### Lists

Unordered list:

  * Autobahn
  * Radio-Aktivität

Ordered list:

  1. Trans-Europa Express
  2. Computerwelt

<br>

### Block quotes

> Why so *Postfaktisch*? Here is a fact for you.

It is the same as to use `<blockquote>` tag it in HTML.

<br>

### Code

For code snippets inside text use `this format`.

For longer block of code, one can use following format:

```
longer
blocks
of code
```
