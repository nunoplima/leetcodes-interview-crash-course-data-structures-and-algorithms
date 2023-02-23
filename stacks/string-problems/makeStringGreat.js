const isPair = (a, b) => (
  // A 65 - a 97
  Math.abs(a.charCodeAt(0) - b.charCodeAt(0)) === 32
)

/**
 * @param {string} s
 * @return {string}
 */
// A good string is a string which doesn't have two adjacent characters where ie: aA or Aa
const makeGood = s => {
  s = s.split('')
  const stack = [s.shift()]

  while (s.length > 0) {
    const a = s.shift()
    const b = stack[stack.length - 1]

    if (b && isPair(a, b)) {
      stack.pop()
    } else {
      stack.push(a)
    }
  }

  return stack.join('')
}