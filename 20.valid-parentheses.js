// @leet start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let round = 0
  let square = 0
  let curly = 0
  const order = []
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
        order.push('(')
        round++
        break;
      case ')':
        if (order[order.length - 1] === '(') {
          order.pop()
          round--
        } else {
          return false
        }
        break;
      case '[':
        order.push('[')
        square++
        break;
      case ']':
        if (order[order.length - 1] === '[') {
          order.pop()
          square--
        } else {
          return false
        }
        break
      case '{':
        order.push('{')
        curly++
        break
      case '}':
        if (order[order.length - 1] === '{') {
          order.pop()
          curly--
        } else {
          return false
        }
        break
      default:
    }

    if (round < 0 || square < 0 || curly < 0) {
      return false
    }
  }
  if (round === 0 && square === 0 && curly === 0) {
    return true
  } else {
    return false
  }
};
// @leet end
