// vite.config.js
import { defineConfig } from "vite";
import { extname, relative } from "path";
import { fileURLToPath } from "node:url";
import { glob } from "glob";
import { visualizer } from "rollup-plugin-visualizer";
import dts from "vite-plugin-dts";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import { execSync } from "child_process";
import path from "path";
import { readFileSync } from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(readFileSync(new URL("./package.json", import.meta.url)));

const input = Object.fromEntries(
    glob
        .sync(["src/index.tsx", "src/components/**/*.{ts,tsx}"], { ignore: "src/**/*.stories.{js,jsx,ts,tsx}" })
        .map((file) => [
            relative("src", file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
        ]),
);

function preserveUseClient() {
    return {
        name: "preserve-use-client",
        enforce: "post",
        generateBundle(options, bundle) {
            Object.entries(bundle).forEach(([_, chunk]) => {
                if (chunk.type === "chunk") {
                    chunk.code = chunk.code.replace(
                        /("use client";|('use client';))?/,
                        "\"use client\";\n",
                    );
                }
            });
        },
    };
}

function generateColors() {
    return {
        name: "generate-colors",
        buildStart: {
            sequential: true,
            handler() {
                console.log("Generating color system...");
                execSync("node src/scripts/generateColourClasses.js", { stdio: "inherit" });
            },
        },
        configureServer(server) {
            // Generate on dev server start
            console.log("Generating color system...");
            execSync("node src/scripts/generateColourClasses.js", { stdio: "inherit" });

            // Watch for changes in the script
            server.watcher.add("src/scripts/generateColourClasses.js");
            server.watcher.on("change", (path) => {
                if (path.endsWith("generateColourClasses.js")) {
                    console.log("Color generation script changed, regenerating...");
                    execSync("node scripts/generateColourClasses.js", { stdio: "inherit" });
                }
            });
        },
    };
}

function createVisualizer() {
    return {
        ...visualizer({ gzipSize: true }),
        apply: "build",
    };
}

export default defineConfig({
    build: {
        minify: "terser",
        terserOptions: {
            format: {
                comments: false,
                preserve_annotations: true,
            },
        },
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
            ],
            external: [...Object.keys(pkg.peerDependencies)],
        },
    },
    plugins: [
        generateColors(),
        svgr(),
        preserveUseClient(),
        react({
            babel: {
                presets: [["@babel/preset-env", { modules: false }], ["@babel/preset-react"]],
                plugins: [["transform-react-remove-prop-types", { removeImport: true }]],
            },
        }),
        dts(),
        createVisualizer(),
    ],
});
