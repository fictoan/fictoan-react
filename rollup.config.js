import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

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
    plugins: [
        peerDepsExternal(),
        typescript(),
        url(),
        resolve({
            extensions: [".ts", ".tsx", ".js", ".jsx"]
        }),
        commonjs({ extensions: [".ts", ".tsx", ".js", ".jsx"] })
    ]
};
