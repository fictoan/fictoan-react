import { defineConfig } from "vite";
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
        outDir: "dist-umd",
        lib: {
            entry: ["src/index.tsx"],
            name: "fictoan",
            formats: ["umd", "iife"],
            fileName: "fictoan",
        },
        rollupOptions: {
            external: [...Object.keys(pkg.peerDependencies)],
            output: {
                globals: {
                    react: "React",
                },
                assetFileNames: "fictoan.min.[ext]",
            },
        },
    },
    plugins: [
        react({
            babel: {
                presets: [["@babel/preset-env", { modules: false }], ["@babel/preset-react"]],
                plugins: [["transform-react-remove-prop-types", { removeImport: true }]],
            },
        }),
    ],
});
