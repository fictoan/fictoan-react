import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import analyze from 'rollup-plugin-analyzer';
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
            file: pkg.main,
            format: "cjs",
            sourcemap: true,
            exports: "named",
            preserveModules: true,
            preserveModulesRoot: 'src'
        },
        {
            file: pkg.module,
            format: "es",
            sourcemap: true,
            exports: "named",
            preserveModules: true,
            preserveModulesRoot: 'src'
        },
    ],
    external: [
        "@types/lodash-es",
        "@types/react",
        "@types/styled-components",
        "lodash-es/merge",
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
        resolve({
            extensions,
        }),
        commonjs({
            extensions,
            namedExports: {
                "node_modules/lodash-es/lodash.js": ["merge"],
            },
        }),
        svgr(),
        terser(),
        // visualizer(),
        // analyze({ summaryOnly: true })
    ],
};
