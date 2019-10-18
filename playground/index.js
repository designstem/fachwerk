import { fachwerk } from "../fachwerk.js";

const array = (length, def = 0) => Array.from({ length }).map(_ => def)

fachwerk({
  edit: "show",
  title: "playground",
  utils: { array }
});
