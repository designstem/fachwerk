## Grid

A <a href="https://learncssgrid.com/" target="_blank">CSS grid</a> and CSS variables based grid system.

<mark>Default</mark>

<div class="grid">
  <f-card title="A" />
  <f-card title="B" />
</div>

<br /><br />

<mark>Custom columns</mark>

<div class="grid" style="--cols: 1fr 3fr;">
  <f-card title="A"/>
  <f-card title="B"/>
</div>

<br /><br />

<mark>Custom rows</mark>

<div class="grid" style="--rows: 1fr 2fr;">
  <f-card title="A"/>
  <f-card title="B"/>
  <f-card title="C"/>
  <f-card title="D"/>
</div>

<br /><br />

<mark>Custom gap</mark>

<div class="grid" style="--gap: 1px;">
  <f-card title="A"/>
  <f-card title="B"/>
</div> 

<br /><br />

<mark>Horizontal Rules</mark>

<div class="grid" style="--cols: 1fr; --rows: 1fr 3px 1fr">
  <f-card title="A"/>
  <f-hr />
  <f-card title="B"/>
</div>

<br /><br />

<mark>Vertical Rules</mark>

<div class="grid" style="--cols: 1fr 3px 1fr">
  <f-card title="A"/>
  <f-vr />
  <f-card title="B"/>
</div>
