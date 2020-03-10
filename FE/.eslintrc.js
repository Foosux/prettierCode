module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    // eslint默认检测规则（非必选）
    'eslint:recommended', 
    // React检测规则（React项目必选）
    'plugin:react/recommended', 
    // Prettier检测规则，修复与eslint检测重复的问题（必选）    
    'plugin:prettier/recommended'
  ],
  globals: {
  },
  parserOptions: {
    ecmaFeatures: {
      // 开启 .jsx 文件的检测。配合 【eslint --ext .jsx ./】 指令使用。
      jsx: true
    },
    // 制定ES版本，若开启了 evn_es6_true 则默认为 6
    ecmaVersion: 2019,
    // import & export 等模块化语法必须
    sourceType: 'module'
  },
  // extends规则使用融合语法时，可省略 plugins
  plugins: [],
  rules: {
    // extends规则使用融合语法时，可省略对应 rules（默认等级为 error）
    'prettier/prettier': 'warn'
  }
}
