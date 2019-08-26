export default {
  props: {
    theme: { default: "light" }
  },
  template: `
    <f-theme :theme="theme" style="display: flex;">
      <div style="
        position: sticky;
        min-width: 200px;
        height: 100vh;
        overflow: auto;
        background: var(--background);
        top: 0;
      "
        v-if="get('menu', true)"
      >
        <slot name="menu_header" />
        <slot name="menu" />
      </div>
      <div>
        <slot name="content" />
      </div>
      <portal to="topright">
        <slot name="topright" />
      </portal>
      <f-layer />
    </f-theme>
      
  `
};
