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
      // em space
      saving: "   Saving...",
      saved: "●&nbsp;Saved&nbsp;locally"
    },
    timeout: null
  }),
  methods: {
    handleSave() {
      store.set(`${this.saveId}.editor`, this.value);
      this.state = "saving";
      this.timeout = setTimeout(() => (this.state = "saved"), 500);
    },
    handleRevert() {
      store.remove(`${this.saveId}.editor`);
      this.$emit("input", this.content);
      this.state = "idle";
    }
  },
  mounted() {
    const storedContent = store.get(`${this.saveId}.editor`);
    if (storedContent) {
      this.$emit("input", storedContent);
      this.state = "saved"
    }
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
      <a class="quaternary" @click="$global.$emit('edit')"><f-close-icon /></a>
      <div>
        <a
          v-if="state == 'saved'"
          class="quaternary"
          style="opacity: 0.5"
          @click="handleRevert"
        >Revert</a>
        <a
          class="quaternary"
          v-html="labels[state]"
          @click="handleSave"
        />
      </div>
    </div>
    `
};
