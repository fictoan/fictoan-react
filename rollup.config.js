import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import typescript from "rollup-plugin-typescript2";
const svgr = require("@svgr/rollup").default;

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
        },
        {
            file: pkg.module,
            format: "es",
            sourcemap: true,
            exports: "named",
        },
    ],
    external: [
        "@types/lodash",
        "@types/react",
        "@types/styled-components",
        "lodash/merge",
        "react",
        "styled-components",
    ],
    plugins: [
        typescript(),
        url(),
        resolve({
            extensions,
        }),
        commonjs({
            extensions,
            namedExports: {
                "node_modules/lodash/lodash.js": ["merge"],
            },
        }),
        svgr(),
    ],
};
