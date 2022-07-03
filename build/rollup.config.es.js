import base from './rollup.config.base'
import css from 'rollup-plugin-css-only'
import fs from 'fs-extra'
import CleanCSS from 'clean-css'
import { generate } from './build.js'

const config = [
  Object.assign({}, base, {
    plugins: [
      ...base.plugins,
      css({
        output: styles => {
          fs.ensureDirSync('dist/es')
          fs.writeFileSync('dist/es/vue-ui.css', new CleanCSS().minify(styles).styles)
        },
      }),
    ],
    output: {
      name: 'vue-ui',
      file: 'dist/es/vue-ui.esm.js',
      format: 'es',
      // sourcemap: true,
    },
    external: [
      ...base.external,
      'focus-visible',
      'v-tooltip',
      'vue-resize',
    ],
  }),
  // Object.assign({}, base, {
  //   input: "src/components/button/button.ts",
  //   output: [{
  //     file: "dist/button/button.d.ts",
  //     format: "es"
  //   }],
  //   plugins: [
  //     ...base.plugins,
  //     css({
  //       output: styles => {

  //       },
  //     }), {
  //       name: "dts",
  //       buildStart() {
  //         fs.ensureDirSync('dist')
  //         fs.writeFileSync('dist/button/button.d.ts', )
  //       }
  //     }
  //   ],
  // }),
  // Object.assign({}, base, {
  //   input: "src/components/button/index.ts",
  //   output: [{
  //     file: "dist/button/index.d.ts",
  //     format: "es"
  //   }],
  //   plugins: [
  //     css({
  //       output: styles => {},
  //     }),
  //   ],
  // }),
  // Object.assign({}, base, {
  //   input: 'src/components/button/index.ts',
  //   output: {
  //     name: 'button',
  //     file: 'dist/es/button/button.esm.js',
  //     format: 'es',
  //     // sourcemap: true,
  //   },
  //   plugins: [
  //     ...base.plugins,
  //     css({
  //       output: styles => {
  //         fs.ensureDirSync('dist/es/button')
  //         fs.writeFileSync('dist/es/button/index.css', new CleanCSS().minify(styles).styles)
  //       },
  //     }),
  //     {
  //       name: "dts",
  //       buildStart() {
  //         fs.ensureDirSync('dist/es/button')
  //         fs.writeFileSync('dist/es/button/button.d.ts', fs.readFileSync('build/type.d.template', {
  //           encoding: 'utf8'
  //         }).replace(/demo/g, 'button'))
  //       }
  //     }
  //   ],
  //   external: [
  //     ...base.external,
  //     'focus-visible',
  //     'v-tooltip',
  //     'vue-resize',
  //   ],
  // }),
  // Object.assign({}, base, {
  //   input: 'src/components/dropdown/index.ts',
  //   output: {
  //     name: 'dropdown',
  //     file: 'dist/es/dropdown/dropdown.esm.js',
  //     format: 'es',
  //     // sourcemap: true,
  //   },
  //   plugins: [
  //     ...base.plugins,
  //     css({
  //       output: styles => {
  //         fs.ensureDirSync('dist/es/dropdown')
  //         fs.writeFileSync('dist/es/dropdown/index.css', new CleanCSS().minify(styles).styles)
  //       },
  //     }),
  //     {
  //       name: "dts",
  //       buildStart() {
  //         fs.ensureDirSync('dist/es/dropdown')
  //         fs.writeFileSync('dist/es/dropdown/dropdown.d.ts', fs.readFileSync('build/type.d.template', {
  //           encoding: 'utf8'
  //         }).replace(/demo/g, 'dropdown'))
  //       }
  //     }
  //   ],
  //   external: [
  //     ...base.external,
  //     'focus-visible',
  //     'v-tooltip',
  //     'vue-resize',
  //   ],
  // })
]

export default generate(config, 'es')
