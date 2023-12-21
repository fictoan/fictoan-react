import { resolve } from "path";
import { defineConfig } from "vite";
import postcssNesting from "postcss-nesting";
import autoprefixer from "autoprefixer";
import pkg from "./package.json";

/** @type {import('vite').UserConfig} */
export default defineConfig({
    esbuild: {
        minifyIdentifiers: false,
    },
    css: {
        postcss: {
            plugins: [postcssNesting, autoprefixer],
        },
    },
    build: {
        cssMinify: false,
        lib: {
            entry: resolve(__dirname, "src/index.tsx"),
            formats: ["es", "cjs"],
            fileName: "index",
        },
        rollupOptions: {
            external: [...Object.keys(pkg.peerDependencies)],
            output: {
                intro: 'import "./style.css";',
            },
        },
    },
});
