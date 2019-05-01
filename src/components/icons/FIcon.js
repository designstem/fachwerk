import { color } from "../../../fachwerk.js";

const Fact = {
  methods: { color },
  props: ["strokeWidth"],
  template: `
  <g>
    <path d="M33.678,15.341a11,11,0,1,0-17,9.207v5.793a6,6,0,0,0,12,0V24.548A10.992,10.992,0,0,0,33.678,15.341Z" :fill="color('primary')" :stroke="color('primary')" :stroke-width="strokeWidth" />
    <path d="M26.678,30.341a4,4,0,0,1-8,0V25.577a10.853,10.853,0,0,0,8,0Z" :fill="color('lightblue')" :stroke="color('primary')" :stroke-width="strokeWidth / 2" />
    <path d="M23.678,24.282V18.013a1.5,1.5,0,0,0,.307-.364l.029-.05h0l1.634-2.831,1.634,2.83.014-.008a.985.985,0,0,0,.852.509,1,1,0,0,0,1-1A.973.973,0,0,0,29,16.607l.015-.008L26.948,13.02a1.5,1.5,0,0,0-2.6,0l-.028.05h0L22.686,15.9l-1.633-2.83h0l-.03-.05a1.5,1.5,0,0,0-1.3-.751h0a1.506,1.506,0,0,0-1.3.75L16.356,16.6h0l0,0,.012.007a.966.966,0,0,0-.146.489,1,1,0,0,0,1,1,.987.987,0,0,0,.85-.505l.017.009,1.634-2.83,1.633,2.83,0,0,.027.046a1.457,1.457,0,0,0,.291.352v6.282a9,9,0,1,1,2,0Z" :fill="color('white')" :stroke="color('primary')" :stroke-width="strokeWidth / 2"/>
  </g>
  `
};

const Activity = {
  methods: { color },
  props: ["strokeWidth"],
  template: `
  <g>
    <path d="M28.534,14.079a11.011,11.011,0,0,1,10,10.949h0a1,1,0,0,1-1,1H28.48a11.012,11.012,0,0,1-10.945,9.942h0a1,1,0,0,1-1-1h0V25.92a11.01,11.01,0,0,1-10-10.949h0a1,1,0,0,1,1-1h9.054A11.012,11.012,0,0,1,27.534,4.029h0a1,1,0,0,1,1,1h0" :fill="color('primary')" :stroke="color('primary')" :stroke-width="strokeWidth"/>
    <!--green-->
    <path d="M26.534,6.088v8.031a6.008,6.008,0,0,0-4.893,4.8,4,4,0,0,1-3.107-3.891A9.01,9.01,0,0,1,26.534,6.088Z" :fill="color('white')" :stroke="color('primary')" :stroke-width="strokeWidth"/>
    <!--red-->
    <path d="M36.475,24.029H28.444a6.008,6.008,0,0,0-4.8-4.893,4,4,0,0,1,3.89-3.107h0A9.009,9.009,0,0,1,36.475,24.029Z" :fill="color('lightblue')" :stroke="color('primary')" :stroke-width="strokeWidth"/>
    <!--green-->
    <path d="M18.534,33.912V25.881a6.011,6.011,0,0,0,4.885-4.746,4,4,0,0,1,3.113,3.875A9.008,9.008,0,0,1,18.534,33.912Z" :fill="color('white')" :stroke="color('primary')" :stroke-width="strokeWidth"/>
    <!--red-->
    <path d="M8.593,15.971h8.023a6.008,6.008,0,0,0,4.793,4.948,4,4,0,0,1-3.875,3.052A9.01,9.01,0,0,1,8.593,15.971Z" :fill="color('lightblue')" :stroke="color('primary')" :stroke-width="strokeWidth"/>
  </g>
`
};

const Note = {
  methods: { color },
  props: ["strokeWidth"],
  template: `
  <g>
    <path d="M23.768,29.117h0a.988.988,0,0,0-.85.5l-.016-.01-1.634,2.83-1.634-2.83,0,0-.028-.048a1.507,1.507,0,0,0-1.3-.748h0a1.506,1.506,0,0,0-1.3.75l-.029.05h0l-1.634,2.83-1.634-2.83-.013.008a.988.988,0,0,0-.852-.508,1,1,0,0,0-1,1h0a.975.975,0,0,0,.147.492l-.014.008L14.042,34.2a1.5,1.5,0,0,0,1.3.751h0a1.5,1.5,0,0,0,1.3-.75l.028-.049h0L18.3,31.318l1.634,2.831,0,0,.028.049a1.5,1.5,0,0,0,2.6,0l2.067-3.58h0l0,0-.011-.006a.975.975,0,0,0,.145-.489h0A1,1,0,0,0,23.768,29.117Z" :fill="color('primary')"/>
    <path d="M32.3,6.806A6.005,6.005,0,0,0,23.826,6.8h0l-.354.354-9.909,9.909c-.2.2-.353.353-.353.353l.011.012a.971.971,0,0,0-.2.378l-.015,0L11.94,21.791a1.493,1.493,0,0,0,.029.846L11,26.272a1.5,1.5,0,0,0,1.451,1.887,1.48,1.48,0,0,0,.385-.05l3.623-.971a1.43,1.43,0,0,0,.856.031L21.3,26.1l0-.016a.989.989,0,0,0,.383-.2l.011.011.354-.353,9.908-9.909.345-.344h0l.009-.009h0A6.006,6.006,0,0,0,32.3,6.806Z" :fill="color('primary')"/>
    <!--red-->
    <polygon points="15.474 25.33 13.151 25.952 13.773 23.629 13.777 23.628 16.097 23.006 15.474 25.33" :fill="color('white')"/>
    <!--green-->
    <path d="M30.887,13.877l-.345.344L20.633,24.13l-.108.108-2.9.776.778-2.9.1-.1L29.117,11.4l.354-.353a1,1,0,0,0-1.414-1.414l-.354.353L17.1,20.593l-.1.1-2.9.777.774-2.893.107-.106,9.908-9.909.345-.344a4,4,0,1,1,5.657,5.657Z" :fill="color('lightblue')"/>
  </g>
  `
};

