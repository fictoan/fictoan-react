import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import json from '@rollup/plugin-json';
import styles from "rollup-plugin-styles";
import typescript from "rollup-plugin-typescript2";
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import { terser } from "rollup-plugin-terser";
import progress from 'rollup-plugin-progress';
import visualizer from 'rollup-plugin-visualizer';
import { getFiles } from './scripts/buildUtils';
const svgr = require("@svgr/rollup").default;
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer({
    minify: true
});

const extensions = [".ts", ".tsx", ".js", ".jsx"];

const computeFileNames = (chunkInfo) => {
    const pathRegex = new RegExp(/(?<=src\/).*(?=\.tsx)/g);
    const pathResult = pathRegex.exec(chunkInfo.facadeModuleId);
    return pathResult ? pathResult[0] + ".js" : "external/" + chunkInfo.name + ".js";
}

export default {
    input: [
        "src/index.tsx",
        ...getFiles('./src/components', [".tsx"]),
    ],
    output: [
        {
            dir: "dist/cjs",
            format: "cjs",
            sourcemap: true,
            exports: "named",
            entryFileNames: computeFileNames,
            chunkFileNames: computeFileNames,
        },
        {
            dir: "dist/es",
            format: "es",
            sourcemap: true,
            exports: "named",
            entryFileNames: computeFileNames,
            chunkFileNames: computeFileNames,
        },
    ],
    external: [
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
        styles({
            minimize: true
        }),
        resolve({
            extensions
        }),
        commonjs(),
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
        progress(),
        visualizer({
            template: "treemap",
            gzipSize: true
        }),
    ],
};
