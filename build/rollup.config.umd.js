import base from './rollup.config.base'
import css from 'rollup-plugin-css-only'
import CleanCSS from 'clean-css'
import fs from 'fs-extra'
import { generate } from './build.js'

const config = [Object.assign({}, base, {
  plugins: [
    ...base.plugins,
    css({
      output: styles => {
        fs.ensureDirSync('dist/umd')
        fs.writeFileSync('dist/umd/vue-ui.css', new CleanCSS().minify(styles).styles)
      },
    }),
  ],
  output: {
    exports: 'named',
    name: 'vue-ui',
    file: 'dist/umd/vue-ui.umd.js',
    format: 'umd',
    globals: {
      'vue': 'vue'
    }
    // sourcemap: true,
  },
})]

export default generate(config, 'umd')
