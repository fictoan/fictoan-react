import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import typescript from "@rollup/plugin-typescript";

import pkg from "./package.json";

// const production = !process.env.ROLLUP_WATCH;

export default {
    input: "src/index.tsx",
    output: [
        {
            file: pkg.main,
            format: "cjs",
            sourcemap: true,
            exports: "named"
        },
        {
            file: pkg.module,
            format: "es",
            sourcemap: true,
            exports: "named"
        }
    ],
    external: [
        "lodash-es",
        "prism-react-renderer",
        "react",
        "react-dom",
        "react-router-dom",
        "styled-components"
    ],
    plugins: [
        typescript(),
        url(),
        resolve({
            extensions: [".ts", ".tsx"]
        }),
        commonjs({ extensions: [".ts", ".tsx"] })
    ]
};
