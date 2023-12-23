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

/** @type {import('vite').UserConfig} */
export default defineConfig({
    css: {
        postcss: {
            plugins: [postcssNesting, autoprefixer],
        },
    },
    build: {
        cssMinify: false,
        cssCodeSplit: true,
        lib: {
            entry: "src/index.tsx",
            name: pkg.name,
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
        libInjectCss({
            // This config should ideally be on top but libInjectCss for some reasons bundles
            // extra output files if options are not passed here
            rollupOptions: {
                input: Object.fromEntries(
                    glob
                        .sync("src/**/*.{js,jsx,ts,tsx}")
                        .map((file) => [
                            relative("src", file.slice(0, file.length - extname(file).length)),
                            fileURLToPath(new URL(file, import.meta.url)),
                        ])
                ),
                output: [
                    {
                        format: "es",
                        entryFileNames: "[name].js",
                    },
                    {
                        format: "cjs",
                        entryFileNames: "[name].cjs",
                    },
                ],
                external: [...Object.keys(pkg.peerDependencies)],
            },
        }),
        dts(),
        {
            ...visualizer(),
            apply: "build",
        },
    ],
});
