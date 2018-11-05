export default {
  tag: 'Experimental',
  description: "A simple play / pause button, meant to be used with v-model",
  example: `
<Transport v-model="someVariable" />
  `,
  props: { 
    value: { default: false }
  },
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