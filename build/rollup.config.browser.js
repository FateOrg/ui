import base from './rollup.config.base'
import {
  terser
} from 'rollup-plugin-terser'
import css from 'rollup-plugin-css-only'
import CleanCSS from 'clean-css'
import fs from 'fs-extra'
import { generate } from './build.js'

const config = [Object.assign({}, base, {
  plugins: [
    ...base.plugins,
    css({
      output: styles => {
        fs.ensureDirSync('dist/iife')
        fs.writeFileSync('dist/iife/vue-ui.css', new CleanCSS().minify(styles).styles)
      },
    }),
  ],
  output: {
    exports: 'named',
    name: 'VueUi',
    file: 'dist/iife/vue-ui.min.js',
    format: 'iife',
    // sourcemap: true,
    globals: {
      vue: 'Vue',
    },
  },
})]

config[0].plugins.push(terser())
export default generate(config, 'iife')
