function preprocess (str) {
  return str
    .replace(/加/g, '+')
    .replace(/减/g, '-')
    .replace(/乘/g, '*')
    .replace(/除/g, '/')
}

module.exports = {
  lex (str) {
    let schemeStr = preprocess(str)
    return schemeStr
  }
}
