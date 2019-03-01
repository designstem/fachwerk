export default {
  description: `
Sidebars load can be either inline or load from a file.

<f-sidebar title="inline">

### Here is an inline sidebar.

</f-sidebar> 

...or load a from a file:

<f-sidebar title="../README.md" src="../README.md" />

<br><br>
`,
  props: {
    src: { default: '', type: String },
    title: { default: '', type: String },
    width: { default: '50vw', type: String },
  },
  data: () => ({ open: false }),
  template: `
    <span>
      <div @click.prevent="open = !open">
        <slot name="button">
          <a style="color: var(--blue); border-bottom: 1px dotted var(--blue); cursor: alias;">{{ title }}</a>
        </slot>
      </div>
      <div
        v-if="open"
        style="
          position: fixed;
          top: 0px;
          right: 0px;
          bottom: 0px;
          background: var(--white);
          border-left: var(--border-width) solid var(--primary);
          overflowY: auto;
          zIndex: 1000;
        "
        :style="{
          width: width,
          boxShadow: '-5px 0 10px rgba(0,0,0,0.1)'
        }"
      >
        <div
          @click="open = false"
          style="
            cursor: pointer;
            position: fixed;
            top: var(--base3);
            right: var(--base4);
            color: var(--primary);
            font-weight: 800;
        ">✕</div>
        <f-fetch v-if="src" :url="src">
          <f-content
            slot-scope="data"
            :content="data.value"
            type="document"
            style="padding: var(--base4) var(--base8) var(--base4) var(--base4)"
          />
        </f-fetch>
        <div style="padding: var(--base4) var(--base8) var(--base4) var(--base4)" v-if="!src && open">
          <slot />
        </div>
      </div>
</span>
  `
};
