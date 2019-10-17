import { Css } from "../../../fachwerk.js";

export default {
  mixins: [Css],
  description: `
Shows a card.

<f-card>Some content here</f-card>

<f-card
  title="Title"
  subtitle="Subtitle"
  height="calc(var(--base) * 20)"
  color="var(--white)"
  background="var(--red)"
>
  Some content here
</f-card>

<p />
  `,
  props: {
    title: { default: "", type: String },
    subtitle: { default: "", type: String },
    background: { default: "var(--emphasis)", type: String },
    color: { default: "var(--primary)", type: String },
    border: { default: "transparent", type: String }
  },
  template: `
    <div
      style="
        border-radius: var(--border-radius);
        padding: var(--base2);
        height: 100%;
        cursor: pointer;
      "
      :style="{
        color,
        background,
        border: 'var(--border-width) solid ' + border
      }"
    >
      <div style="
        display: flex;
        justify-content: space-between;
        align-items: center;
      ">
        <h5
          style="margin: 0;"
          :style="{ color }"
          v-html="title"
        />
        <small
          v-if="subtitle"
          :style="{ color }"
        >{{ subtitle }}</small>
      </div>
      <div class="card">
        <slot />
      </div>
    </div>
    `,
    css: `
      .card > *:first-child {
        margin-top: 0;
      }
      .card > *:last-child {
        margin-bottom: 0;
      }
    `
};
