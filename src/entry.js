const lexer = require('./lexer')
const parser = require('./parser')
const runtime = require('./runtime')


const ove = {
  exec (text, hasPreprocess = true) {
    return runtime.run(parser.parse(lexer.lex(text, hasPreprocess)))
  }
}

// 浏览器环境 API
window.ove = ove
