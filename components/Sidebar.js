export default {
  props: ["src"],
  data: () => ({ content : '', open: false}),
  mounted() {
    fetch(this.src)
      .then(res => res.text())
      .then(content => this.content = content)
  },
  template: `
    <span>
      <a style="color: var(--blue); border-bottom: 2px dotted var(--blue); cursor: help;" @click.prevent="open = !open"><slot /></a>
      <div v-if="open" style="
        position: fixed;
        top: 5rem;
        right: 0px;
        bottom: 0px;
        width: 50vw;
        background: var(--white);
        border-left: var(--border-width) solid var(--primary);
        overflowY: auto;
      ">
        <div
          @click="open = false"
          style="
            cursor: pointer;
            position: fixed;
            top: calc(5rem + 1rem);
            right: 1rem;
        ">✕</div>
        <content-document style="font-size: 0.8em;" :content="content" />
      </div>
</span>
  `
};
