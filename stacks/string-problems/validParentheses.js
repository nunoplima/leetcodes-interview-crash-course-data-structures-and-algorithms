/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
  const parens = { '(': ')', '{': '}', '[': ']' }
  const stack = []
  for (const char of s) {
    // if its an opening parens
    if (char in parens) {
      stack.push(char)
    } else {
      const open = stack.pop()
      if (parens[open] !== char) {
        return false
      }
    }
  }

  return stack.length === 0
};