export default {
  description: `
Sidebars load can be either inline or load from a file.

<f-sidebar title="inline">

### Here is an inline sidebar.

</f-sidebar> 

...or load a from a file:

<f-sidebar title="Text from README.md" src="../README.md" />

<br><br>
`,
  props: {
    src: { default: '', type: String },
    title: { default: '', type: String },
    width: { default: '33vw', type: String },
    orientation: { default: 'right', type: String }
  },
  data: () => ({ open: false }),
  template: `
    <span>
      <span @click.prevent="open = !open">
        <slot name="button">
          <a style="color: var(--blue); border-bottom: 1px dotted var(--blue); cursor: alias;">{{ title }}</a>
        </slot>
      </span>
      <f-fade
        v-if="open"
        style="
          position: fixed;
          top: 0px;
          right: 0px;
          bottom: 0px;
          background: var(--white);
          overflowY: auto;
          zIndex: 10000000 !important;
        "
        :style="{
          width: width,
          boxShadow: (orientation == 'right' ? '-5px' : '5px') + ' 0 10px rgba(0,0,0,0.25)',
          right: orientation == 'right' ? 0 : '',
          left: orientation == 'left' ? 0 : '',
          borderLeft: orientation == 'right' ? 'var(--border-width) solid var(--primary)' : '',
          borderRight: orientation == 'left' ? 'var(--border-width) solid var(--primary)' : '',
        }"
      >
        <a
          @click="open = false"
          class="quaternary"
          style="
            cursor: pointer;
            position: absolute;
            top: 15px;
            right: 15px;
            padding: 0 4px;
        "><f-close-icon />
        </a>
        <f-fetch v-if="src" :url="src">
          <f-content
            slot-scope="data"
            :content="data.value"
            type="document"
            style="
              --content-padding: var(--base2);
              --cols: 1fr 1fr;
              --gap: var(--base);
            "
          />
        </f-fetch>
        <div style="padding: var(--base4) var(--base8) var(--base4) var(--base4)" v-if="!src && open">
          <slot />
        </div>
      </f-fade>
  </span>
  `
};
