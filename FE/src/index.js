/** JS测试代码 */

import test from './index2.js';

console.log(test);
alert(sdfsdsssfsd);

      const obj = { age: 18, name: "TOM" }

const arr = [{ age: 18 }, { name: 'Lucy' }]

function show() {
  console.log(obj.age)
  console.log(arr[1].name)
}

var a = item => {
  console.log(obj.name)
}

var a = {
  parserOptions: {
    parser: 'babel-eslint', // 解析器，默认使用Espree
    ecmaVersion: 6, // 支持es6语法，但并不意味着同时支持新的 ES6 全局变量或类型（比如 Set 等新类型）
    sourceType: 'module', // 指定来源的类型，"script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
    // 使用的额外的语言特性
    ecmaFeatures: {
      jsx: true, // 启用 JSX
      globalReturn: true, // 允许在全局作用域下使用 return 语句
      impliedStrict: true, // 启用全局 strict mode (如果 ecmaVersion 是 5 或更高)
      experimentalObjectRestSpread: true // 启用实验性的 object rest/spread properties 支持。(重要：这是一个实验性的功能,在未来可能会有明显改变。 建议你写的规则 不要 依赖该功能，除非当它发生改变时你愿意承担维护成本。)
    }
  }
}
