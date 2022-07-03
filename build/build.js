import fs from 'fs-extra'
import path from 'path'
import base from './rollup.config.base'
import css from 'rollup-plugin-css-only'
import CleanCSS from 'clean-css'

export function generate(config, type) {
    const files = fs.readdirSync(path.resolve(__dirname, '../src/components'), {
        withFileTypes: true
    })
    for (let item of files) {
        if (item.isDirectory()) {
            config.push(Object.assign({}, base, {
                input: `src/components/${item.name}/index.ts`,
                output: {
                    name: item.name,
                    file: `dist/${type}/${item.name}/${item.name}.esm.js`,
                    format: type,
                    // sourcemap: true,
                },
                plugins: [
                    ...base.plugins,
                    css({
                        output: styles => {
                            fs.ensureDirSync(`dist/${type}/${item.name}`)
                            fs.writeFileSync(`dist/${type}/${item.name}/index.css`, new CleanCSS().minify(styles).styles)
                        },
                    }),
                    {
                        name: "dts",
                        buildStart() {
                            fs.ensureDirSync(`dist/${type}/${item.name}`)
                            fs.writeFileSync(`dist/${type}/${item.name}/${item.name}.d.ts`, fs.readFileSync('build/type.d.template', {
                                encoding: 'utf8'
                            }).replace(/demo/g, item.name))
                        }
                    }
                ],
                external: [
                    ...base.external,
                    'focus-visible',
                    'v-tooltip',
                    'vue-resize',
                ],
            }), )
        }
    }
    return config
}