function parse (tokens) {
  return readToken(tokens)
}

// 递归读取单个 token
function readToken (tokens) {
  if (!tokens.length) throw 'unexpected EOF'
  // 取出首个 token
  let token = tokens.splice(0, 1)[0]
  if (token === '(') {
    let L = []
    while (tokens[0] !== ')') L.push(readToken(tokens))
    // 弹出 ')' 符号
    tokens.splice(0, 1)[0]
    return L
  } else if (token === ')') throw 'unexpected \')\''
  else return token
}

module.exports = {
  parse
}
