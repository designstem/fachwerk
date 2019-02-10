import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import css from "rollup-plugin-css-only";

export default [
  {
    input: "./src/vendor.js",
    output: {
      file: "./vendor.js",
      format: "es"
    },
    plugins: [resolve(), commonjs(), terser()]
  },
  {
    input: "./src/styles.js",
    output: {
      format: "es"
    },
    plugins: [resolve(), commonjs(), css({ output: "./fachwerk.css" })]
  }
];
