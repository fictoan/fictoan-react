import { defineConfig } from "vite";
import { extname, relative } from "path";
import { fileURLToPath } from "node:url";
import { glob } from "glob";
import { visualizer } from "rollup-plugin-visualizer";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import postcssNesting from "postcss-nesting";
import autoprefixer from "autoprefixer";
import pkg from "./package.json";


const input = Object.fromEntries(
    glob
        .sync("src/**/*.{js,jsx,ts,tsx}", { ignore: "src/**/*.stories.{js,jsx,ts,tsx}" })
        .map((file) => [
            relative("src", file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
        ])
)

/** @type {import('vite').UserConfig} */
export default defineConfig({
    css: {
        postcss: {
            plugins: [postcssNesting, autoprefixer],
        },
    },
    build: {
        minify: "terser",
        lib: {
            entry: input,
            name: pkg.name,
            fileName: "index"
        },
        rollupOptions: {
            output: [
                {
                    format: "es",
                    entryFileNames: "[name].js",
                    assetFileNames: "index.[ext]"
                },
                {
                    format: "cjs",
                    entryFileNames: "[name].cjs",
                    assetFileNames: "index.[ext]"
                },
            ],
            external: [...Object.keys(pkg.peerDependencies)],
        },
    },
    plugins: [
        svgr(),
        react({
            babel: {
                presets: [["@babel/preset-env", { modules: false }], ["@babel/preset-react"]],
                plugins: [["transform-react-remove-prop-types", { removeImport: true }]],
            },
        }),
        dts(),
        {
            ...visualizer(),
            apply: "build",
        },
    ],
});
