import { defineConfig } from "vite";
import { extname, relative } from "path";
import { fileURLToPath } from "node:url";
import { glob } from "glob";
import { visualizer } from "rollup-plugin-visualizer";
import terser from "@rollup/plugin-terser";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import postcssNesting from "postcss-nesting";
import autoprefixer from "autoprefixer";
import pkg from "./package.json";

const input = Object.fromEntries(
    glob
        .sync(["src/index.tsx", "src/components/**/*.{ts,tsx}"], { ignore: "src/**/*.stories.{js,jsx,ts,tsx}" })
        .map((file) => [
            relative("src", file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
        ])
);

function preserveUseClient() {
    return {
        name: "preserve-use-client",
        enforce: "post",
        generateBundle(options, bundle) {
            for (const file in bundle) {
                if (bundle[file].type === "chunk") {
                    bundle[file].code = bundle[file].code.replace(
                        /("use client";|('use client';))?/,
                        '"use client";\n'
                    );
                }
            }
        },
    };
}

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
            fileName: "index",
        },
        rollupOptions: {
            output: [
                {
                    format: "es",
                    entryFileNames: "[name].js",
                    assetFileNames: "index.[ext]",
                    banner: `"use client;"`,
                },
                {
                    format: "cjs",
                    entryFileNames: "[name].cjs",
                    assetFileNames: "index.[ext]",
                    banner: `"use client;"`,
                },
            ],
            external: [...Object.keys(pkg.peerDependencies)],
            plugins: [
                // 👇 This because for some reason the Vite terserOptions don't work
                terser({
                    format: {
                        comments: false,
                        preserve_annotations: true,
                    },
                }),
            ],
        },
    },
    plugins: [
        svgr(),
        preserveUseClient(),
        react({
            babel: {
                presets: [["@babel/preset-env", { modules: false }], ["@babel/preset-react"]],
                plugins: [["transform-react-remove-prop-types", { removeImport: true }]],
            },
        }),
        dts(),
        {
            ...visualizer({ gzipSize: true }),
            apply: "build",
        },
    ],
});
