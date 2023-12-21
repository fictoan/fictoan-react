import { resolve } from "path";
import { defineConfig } from "vite";
import pkg from "./package.json";

/** @type {import('vite').UserConfig} */
export default defineConfig({
    esbuild: {
        minifyIdentifiers: false,
    },
    build: {
        cssMinify: false,
        lib: {
            entry: resolve(__dirname, "src/index.tsx"),
            formats: ["es", "cjs"],
            fileName: "index"
        },
        rollupOptions: {
            external: [...Object.keys(pkg.peerDependencies)],
            output: {
                intro: 'import "./style.css";',
            },
        },
    },
});
