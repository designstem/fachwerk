export default {
  tag: 'Data',
  example: `
Any component can send...

  <div
    class="button_tertiary"
    v-on:click="send(1)"
  >
  Send 1
  </div>
  
...and receive data
  
  <f-receive-data>
    <pre
      slot-scope="data"
      v-html="data.value"
    />
  </f-receive-data>
  `,
  props: {
    channel: { default: 'value', type: String}
  },
  data: () => ({ value: null }),
  mounted() {
    if (this.$global) {
      this.$global.$on(this.channel, value => this.value = value)
    }
  },
  template: `
    <div>
      <slot :value="value" />
    </div>
  `
}