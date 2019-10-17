import { isurl, goto } from '../../../fachwerk.js'

export default {
  example: `Displays an internal or external link.

This link goes to local <f-link to="/f-scene">f-scene</f-link> documentaton route

This link goes to <f-link to="https://pudding.cool/2018/02/waveforms/">external site</f-link>

This link goes to <f-link to="props">Local slide</f-link> with ID or section \`props\`
`,
  props: {
    to: { default: '', type: [String, Number], description: 'Local route to navigate' },
  },
  methods: {
    goto,
    top() {
      window.scrollTo(0, 0);
    }
  },
  computed: {
    isRoute() {
      return this.to.startsWith('/')
    },
    isUrl() {
      return !this.to.startsWith('/') && isurl(this.to)
    },
    isId() {
      return !this.isRoute && !this.isUrl
    },
  },
  template: `
  <span>
    <router-link v-if="isRoute" :to="to" @click.native="top"><slot /></router-link>
    <span v-if="isUrl">
      <a :href="to" target="_blank">
        <slot />
      </a>
      <f-external-icon style="transform: translateY(0.25em);"/>
    </span>
    <a v-if="isId" @click="goto(to)" style="cursor: pointer"><slot /></a>
  </span>
  `
}