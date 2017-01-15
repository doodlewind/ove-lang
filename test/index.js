const assert = require('assert')
const lexer = require('../src/lexer')
const parser = require('../src/parser')
const runtime = require('../src/runtime')
const tokens = require('./tokens')
const input = require('./input')


tokens.forEach(item => {
  let val = runtime.run(parser.parse(item.tokens))
  assert.deepEqual(val, item.result)
})

input.forEach(item => {
  // TODO
  // let val = runtime.run(parser.parse(lexer.lex(item.text)))
  // assert.deepEqual(val, item.result)
})
