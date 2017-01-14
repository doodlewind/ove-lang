const assert = require('assert')
const parser = require('./parser')
const runtime = require('./runtime')
const mockData = require('./mockData')
const index = parseInt(process.argv[2])

function testToken (index) {
  let testData = mockData.tokensTest[index]
  return runtime.run(parser.parse(testData.tokens))
}

console.log(testToken(index))
