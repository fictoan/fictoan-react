import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import copy from 'rollup-plugin-copy-glob'

import pkg from './package.json'

const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/index.jsx',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            sourcemap: true
        },
        {
            file: pkg.module,
            format: 'es',
            sourcemap: true
        }
    ],
    plugins: [
        external(),
        postcss({
            modules: true
        }),
        url(),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/env', '@babel/react']
        }),
        resolve({
            extensions: ['.js', '.jsx'],
        }),
        commonjs(),
        copy([{
            files: 'src/**/*.scss',
            dest: pkg.buildFolder,
        }], { verbose: false, watch: !production }),
    ]
}
