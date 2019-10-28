import { fachwerk } from "../fachwerk.js";

const array = (length, step = 1) =>
  Array.from({ length }).map((_, i) => i * step);

fachwerk({
  edit: "show",
  title: "playground",
  utils: { array },
  type: "slides"
});
