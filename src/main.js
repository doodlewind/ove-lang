const assert = require('assert')
const lexer = require('./lexer')
const parser = require('./parser')
const runtime = require('./runtime')
const tokens = require('../test/tokens')
const input = require('../test/input')
const index = parseInt(process.argv[2])

function testToken (index) {
  let item = tokens[index]
  return runtime.run(parser.parse(item.tokens))
}

function testOve (index) {
  let text = input[index].text
  return lexer.lex(text)
}

console.log(testOve(index))
