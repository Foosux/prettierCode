module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    // eslint默认检测规则（非必选，可挑选使用其它大厂规则）
    'eslint:recommended', 
    // Prettier检测规则，修复与eslint检测重复的问题（建议选择）    
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    // 制定解析ES的版本，若开启了 evn_es6_true 则默认为 6
    // 2009/ES5 2015/ES6 2016/ES7 2017/ES8 2018/ES9 2019/ES10
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
