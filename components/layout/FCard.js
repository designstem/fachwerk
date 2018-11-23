export default {
  tag: 'Layout',
  description: `
Eine *Carte Blanche* Bitte!
`,
  example: `
<f-card
  title="Title"
  subtitle="Subtitle"
  height="calc(var(--base) * 20)"
  color="var(--white)"
  background="var(--red)"
>
  Some content here
</f-card>
  `,
  props: {
    title: { default: "", type: String },
    subtitle: { default: "", type: String },
    background: { default: "var(--tertiary)", type: String },
    color: { default: "var(--primary)", type: String },
    width: { default: "", type: String },
    height: { default: "", type: String }
  },
  template: `
    <div
      style="
        border-radius: var(--border-radius);
        padding: var(--base2);

      "
      :style="{
        color,
        background,
        width,
        height
      }"
    >
      <div style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
      ">
        <h4
          style="margin: 0;"
          :style="{ color }"
          v-html="title"
        />
        <small
          v-if="subtitle"
          :style="{ color }"
        >{{ subtitle }}</small>
      </div>
      <slot />
    </div>
    `
}