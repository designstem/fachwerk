import { fachwerk, range, polarx, polary } from "../fachwerk.js";

// const FPolargrid = {
//   props: { count: { default: 6 }, r: { default: 4 }, step: { default: 0.25 } },
//   methods: { range, polarx, polary },
//   template: `
//   <f-group rotation="180">
//     <f-line
//       v-for="(a,i) in range(0,360,360 / count)"
//       :key="'a' + i"
//       :x2="polarx(a,4)"
//       :y2="polary(a,4)"
//       stroke-width="1"
//       opacity="0.25"
//     />
//     <f-circle
//       v-for="(r,j) in range(0.5,r,step)"
//       :key="'b' + j"
//       :r="r"
//       stroke-width="1"
//       opacity="0.25"
//     />
//   </f-group>
//   `
// };

const array = (length, step = 1) =>
  Array.from({ length }).map((_, i) => i * step);

fachwerk({
  edit: "show",
  title: "playground",
  utils: { array },
  type: "slides"
});
