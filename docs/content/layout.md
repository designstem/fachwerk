<f-pager />

# Layout and grid

To separate the content into rows and columns, separate the content with the single dash:

`-`

---

<f-pager />

<f-card>Cell 1</f-card>

-

<f-card>Cell 2</f-card>

-

This is standard layout: content is in one row with columns of equal width.

---

<f-pager />

| 1 1 4
| 1 1 4
| 2 3 4
| 2 3 4

<f-card>Cell 1</f-card>

-

<f-card>Cell 2</f-card>

-

<f-card>Cell 3</f-card>

-

Content can be arranged into more complex layouts by drawing a grid of numbers.

---

<f-pager />

| height: fit 

| 1 1 4
| 1 1 4
| 2 3 4
| 2 3 4

<f-card>Cell 1</f-card>

-

<f-card>Cell 2</f-card>

-

<f-card>Cell 3</f-card>

-

By default the grid rows are as high as the content inside them. By setting a `│ height: fit` argument to the slide, the grid contents will be stretched to full height.

---

<f-pager />

| height: fit 

| 1 1 4
| 1 1 4
| 2 3 4
| 2 3 4

<f-image src="../images/example.jpg" />

-

<f-image src="../images/example.jpg" />

-

<f-image src="../images/example.jpg" />

-

`│ height: fit` is also useful for building image galleries since `f-image` component stretches to the cell height by default.

---

<f-pager />

| height: fit 
| gap: none

| 1 1 4
| 1 1 4
| 2 3 4
| 2 3 4

<f-image src="../images/example.jpg" />

-

<f-image src="../images/example.jpg" />

-

<f-image src="../images/example.jpg" />

-

<section>
Setting <code>│ gap: none</code> will lose the spacing between cells. Use <code>section</code> tag to set padding for a single cell.
</section>

---

<f-pager />

| height: fit 
| gap: none
| padding: none

| 1 1 4
| 1 1 4
| 2 3 4
| 2 3 4

<f-image src="../images/example.jpg" />

-

<f-image src="../images/example.jpg" />

-

<f-image src="../images/example.jpg" />

-

<section>
Add <code>│ padding: none</code> and you will get the content going on edges of the slide.
</section>

---

<f-pager />

| height: fit 
| gap: none
| padding: none
| theme: dark

| 1 1 4
| 1 1 4
| 2 3 4
| 2 3 4

<f-image src="../images/example.jpg" />

-

<f-image src="../images/example.jpg" />

-

<f-image src="../images/example.jpg" />

-

<section>
Setting <code>│ theme: dark</code> will set the theme for the particular slide. See the <code>f-theme</code> for all theme options.
</section>

---

<f-pager />

| height: fit 
| gap: none
| padding: none
| theme: dark

| 1 1 2


<center>

# Tschüß!

</center>

-

<section>
There is also a <code>&lt;center></code> tag to set the cell contents horizontally and vertically centered.
</section>