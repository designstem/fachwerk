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

### Block quotes

> Why so *Postfaktisch*? Here is a fact for you.

It is the same as to use `<blockquote>` tag it in HTML.

<br>

### Code

For code snippets inside text use `this format`.

For longer block of code, one can use following format:

```
longer
  code
    blocks
```

### Tables

Tables can be created with several methods:
  
#### Text format

For simple tables, a following syntax can be used. Note that the table cells can contain additional formatting.

Name        | Born
----------- | -----------
Klaus       | `1926`
Werner      | `1942`  

<br>
  
#### Component format

When table data is coming from another datasorce, it makes sense to use a dedicated `<f-table>` component that accepts data as a Javascript collection `:rows`:

<f-table :rows="[
  { name: 'Klaus', born: '`1926`' },
  { name: 'Werner', born: '`1942`' }
]"/>

<br>
  
#### HTML format

There is also a classic HTML table format available:
<table>
  <thead>
    <th>Name</th>
    <th>Born</th>
  </thead>
  <tbody>
    <tr>
      <td>Klaus</td>
      <td><code>1926</code></td>
    </tr>
    <tr>
      <td>Werner</td>
      <td><code>1942</code></td>
    </tr>
  </tbody>
</table>
