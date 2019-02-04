# Layout and grid

## Draw the grid by the numbers

If you separate the content using separator

`-`

the content before and after separator will be arranged into columns. By default the layout will have a *one row of columns with equal width*.

To organize content into different layouts you can edit the following mini-layout:

| 1 1 1
| 2 2 3
| 4 5 5
| 6 6 6


All the content so far was **Column 1**...

-

<f-card>Column 2</f-card>

-

<f-card>Column 3</f-card>

-

<f-card>Column 4</f-card>
-

<f-card>Column 5</f-card>

-

...here starts the **Column 6**.

## HTML grid

Fot more customizable layouts there a more classical grid system available, built on <a href="https://learncssgrid.com/" target="_blank">CSS grid</a> and CSS variables.

#### Default grid

<div class="grid" style="--gap: var(--base3);">
  <f-card>Column 1</f-card>
  <f-card>Column 2</f-card>
</div>

<br>

#### Custom columns

<div
  class="grid"
  style="--cols: 1fr 3fr; --gap: var(--base3);">
  <f-card>Column 1</f-card>
  <f-card>Column 2</f-card>
</div>

<br>

#### Custom rows

<div
  class="grid"
  style="--rows: 1fr 2fr; --gap: var(--base3);"
>
  <f-card>Column 1</f-card>
  <f-card>Column 2</f-card>
  <f-card>Column 3</f-card>
  <f-card>Column 4</f-card>
</div>

<br>

### Custom gap / gutter

<div class="grid" style="--gap: 1px;">
  <f-card>Column 1</f-card>
  <f-card>Column 2</f-card>
</div> 

<br>

### Horizontal rules

<div class="grid" style="--cols: 1fr; --rows: 1fr 3px 1fr; --gap: var(--base3);">
  <f-card>Column 1</f-card>
  <f-hr />
  <f-card>Column 2</f-card>
</div>

<br>

### Vertical rules

<div class="grid" style="--cols: 1fr 3px 1fr; --gap: var(--base3);">
  <f-card>Column 1</f-card>
  <f-vr />
  <f-card>Column 2</f-card>
</div>
