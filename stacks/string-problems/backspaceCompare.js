/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const buildString = s => {
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (char !== '#') {
      stack.push(char)
    } else {
      stack.pop()
    }
  }

  return stack
}

const backspaceCompare = (s, t) => {
  return buildString(s).join('') === buildString(t).join('')
}