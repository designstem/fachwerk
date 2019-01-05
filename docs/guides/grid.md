# Working with grid

Here is a simple grid system using <a href="https://learncssgrid.com/" target="_blank">CSS grid</a> and CSS variables.

### Default grid

<div class="grid" style="height: 50vh; overflow: auto">
  <code>Column 1</code>
  <code>Column 2</code>
</div>

<br>

### Custom columns

<div
  class="grid"
  style="--cols: 1fr 3fr; height: 50vh; overflow: auto">
  <code>Column 1</code>
  <code>Column 2</code>
</div>

<br>

### Custom rows

<div
  class="grid"
  style="--rows: 1fr 2fr;"
>
  <code>Column 1</code>
  <code>Column 2</code>
  <code>Column 3</code>
  <code>Column 4</code>
</div>

<br>

### Custom gap / gutter

<div class="grid" style="--gap: 1px;">
  <code>Column 1</code>
  <code>Column 2</code>
</div> 

<br>

### Horizontal rules

<div class="grid" style="--cols: 1fr; --rows: 1fr 3px 1fr">
  <code>Column 1</code>
  <f-hr />
  <code>Column 2</code>
</div>

<br>

### Vertical rules

<div class="grid" style="--cols: 1fr 3px 1fr">
  <code>Column 1</code>
  <f-vr />
  <code>Column 2</code>
</div>
