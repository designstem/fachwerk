import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import replace from "rollup-plugin-replace";

export default [
  {
    input: "./src/vendor.js",
    output: {
      file: "./vendor.js",
      format: "es"
    },
    plugins: [
      resolve(),
      commonjs(),
      terser(),
      replace({
        "process.env.NODE_ENV": JSON.stringify("development")
      })
    ]
  }
];
