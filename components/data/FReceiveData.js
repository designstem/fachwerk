export default {
  tag: 'Data',
  example: `
<p>Any component can send...</p>

<f-slider
  @input.native="e => send('value',e.target.value)"
/>

<div
  class="button_tertiary"
  @click="send('value',50)"
>
Set to 50
</div>

<p><br>...and receive data</p>

<f-receive-data>
  <pre
    slot-scope="data"
    v-html="data.value || 0"
  />
</f-receive-data>
  `,
  props: {
    channel: { default: 'value', type: String}
  },
  data: () => ({ value: null }),
  mounted() {
    if (this.$events) {
      this.$events.$on(this.channel, value => this.value = value)
    }
  },
  template: `
    <slot :value="value" />
  `
}