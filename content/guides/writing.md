# Markdown basics

Markdown is a simple text format that is converted to HTML automatically.

It supports **simple** *formatting*, ~striking~ text.

Links in text are automatically clickable https://help.github.com/articles/basic-writing-and-formatting-syntax/ and on can also use links with [custom text](https://help.github.com/articles/basic-writing-and-formatting-syntax/).

<mark>Headers</mark>

For headers use this format:

# Header

Is the same as to write it in HTML:

```
<h1>Header</h1>
```

We support up to five levels of headers:

## Header 2
### Header 3
#### Header 4
##### Header 5

<mark>Bullets</mark>

Headers can also have bullets 

# **1**Header

Is the same as to write it in HTML:

```
<h1><span class="bullet">1</span>Header</h1>
```

Lets get down to it:
## **2**Header 2
### **3**Header 3
#### **4**Header 4
##### **5**Header 5

Adding images is currently tricky, we rely on complex syntanx like `![](image_link_here.jpg)` but we are working on a simpler alternative.

For bulletpoints one can use

  * Simple
  * Unordered

and

  1. Ordered
  2. Lists

For codings there are markup for `shorter` and
```
longer
blocks
of code
```
Also, all <sub>all</sub> HTML <sup>tags</sup> are supported.