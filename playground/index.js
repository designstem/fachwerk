import { fachwerk } from "../fachwerk.js";

const array = (length, defaultValue = 0) =>
  Array.from({ length }).map(_ => defaultValue);

fachwerk({
  //edit: "show",
  title: "playground",
  utils: { array },
  type: "slides"
});
