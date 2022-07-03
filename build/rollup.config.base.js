import { babel } from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import cjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import requireContext from 'rollup-plugin-require-context'
import { string } from 'rollup-plugin-string'
import fs from 'fs-extra'
import CleanCSS from 'clean-css'
import autoprefixer from 'autoprefixer'
import css from 'rollup-plugin-css-only'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import typescript from 'rollup-plugin-typescript';

const config = require('../package.json')

export default {
  input: 'src/index.js',
  plugins: [
    // serve({
    //   contentBase: '',  //服务器启动的文件夹，默认是项目根目录，需要在该文件下创建index.html
    //   port: 8020   //端口号，默认10001
    // }),
    // livereload('dist'),   //watch dist目录，当目录中的文件发生变化时，刷新页面
    resolve({
      mainFields: ['module', 'jsnext', 'main', 'browser'],
    }),
    string({
      include: '**/*.svg',
    }),
    vue({
      css: false,
      style: {
        postcssPlugins: [autoprefixer],
      },
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
      presets: [
        '@vue/babel-preset-jsx',
        [
          '@babel/env', {
            'modules': false,
          },
        ],
      ],
      "plugins": [
        [
            "@babel/plugin-transform-runtime",
            {
                "useESModules": true // 使用 esm 形式的 helper
            }
        ]
      ]
    }),
    cjs({
      exclude: 'src/**',
    }),
    requireContext(),
    replace({
      VERSION: JSON.stringify(config.version),
      preventAssignment: true
    }),
    typescript() // 解析TypeScript
  ],
  // watch: {
  //   include: 'src/**',
  // },
  external: [
    'vue',
  ],
}
