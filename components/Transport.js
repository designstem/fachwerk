export default {
  name: "Transport",
  description: "A simple play / pause button, meant to be used with v-model",
  example: `
<Transport v-model="playing" />
<Transport :value="true" />
<Transport :value="false" />
  `,
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
};