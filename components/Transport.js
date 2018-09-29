export default {
  props: ["value"],
    template: `
    <div
      class="button_secondary"
      style="width: 1rem; justify-content: center;"
      @click="$emit('input', ! value)"
    >
      {{ value ? '❚❚' : '►' }}
    </div>
  `
}