<dd>Default<dd>

<div class="grid">
  <f-card title="A" />
  <f-card title="B" />
</div>

<dd>Custom columns</dd>

<div class="grid" style="--cols: 1fr 3fr;">
  <f-card title="A"/>
  <f-card title="B"/>
</div>

<dd>Custom rows<dd>

<div class="grid" style="--rows: 1fr 2fr;">
  <f-card title="A"/>
  <f-card title="B"/>
  <f-card title="C"/>
  <f-card title="D"/>
</div>

<dd>Custom gap</dd>

<div class="grid" style="--gap: 1px;">
  <f-card title="A"/>
  <f-card title="B"/>
</div> 

<dd>Horizontal Rules</dd>

<div class="grid" style="--cols: 1fr; --rows: 1fr 3px 1fr">
  <f-card title="A"/>
  <f-hr />
  <f-card title="B"/>
</div>

<dd>Vertical Rules</dd>

<div class="grid" style="--cols: 1fr 3px 1fr">
  <f-card title="A"/>
  <f-vr />
  <f-card title="B"/>
</div>
