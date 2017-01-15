#!/usr/bin/env node
const lexer = require('./lexer')
const parser = require('./parser')
const runtime = require('./runtime')

function ove (text, hasPreprocess = true) {
  return runtime.run(parser.parse(lexer.lex(text, hasPreprocess)))
}

// 浏览器环境 API
if (typeof window !== 'undefined') window.ove = ove
// Node 环境下解释输入参数
else console.log(ove(process.argv[2]))

module.exports = ove
