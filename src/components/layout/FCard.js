export default {
  description: `
Decription TBD.

<f-card>Some content here</f-carc>

<f-card
  title="Title"
  subtitle="Subtitle"
  height="calc(var(--base) * 20)"
>
  Some content here
</f-card>
  `,
  props: {
    title: { default: "", type: String },
    subtitle: { default: "", type: String },
    background: { default: "var(--red)", type: String },
    color: { default: "var(--white)", type: String },
  },
  template: `
    <div
      style="
        border-radius: var(--border-radius);
        padding: var(--base2);
        height: 100%;
      "
      :style="{
        color,
        background,
      }"
    >
      <div style="
        display: flex;
        justify-content: space-between;
        align-items: center;
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