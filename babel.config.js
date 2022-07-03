module.exports = {
  'presets': [
    '@vue/babel-preset-jsx',
    [
      '@babel/env', {
        'modules': false,
      },
    ],
  ],
  plugins: [
    ["@babel/plugin-transform-runtime"]
  ]
}
