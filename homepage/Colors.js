import Css from "../components/Css.js";

export default {
  mixins: [Css],
  template: `
  <div class="colors">
    <template v-for="c in [
    'purple', 
    'red',
    'yellow',

    'darkblue',
    'blue',
    'lightblue',

    'darkestgray',
    'darkergray',
    'darkgray',

    'gray',
    'lightgray', 
    'lightergray', 
  ]">
    <div :style="{
      background: 'var(--' + c + ')',
      borderRadius: '1000px'
    }"></div>
      <code style="
        color: var(--secondary);
        background: none;
        margin: 0.5rem 0 0 0;
        line-height: 1.4rem;"
      >
        var(--{{ c }})
        <br>
        color('{{ c }}')
      </code>
    </template>
</div>
`,
css: `
.colors {
  display: grid;
  grid-template-columns: 4rem 5fr 4rem 5fr 4rem 5fr;
  grid-template-rows: repeat(4, 4rem);
  grid-gap: 0.5rem;
}
@media (max-width: 900px) {
  .colors {
    grid-template-columns: 4rem 1fr;
    grid-template-rows: repeat(12, 4rem);
  }
}
`
}