import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default {
  input: "./src/vendor/dist/vendor.js",
  output: {
    file: "./dist/dist/vendor.js",
    format: "es"
  },
  plugins: [
    resolve(),
    commonjs(),
    terser()
  ]
};
