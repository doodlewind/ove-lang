let globalEnv = {}

const hasVar = (x, env) => x in env || x in globalEnv

const findVar = (x, env) => x in env ? env[x] : globalEnv[x]

function initEnv () {
  return {
    '+': args => args[0] + args[1],
    '-': args => args[0] - args[1],
    '*': args => args[0] * args[1],
    '/': args => args[0] / args[1],
    '>': args => args[0] > args[1],
    '<': args => args[0] < args[1],
    '=': args => args[0] === args[1],
    'begin': args => args[args.length - 1]
  }
}

function evaluate (x, env) {
  // 变量引用
  if (hasVar(x, env) && !(x instanceof Function)) return findVar(x, env)
  // 常量字面量
  else if (!(x instanceof Array)) {
    if (!parseInt(x) && x !== '0') return x
    else return parseInt(x)
  }
  // 表达式字面量
  else if (x[0] === 'quote') {
    x.splice(0, 1)
    return x
  }
  // 条件判断
  else if (x[0] === 'if') {
    return evaluate(x[1], env) ? evaluate(x[2], env) : evaluate(x[3], env)
  }
  // 变量定义
  else if (x[0] === 'define') {
    env[x[1]] = evaluate(x[2], env)
    return null
  }
  // 函数声明
  else if (x[0] === 'lambda') {
    return function () {
      let args = Array.prototype.slice.apply(arguments)[0]
      let localEnv = {}
      for (let i = 0; i < x[1].length; i++) {
        localEnv[x[1][i]] = evaluate(args[i], env)
      }
      return evaluate(x[2], localEnv)
    }
  }
  // 函数调用
  else {
    let args = []
    for (let i = 1; i < x.length; i++) {
      args.push(evaluate(x[i], env))
    }
    return findVar(x[0], env)(args)
  }
}

module.exports = {
  run (ast) {
    globalEnv = initEnv()
    return evaluate(ast, globalEnv)
  }
}
