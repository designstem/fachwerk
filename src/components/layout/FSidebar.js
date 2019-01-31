export default {
  description: `
Description to be written.

<f-sidebar src="../README.md"><div class="button_primary">Want to get started?</div></f-sidebar>

Or you really want to <f-sidebar src="../README.md">get started</f-sidebar>?  
`,
  props: {
    src: { default: '', type: String },
    width: { default: '50vw', type: String },
  },
  data: () => ({ open: false }),
  template: `
    <span>
      <a style="color: var(--blue); border-bottom: 2px dotted var(--blue); cursor: help;" @click.prevent="open = !open"><slot /></a>
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
        ">✕</div>
        <f-fetch-data :url="src">
          <f-content-document
            slot-scope="data"
            :content="data.value"
            style="font-size: 0.8em;"
          />
        </f-fetch-data>
      </div>
</span>
  `
};
