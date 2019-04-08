#### Hello I am a menu!

<p />

<div class="grid">
<f-section-card title="One" section="one">Section one</f-section-card>
<f-section-card title="Two" section="two">Section two</f-section-card>
<f-section-card
  title="Test"
  section="test"
  :completed="get('completed')"
>{{ get('completed') ? 'Test done' : 'Do a test!' }}</f-section-card>
</div>