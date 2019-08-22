import { Css } from "../../../fachwerk.js";

export default {
  mixins: [Css],
  description: `
Sidebars load can be either inline or load from a file.

<f-sidebar title="inline" orientation="left">

### Here is an inline sidebar.

</f-sidebar> 

...or load a from a file:

<f-sidebar title="Text from README.md" src="../README.md"  /> 

For optional content overlay use \`overlay\` 

<f-sidebar title="Sidebar with overlay" overlay>

### Here is a sidebar with content-overlay.

</f-sidebar> 

By default sidebar width is 33% of viewport on larger screens and 90%, if viewport is narrower than 800px. You can redefine these values with css-properties <code>--sidebar-width</code> and <code>--sidebar-mobile-width</code>

<f-sidebar title="Wider sidebar" style="--sidebar-width:60vw; --sidebar-mobile-width:75vw" overlay>

### This sidebar covers 60% of the viewport on wider screens

And 75% if the viewport is 800px or smaller...

</f-sidebar>


<br><br>
`,
  props: {
    src: { default: "", type: String },
    title: { default: "", type: String },
    orientation: { default: "right", type: String },
    open: { default: false, type: Boolean },
    overlay: { default: false, type: Boolean },
    width: { default: null, type: String }
  },
  data: () => ({ currentOpen: false }),
  mounted() {
    this.$watch(
      "open",
      open => {
        this.currentOpen = open;
      },
      { immediate: true }
    );
  },
  methods: {
    clickOutside() {
      if (this.currentOpen == true) {
        this.currentOpen = false;
      }
    }
  },
  template: `
    <span v-click-outside="clickOutside">
      <span @click.prevent="currentOpen = !currentOpen">
        <slot name="button">
          <a style="
            color: var(--blue);
            border-bottom: 1px dotted var(--blue);
            cursor: alias;"
          >{{ title }}</a>
        </slot>
      </span>
      <f-fade class="f-sidebar__panel"
        v-if="currentOpen"
        style="
          position: fixed;
          top: 0px;
          right: 0px;
          bottom: 0px;
          background: var(--white);
          overflowY: auto;
          z-index: 100000000 !important;
        "
        :style="{
          boxShadow: (orientation == 'right' ? '-5px' : '5px') + ' 0 10px 0 rgba(0,0,0,0.2)' + (overlay ? ', 0 0 0 99vw rgba(0,0,0,0.3)' : ''),
          right: orientation == 'right' ? 0 : '',
          left: orientation == 'left' ? 0 : '',
        }"
      >
        <f-theme theme="light">
        <a
          @click="currentOpen = false"
          class="quaternary"
          style="
            cursor: pointer;
            position: sticky;
            top: var(--base2);
            left: calc( 100% - var(--base6) );
            padding: 0 4px;
            background: var(--white);
        "
        ><f-close-icon /> 
        </a>
        <f-fetch v-if="src" :src="src">
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
        <div style="padding: var(--base4) var(--base8) var(--base4) var(--base4)" v-if="!src && currentOpen">
          <slot />
        </div>
        </f-theme>
      </f-fade>
  </span>
  `,
  directives: {
    "click-outside": {
      bind: function(el, binding) {
        const handler = e => {
          if (
            binding.modifiers.bubble ||
            (!el.contains(e.target) && el !== e.target)
          ) {
            binding.value(e);
          }
        };
        el.__vueClickOutside__ = handler;
        document.addEventListener("click", handler);
      },
      unbind: function(el, binding) {
        document.removeEventListener("click", el.__vueClickOutside__);
        el.__vueClickOutside__ = null;
      }
    }
  },
  cssprops: {
    "--sidebar-width": {
      default: "33vw",
      description: "Sidebar width"
    },
    "--sidebar-mobile-width": {
      default: "90vw",
      description: "Sidebar width on viewports narrower than 800px"
    }
  },
  css: `
    .f-sidebar__panel {
      width: var(--sidebar-width);
    }
    @media (max-width: 800px) {
      .f-sidebar__panel {
        width: var(--sidebar-mobile-width) !important;
      }
    }
  `
};
