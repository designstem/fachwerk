import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default {
  input: "./src/vendor/vendor.js",
  output: {
    file: "./vendor.js",
    format: "es"
  },
  plugins: [
    resolve(),
    commonjs(),
    terser()
  ]
};
