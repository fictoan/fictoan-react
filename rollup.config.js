import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import json from '@rollup/plugin-json';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import renameNodeModules from "rollup-plugin-rename-node-modules";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import visualizer from 'rollup-plugin-visualizer';
const svgr = require("@svgr/rollup").default;
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer({
    minify: true
});

import pkg from "./package.json";

// const production = !process.env.ROLLUP_WATCH;
const extensions = [".ts", ".tsx", ".js", ".jsx"];

export default {
    input: "src/index.tsx",
    output: [
        {
            dir: "dist/cjs",
            format: "cjs",
            sourcemap: true,
            exports: "named",
            preserveModules: true,
            preserveModulesRoot: 'src'
        },
        {
            dir: "dist/es",
            format: "es",
            sourcemap: true,
            exports: "named",
            preserveModules: true,
            preserveModulesRoot: 'src'
        },
    ],
    external: [
        "@types/react",
        "@types/styled-components",
        "react",
        "styled-components",
    ],
    plugins: [
        typescript({
            clean: true,
            transformers: [
                () => ({
                    before: [styledComponentsTransformer],
                }),
            ],
        }),
        url(),
        json(),
        resolve({
            extensions,
        }),
        commonjs({
            extensions,
        }),
        svgr(),
        getBabelOutputPlugin({
            presets: ['@babel/preset-react']
        }),
        terser({
            format: {
                preserve_annotations: true,
                comments: /__PURE__/
            }
        }),
        // Required with preserveModules as node_modules is ignored when publishing
        renameNodeModules(),
        // visualizer({
        //     template: "treemap",
        //     gzipSize: true
        // }),
    ],
};
