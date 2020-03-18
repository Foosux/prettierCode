module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    // eslint默认检测规则（非必选，可挑选使用其它大厂规则）
    'airbnb',
    'airbnb/hooks',
    // react检测规则
    'plugin:react/recommended',
    // Prettier检测规则，修复与eslint检测重复的问题（建议选择）
    'plugin:prettier/recommended'
  ],
  globals: {
    react: true
  },
  parserOptions: {
    // 解析器切换为 babel-eslint
    parser: 'babel-eslint',
    // 制定解析ES的版本，若开启了 evn_es6_true 则默认为 6
    // 2009/ES5 2015/ES6 2016/ES7 2017/ES8 2018/ES9 2019/ES10
    ecmaVersion: 2019,
    // import & export 等模块化语法必须
    sourceType: 'module',
    // 指定ESLint可以解析JSX语法
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    // 使用webpack中配置的resolve路径，需要安装 eslint-plugin-import
    'import/resolver': 'webpack'
    //自动发现React的版本，从而进行规范react代码
    // react: {
    //   pragma: 'React',
    //   version: 'detect'
    // }
  },
  // extends规则使用融合语法时，可省略 plugins
  plugins: [],
  rules: {
    // extends规则使用融合语法时，可省略对应 rules（默认等级为 error）
    'prettier/prettier': 'error'

    /** 指定react编码规范 */
    // 只能在React函数组件中被调用等 hooks 使用规则
    // 'react-hooks/rules-of-hooks': 'error',
    // 强制在使用 effect 的时候，申明所需要的依赖
    // 'react-hooks/exhaustive-deps': 'warn'
  }
}
