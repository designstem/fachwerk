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
      <a style="color: var(--blue); border-bottom: 1px dotted var(--blue); cursor: alias;" @click.prevent="open = !open">{{ title }}</a>
      <div v-if="open" style="
        position: fixed;
        top: 0px;
        right: 0px;
        bottom: 0px;
        background: var(--white);
        border-left: var(--border-width) solid var(--primary);
        overflowY: auto;
        box-shadow: calc(50vw * -1) 0 rgba(0,0,0,0.15);
        zIndex: 1000;
      "
      :style="{
        width: width,
        boxShadow: 'calc(100vw - ' + width + ' * -1) 0 rgba(0,0,0,0.15)'
      }">
        <div
          @click="open = false"
          style="
            cursor: pointer;
            position: fixed;
            top: 1rem;
            right: 1rem;
            color: var(--primary);
        ">✕</div>
        <f-fetch v-if="src" :url="src">
          <f-content
            slot-scope="data"
            :content="data.value"
            style="font-size: 0.8em;"
            type="document"
          />
        </f-fetch>
        <div style="padding: var(--content-padding)" v-if="!src && open">
          <slot />
        </div>
      </div>
</span>
  `
};
