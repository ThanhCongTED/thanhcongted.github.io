import nodeResolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";

const config = {
  input: "dist/install-button.js", // File đã build từ TypeScript
  output: {
    dir: "dist/web", // Output thư mục
    format: "module", // ES Module
  },
  external: ["https://www.improv-wifi.com/sdk-js/launch-button.js"],
  preserveEntrySignatures: false,
  plugins: [
    commonjs(),
    nodeResolve({
      browser: true,
      preferBuiltins: false,
    }),
    babel({
      babelHelpers: "bundled",
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              // Target Chrome 84 (tương thích với CDN)
              chrome: "84",
            },
          },
        ],
      ],
    }),
    json(),
  ],
};

if (process.env.NODE_ENV === "production") {
  config.plugins.push(
    terser({
      ecma: 2019,
      toplevel: true,
      format: {
        comments: false,
      },
    })
  );
}

export default config;