# Working with grid

Here is a simple grid system using <a href="https://learncssgrid.com/" target="_blank">CSS grid</a> and CSS variables.

### Default grid

<div class="grid" style="height: 50vh; overflow: auto">
  <f-card>Column 1</f-card>
  <f-card>Column 2</f-card>
</div>

<br>

### Custom columns

<div
  class="grid"
  style="--cols: 1fr 3fr; height: 50vh; overflow: auto">
  <f-card>Column 1</f-card>
  <f-card>Column 2</f-card>
</div>

<br>

### Custom rows

<div
  class="grid"
  style="--rows: 1fr 2fr;"
>
  <f-card>Column 1</f-card>
  <f-card>Column 2</f-card>
  <f-card>Column 3</f-card>
  <f-card>Column 4</f-card>
</div>

<br>

### Custom gap / gutter

<div class="grid" style="--gap: 1px; height: 50vh; overflow: auto"">
  <f-card>Column 1</f-card>
  <f-card>Column 2</f-card>
</div> 

<br>

### Horizontal rules

<div class="grid" style="--cols: 1fr; --rows: 1fr 3px 1fr">
  <f-card>Column 1</f-card>
  <f-hr />
  <f-card>Column 2</f-card>
</div>

<br>

### Vertical rules

<div class="grid" style="--cols: 1fr 3px 1fr; height: 50vh; overflow: auto"">
  <f-card>Column 1</f-card>
  <f-vr />
  <f-card>Column 2</f-card>
</div>
