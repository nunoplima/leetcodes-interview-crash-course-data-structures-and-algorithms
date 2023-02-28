/**
 * @param {string} path
 * @return {boolean}
 */
const isPathCrossing = path => {
  let currX = currY = 0
  const visited = new Map()
  visited.set(`${currX}-${currY}`, true)

  const dirs = {
    'N': [-1, 0],
    'E': [0, 1],
    'S': [1, 0],
    'W': [0, -1],
  }

  for (const pos of path) {
    const [x, y] = dirs[pos]
    currX += x
    currY += y

    if (visited.has(`${currX}-${currY}`)) {
      return true
    }

    visited.set(`${currX}-${currY}`, true)
  }

  return false
};