/** prettier配置项说明 */

const prettierrc = {
  printWidth: 80, // 一行的字符数，如果超过会进行换行，默认为80
  tabWidth: 2, // 一个tab代表几个空格数, 默认为2
  useTabs: false, // 是否使用tab进行缩进，默认为false
  semi: true, // 行尾是否使用分号，默认为true
  singleQuote: false, // 字符串是否使用单引号，默认为false，使用双引号
  quoteProps: 'as-needed', // 对象key是否带引号，"<as-needed|consistent|preserve>" 默认as-needed （除非有必要 | 只要一个有必要则全部应用 | 不做改变 ）
  jsxSingleQuote: false, // JSX属性中使用单引号, 默认false
  trailingComma: 'none', // objects, arrays等中是否使用尾逗号，有三个可选值"<none|es5|all>"。默认是 none
  bracketSpacing: true, // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
  jsxBracketSameLine: false, // 设置JSX中 标签> 是否在属性行，默认false
  arrowParens: 'avoid', // 函数参数是否省略括号，"<avoid|always>"，默认 avoid，省略
  rangeStart: 0, // 只格式化某个文件的一部分, 默认从0开始 (以字符为单位)
  rangeEnd: Infinity, // 只格式化某个文件的一部分, 默认到 无穷大 结束
  parser: 'babylon', // 代码的解析引擎，默认为babylon，与babel相同。
  FilePath: none, // 指定文件的输入路径，这将被用于解析器参照 filePath: "<string> ",默认 none
  requirePragma: false, // 必须杂注,严格按照按照文件顶部的一些特殊的注释格式化代码 "<bool>", 默认 false
  insertPragma: false, // 是否为已格式化的文件加上头部注释 "<bool>", 默认 false
  proseWrap: 'perserve', // 是否启用折行 <always|never|preserver > <超出printWidth就折行|不折行|按照文件原样折行>

  eslintIntegration: false, //不让prettier使用eslint的代码格式进行校验
  stylelintIntegration: false, //不让prettier使用stylelint的代码格式进行校验
  tslintIntegration: false, // 不让prettier使用tslint的代码格式进行校验
  disableLanguages: ['vue'], // 不格式化vue文件，vue文件的格式化单独设置
  ignorePath: '.prettierignore', // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
  endOfLine: 'auto', // 结尾是 \n \r \n\r auto
  htmlWhitespaceSensitivity: 'ignore'
}

// 解析器可选项
const parser = [
  'babylon', // 与babel相同
  'vue',
  'flow',
  'typescript Since v1.4.0',
  'postcss Since v1.4.0',
  'json Since v1.5.0',
  'graphql Since v1.5.0',
  'markdown Since v1.8.0',
  require('./my-parserrr') // 使用自定义解析器
]

// requirePragma: true 时带有如下顶部注释的代码才会被格式化
/** @prettier */
/** @format */
