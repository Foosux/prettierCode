/** stylelint 规则 */

module.exports = {
  extends: [
    // eslint默认检测规则（非必选，可挑选使用其它大厂规则）
    'stylelint-config-standard'
  ],
  plugins: ['stylelint-order'],
  rules: {
    // 整理css书写顺序
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-alphabetical-order': true,
    // 允许使用ID
    'selector-max-id': null,
    // 允许使用颜色名
    'color-named': null,
    // 不要使用已被 autoprefixer 支持的浏览器前缀
    'media-feature-name-no-vendor-prefix': true,
    // 屏蔽一些scss等语法检查
    'at-rule-no-unknown': [
      true,
      { ignoreAtRules: ['mixin', 'extend', 'content', 'include'] }
    ],
    // 忽略 font-family 中的限制
    'font-family-no-missing-generic-family-keyword': null
  }
}
