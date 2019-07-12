# Layout and grid

To separate the content into grid of rows and columns, separate the content with the single dash:

`-`

### Default layout

This is standard layout: grid cells are in one row with columns of equal width.

---

<f-card>Cell 1</f-card>

-

<f-card>Cell 2</f-card>

-

<f-card>Cell 3</f-card>

---

### Custom layouts

Content can be arranged into more complex layouts by drawing a grid of numbers.

---

| 1 1
| 2 3

<f-card>Cell 1</f-card>

-

<f-card>Cell 2</f-card>

-

<f-card>Cell 3</f-card>

---

### Gap between cells

To adjust the gap between cells you can set <code>| gap:</code> parameter. It accepts any CSS unit. To remove the gap, set it to `0`.

Note that contents of the cells can be anything, including `f-image`.

---

| gap: 0
| 1 1
| 2 3

<f-image src="../images/example.jpg" />

-

<f-image src="../images/example.jpg" />

-

<f-image src="../images/example.jpg" />

---

Use `<section>` tag to bring back the padding to the particular cell.

---

| gap: 0
| 1 1
| 2 3

<f-image src="../images/example.jpg" />

-

<f-image src="../images/example.jpg" />

-

<section>
Look, I have plenty of padding here!
</section>

---

### Padding around cells

To adjust the padding around cells you can set <code>| padding:</code> parameter. It accepts any CSS unit. To remove the padding, set it to `0`.

---

| gap: 0
| 1 1
| 2 3

<f-image src="../images/example.jpg" />

-

<f-image src="../images/example.jpg" />

-

<f-image src="../images/example.jpg" />

---

### More options

Setting <code>│ theme: dark</code> will set the theme for the particular slide. Available themes are `light` (default), `dark`, `yellow` and `blue.

There is also a <code>&lt;center></code> tag to set the cell contents horizontally and vertically centered.

---

| theme: dark
| height: 50vh

<center>

# Tschüß!

</center>


---

### Full reference

Here is a full list of page / slide configuration options:

Key | Default | Description
---|---|---
`\| 1 2 3`<br>`\| 4 5 6`|`\| 1 2 3 …`|Define a content grid. Use `-` to separate columns 
`\| padding:`|responsive|Padding around content. Set to `0` to remove padding 
`\| gap:`|responsive|Gap between columns. Set to `0` to remove gap 
`\| theme:`|`light`|Slide theme, can be `light dark yellow blue`
`\| background:`||Slide background color or image url
`\| tint:`|`0.3`|Slide background image darkening
`\| height:`|`100vh`|Minimum content height
`\| rows:`|`1fr 1fr ...`|CSS grid rows
`\| cols:`|`1fr 1fr ...`|CSS grid columns
`\| id:`||Slide ID. Use `goto('id')` to navigate there
`\| section:`||Section ID. Use `goto('section')` to navigate there
`\| style:`||Css styles applied to a slide, formatted as HTML inline styles `key: value; key: value`

































