const assert = require('assert')
const parser = require('../src/parser')
const runtime = require('../src/runtime')
const mockData = require('../src/mockData')


let testData = mockData.tokensTest[7]
let val = runtime.run(parser.parse(testData.tokens))
assert.equal(val, testData.result)
return

mockData.tokensTest.forEach(test => {
  let val = runtime.run(parser.parse(test.tokens))
  assert.equal(val, test.result)
})
