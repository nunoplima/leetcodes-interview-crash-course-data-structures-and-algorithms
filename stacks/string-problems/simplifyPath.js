/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = path => {
  path = path.split('/')
  const stack = []

  while (path.length > 0) {
      const curr = path.shift()
      if (curr === '..') {
          stack.pop()
      } else if (curr !== '.' && curr !== '') {
          stack.push(curr)
      }
  }

  return '/' + stack.join('/')
};