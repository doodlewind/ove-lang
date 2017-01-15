const LBracket = new RegExp(/^\(/)
const RBracket = new RegExp(/^\)/)
// 非左括号 非右括号 非空白
const Value = new RegExp(/^[^\(\)\s]+/)

function padBracket (str) {
  let needPad = false
  if (str.indexOf('哦。') > -1) needPad = true
  str = str
    .replace('哦。', '')
    .replace(/）|哦/g, ')')
    .replace(/（/g, '(')
  if (needPad) {
    const lCount = (str.match(/\(/g) || []).length
    const rCount = (str.match(/\)/g) || []).length
    for (let i = 0; i < lCount - rCount; i++) str += ')'
  }
  return str
}

function preprocess (str) {
  return padBracket(str)
    .replace(/表态/g, 'begin')
    .replace(/钦点/g, 'define')
    .replace(/闷声/g, 'quote')
    .replace(/奉告/g, 'lambda')
    .replace(/资辞吗/g, 'if')
}

function trim (str) {
  return str.replace(/^\s+|\s+$/, '')
}

function getToken (str) {
  if (str.match(RBracket)) return str.match(RBracket)[0]
  else if (str.match(LBracket)) return str.match(LBracket)[0]
  else if (str.match(Value)) return str.match(Value)[0]
  throw 'LexicalError'
}

module.exports = {
  lex (str, hasPreprocess = true) {
    let schemeStr = hasPreprocess ? preprocess(str) : str
    let tokens = []
    while (schemeStr.length) {
      schemeStr = trim(schemeStr)
      let token = getToken(schemeStr)
      schemeStr = schemeStr.substr(token.length)
      token = trim(token)
      tokens.push(token)
    }
    return tokens
  }
}
