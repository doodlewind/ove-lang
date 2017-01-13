let env = {}

const actions = {
  '+': args => args.reduce((a, b) => a + b),
  '-': args => args[0] - args[1],
  '*': args => args[0] * args[1],
  '/': args => args[0] / args[1],
  '>': args => args[0] > args[1],
  '<': args => args[0] < args[1],
  '=': args => args[0] === args[1],
  'if': args => args[0] ? args[1] : args[2],
  'begin': args => args[args.length - 1],
  'define': args => {
    env[args[0]] = args[1]
    return null
  }
}

function evaluate (expr) {
  let key = expr[0]
  let args = []
  for (let i = 1; i < expr.length; i++) {
    if (expr[i] instanceof Array) args.push(evaluate(expr[i]))
    else {
      if (!parseInt(expr[i]) && expr[i] !== '0') {
        if (env[expr[i]]) args.push(env[expr[i]])
        else args.push(expr[i])
      }
      else args.push(parseInt(expr[i]))
    }
  }
  return actions[key](args)
}

module.exports = {
  run (ast) {
    env = {}
    return evaluate(ast)
  }
}
