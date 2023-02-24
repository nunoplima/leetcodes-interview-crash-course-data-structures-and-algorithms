/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicates = s => {
  const stack = []
  for (const char of s) {
    const last = stack[stack.length - 1]
    if (last !== char) {
      stack.push(char)
    } else {
      stack.pop()
    }
  }

  return stack.join('')
}