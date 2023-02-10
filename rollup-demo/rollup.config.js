import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";

export default {
  input: "src/index.js",
  output: {
    file: "dist/index.min.js",
    format: "cjs",
  },
  plugins: [resolve(), commonjs()],
};
