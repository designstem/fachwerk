## Page setup and grid

> This tutorial works best in edit <f-edit-icon  /> and slides mode <f-slides-icon  />
  Also, turn on grid debugging by pressing <kbd>alt</kbd> + <kbd>g</kbd>

### Adding a grid

To separate the content into grid of rows and columns, separate the content with the single dash:

`-`

By default, grid columns have equal width

Row height is determined by the column with the highest content.

---

<f-card>Cell 1</f-card>

-

<f-card>Cell 2</f-card>

-

<f-card>Cell 3<br>Longer content</f-card>

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

<f-card>Cell 3<br>Longer content</f-card>

---

### Padding, gap, row height

To adjust the padding around cells, you can set `| padding:` parameter.  It accepts any CSS unit. To remove the padding, set it to `0`.

To adjust the gap between cells you can set `| gap:` parameter. It accepts any CSS unit. To remove the gap, set it to `0`.

To make rows to equal height, add a `| row:` parameter `1fr 1fr`. Number of `fr`'s depends how many rows you have.

---

| 1 1
| 2 3
| padding: 0
| gap: 0
| rows: 1fr 1fr

<f-image src="../images/example.jpg" />

-

<f-image src="../images/example.jpg" />

-

<f-image src="../images/example.jpg" />

---

### Padding for a single cell

Use `<section>` tag to bring back the padding to the particular cell.

---

| 1 1
| 2 3
| padding: 0
| gap: 0
| rows: 1fr 1fr

<f-image src="../images/example.jpg" />

-

<f-image src="../images/example.jpg" />

-

<section>

Look, I have plenty of padding here!

</section>

---

### More options

#### Height

By setting `| height`, the page will have particular height in document mode. In slides mode the height is fixed to `100vh` (full page height).

#### Theme

Setting `│ theme` will set the theme for the particular slide. Available themes are `light` (default), `dark`, `yellow` and `blue`.

#### Centered content

There is also a `&lt;center>` tag to set the cell contents horizontally and vertically centered.

---

| height: 50vh
| theme: dark

<center>

# Tschüß!

</center>


---

### Full reference

Here is a full list of page configuration options:

Key | Default | Description
---|---|---
`\| 1 2 3`<br>`\| 4 5 6`|`\| 1 2 3 …`|Define a content grid. Use `-` to separate columns 
`\| padding:`|`var(--base6)`|Padding around content. Set to `0` to remove padding 
`\| gap:`|`var(--base3)`|Gap between columns. Set to `0` to remove gap 
`\| theme:`|`light`|Slide theme, can be `light dark yellow blue`
`\| background:`||Slide background color or image url
`\| backgroundposition:`| `50% 50%` |Slide background image position
`\| tint:`|`0.3`|Slide background image darkening
`\| height:`|`auto`| Minimum content height for documents. For slides it is always `100vh`
`\| cols:`|`1fr 1fr ... 1fr`|CSS grid columns
`\| rows:`|`auto auto ... 1fr`|CSS grid rows
`\| id:`||Slide ID. Use `goto('id')` to navigate there
`\| section:`||Section ID. Use `goto('section')` to navigate there
`\| --variable:`||Css variable overrides

































