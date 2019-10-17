## Formatting text

> This tutorial works best in edit mode <f-edit-icon  />

### Basic text

Let's start with a simple paragraph. Fachwerk's content is based on **Markdown**, a simple text format that is converted to HTML.

It supports **bold**, *italic* and you can use ***bold + italic*** or <mark>\<mark></mark> for text highlights, <kbd>kbd</kbd> keyboard reference, <var>var</var> for variables and `code` for code snippets.

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

# 1. Heading 1

## 2. Heading 2

### 3. Heading 3

#### 4. Heading 4

##### 5. Heading 5

<br>

### Big and small

Content can be made bigger and smaller using `<big>` and `<small>` tags:

# <big>Big header</big>

<big>Big text</big>

<small>Small text</small>


### Lists

Unordered list:

* Autobahn

* Radio-Aktivität

Ordered list:

1. Trans-Europa Express

2. Computerwelt

If you have subsequent content under list item you have to indent that content so it will be included to current list item:

1. Trans-Europa Express

  An important piece of new equipment used on the album was the Synthanorma Sequenzer, a customized 32-step 16-channel analog sequencer made for the band by Matten & Wiechers

2. Computerwelt

  The cover shows a computer terminal (apparently based on one made by the Hazeltine Corporation) displaying the heads of the four band members.


<br>

### Fact boxes

> Here is a fact for you.

It is the same as to use `<blockquote>` tag it in HTML.

### Collapsed fact boxes

<details>
	<summary>Click to see the fact</summary>
  
  Here is the fact: *Markdown is supported here*

</details>

### Tables

For simple tables, a following syntax can be used. Note that the table cells can contain additional formatting.

Name        | Born        | Profession
----------- | ----------- | ----------
Klaus       | `1926`      | Actor
Werner      | `1942`      | Director
  
See <f-link to="/f-table">`<f-table>`</f-link> component for more advanced table generation.

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