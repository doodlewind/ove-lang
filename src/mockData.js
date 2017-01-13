module.exports = {
  tokensTest: [
    { // 0
      tokens:
        '( + 1 2 )'
        .split(/\s+/),
      result: 3
    },
    { // 1
      tokens:
        '( - 1 2 )'
        .split(/\s+/),
      result: -1
    },
    { // 2
      tokens:
        '( + 1 ( - 2 3 ) )'
        .split(/\s+/),
      result: 0
    },
    { // 3
      tokens:
        '( + 1 ( * 2 3 ) )'
        .split(/\s+/),
      result: 7
    },
    { // 4
      tokens:
        '( if ( > 1 0 ) 2 3 )'
        .split(/\s+/),
      result: 2
    },
    { // 5
      tokens:
        '( begin ( + 1 2 ) ( + 2 3 ) )'
        .split(/\s+/),
      result: 5
    },
    { // 6
      tokens:
        '( define x 10 )'
        .split(/\s+/),
      result: null
    },
    { // 7
      tokens:
        '( begin ( define x 10 ) ( + x 0 ) )'
        .split(/\s+/),
      result: 10
    }
  ]
}
