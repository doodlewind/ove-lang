const assert = require('assert')
const parser = require('../src/parser')
const runtime = require('../src/runtime')
const mockData = require('../src/mockData')


mockData.tokensTest.forEach(test => {
  let val = runtime.run(parser.parse(test.tokens))
  assert.deepEqual(val, test.result)
})
