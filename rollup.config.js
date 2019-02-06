import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "./src/vendor/vendor.js",
    output: {
      file: "./vendor.min.js",
      format: "es"
    },
    plugins: [resolve(), commonjs(), terser()]
  },
  // {
  //   input: "./fachwerk.js",
  //   output: {
  //     file: "./fachwerk.min.js",
  //     format: "es"
  //   },
  //   plugins: [terser()]
  // }
];
