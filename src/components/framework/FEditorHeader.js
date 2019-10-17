import { store } from "../../../fachwerk.js";

export default {
  props: {
    value: { default: "", type: String },
    content: { default: "", type: String },
    saveId: { default: "fachwerk", type: String }
  },
  data: () => ({
    state: "idle",
    labels: {
      idle: " Save locally",
      reverted: " Save locally",
      // em space
      saving: "   Saving...",
      saved: "●&nbsp;Saved&nbsp;locally"
    },
    timeout: null
  }),
  computed: {
    isRevertable() {
      const storedContent = store.get(`${this.saveId}.editor`);
      return storedContent && storedContent !== this.content;
    }
  },
  methods: {
    handleSave() {
      store.set(`${this.saveId}.editor`, this.value);
      this.state = "saving";
      this.timeout = setTimeout(() => (this.state = "saved"), 500);
    },
    handleRevert() {
      store.remove(`${this.saveId}.editor`);
      this.$emit("input", this.content);
      this.state = "reverted";
    }
  },
  mounted() {
    if (this.$global) {
      this.$global.$on("save", () => this.handleSave());
      this.$global.$on("revert", () => this.handleRevert());
    }
  },
  template: `
    <div style="
      height: var(--base6);
      padding: 0 var(--base);
      background: var(--paleblue);
      display: flex;
      align-items: center;
      justify-content: space-between;
    ">
      <a
        class="quaternary"
        @click="$global.$emit('edit')"
        title="Close editor"
      ><f-close-icon /></a>
      <div>
        <a
          v-if="isRevertable && state !== 'reverted'"
          class="quaternary"
          style="opacity: 0.5"
          @click="handleRevert"
          title="Revert to original content"
        >Revert</a>
        <a
          class="quaternary"
          v-html="labels[state]"
          @click="handleSave"
          title="Save content [alt + s]"
        />
      </div>
    </div>
    `
};
