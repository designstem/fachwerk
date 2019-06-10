# Typography

Text|Font|Size
---|---|---
Main text|[IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans?selection.family=IBM+Plex+Sans)|16px
~Emphasized text~|[IBM Plex Serif](https://fonts.google.com/specimen/IBM+Plex+Serif)|16.8px
`Monospaced text`|[Cousine](https://fonts.google.com/specimen/Cousine)|14px

# Colors

A compact set of useful colors are available as CSS variables and Javascript functions

### Backgrounds

<div class="grid" style="--cols: 1fr 1fr; font-family: var(--font-mono); font-size: 0.9em; line-height: 1.3em; color: var(--gray);">
<div v-for="c in colors()">
<f-card :background="color(c)"><h2>&nbsp;</h2></f-card>
<br>
color('{{ c }}')<br>
{{ color(c) }}<br>
</div>
</div>

### Borders

<div class="grid" style="--cols: 1fr 1fr; font-family: var(--font-mono); font-size: 0.9em; line-height: 1.3em; color: var(--gray);">
<div v-for="c in colors()">
<f-card :border="color(c)" background><h2>&nbsp;</h2></f-card>
<br>
color('{{ c }}')<br>
{{ color(c) }}<br>
</div>






















