const Vr = {
  methods: { color },
  props: ["strokeWidth"],
  template: `
  <g>
    <g>
      <path d="M34.312,22.642a6.007,6.007,0,0,0,0-8.483h0a5.982,5.982,0,0,0-5.131-1.67,10.939,10.939,0,0,0-4.358-1.744l1.542-2.672-1.732-1L23,9.9l-1.634-2.83-1.732,1,1.541,2.671a10.928,10.928,0,0,0-4.357,1.744,5.982,5.982,0,0,0-5.13,10.155h0c.128.128.276.222.412.336a10.989,10.989,0,0,0,21.8,0c.138-.115.286-.21.415-.339Z" :fill="color('primary')"/>
      <path d="M23,12.581a8.928,8.928,0,0,1,3.746.828,6.007,6.007,0,0,0-.919.75h0a4.005,4.005,0,0,1-5.656,0h0a6.014,6.014,0,0,0-.919-.751A8.927,8.927,0,0,1,23,12.581Z" :fill="color('white')"/>
      <path d="M23,30.581a9.013,9.013,0,0,1-8.616-6.41,5.976,5.976,0,0,0,5.788-1.527h0a4,4,0,0,1,5.656,0h0a5.98,5.98,0,0,0,5.786,1.528A9.014,9.014,0,0,1,23,30.581Z" :fill="color('white')"/>
      <path d="M25.877,24.54c-.018.018-.024.043-.041.062l-.009-.009a4,4,0,0,1-5.657,0l-.006.006a.546.546,0,0,0-.039-.059,1,1,0,0,0-1.414,1.414c.017.018.041.024.059.04l-.014.013a6.005,6.005,0,0,0,8.485,0L27.229,26a.511.511,0,0,0,.062-.041,1,1,0,0,0-1.414-1.414Z" :fill="color('primary')"/>
    </g>
    <path d="M27.243,21.23h0a6.007,6.007,0,0,0-8.485,0h0a4,4,0,0,1-5.656,0h0a4,4,0,0,1,5.656-5.658h0a6.007,6.007,0,0,0,8.486,0h0a4,4,0,0,1,5.656,0h0a4,4,0,0,1,0,5.657l0,0A4.005,4.005,0,0,1,27.243,21.23Z" :fill="color('lightblue')" />
  </g>
  `
};

export default {
  description: `
Various icons.

<f-icon icon="fact" />
<f-icon icon="activity" />
<f-icon icon="note" />
<f-icon icon="vr" />
  `,
  components: { Fact, Activity, Note, Vr },
  props: {
    icon: { default: "fact", type: String, description: "Icon name" },
    size: { default: "medium", type: String, description: "Icon size: `small` `medium` `large`" }
  },
  data: function() {
    return {
      sizes: {
        small: {
          width: 30,
          x: 1.5,
          y: 3,
          scale: 0.6,
          strokeWidth: 2,
          innerStrokeWidth: 0.5
        },
        medium: {
          width: 50,
          x: 2.5,
          y: 6,
          scale: 1,
          strokeWidth: 2,
          innerStrokeWidth: 0
        },
        large: {
          width: 75,
          x: 2.5,
          y: 6,
          scale: 1.5,
          strokeWidth: 3,
          innerStrokeWidth: 0
        }
      }
    };
  },
  computed: {
    transform() {
      return `
        translate(
          ${this.sizes[this.size].x}
          ${this.sizes[this.size].y}
        )
        scale(${this.sizes[this.size].scale} ${this.sizes[this.size].scale})
      `;
    }
  },
  template: `
  <f-artboard
    :width="sizes[size].width"
    :height="sizes[size].width"
  >
    <f-group :position="[sizes[size].width / 2 , sizes[size].width / 2]">
      <f-roundedpolygon
        stroke="var(--icon-stroke)"
        :stroke-width="sizes[size].strokeWidth"
        corner-radius="0.5"
        :r="sizes[size].width / 2"
        fill="white"
      />
    </f-group>
    <component
      :is="icon"
      :transform="transform"
      :stroke-width="sizes[size].innerStrokeWidth"
    />
  </f-artboard>
  `,
  cssprops: {
    "--icon-stroke": {
      default: "var(--primary)",
      description: "Icon stroke color"
    },
    "--icon-fill": {
      default: "rgba(0,0,0,0)",
      description: "Icon fill"
    },
  }
};
