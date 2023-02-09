/**
 * @param {number[][]} grid
 * @return {number}
 */
const equalPairs = grid => {
  const rows = new Map()
  const cols = new Map()
  for (let r = 0; r < grid.length; r++) {
      const rStr = grid[r].join('-')
      rows.set(rStr, (rows.get(rStr) || 0) + 1)
  }

  for (let c = 0; c < grid[0].length; c++) {
      const cStrArr = []
      for (let r = 0; r < grid.length; r++) {
          cStrArr.push(grid[r][c])
      }

      const cStr = cStrArr.join('-')
      cols.set(cStr, (cols.get(cStr) || 0) + 1)
  }

  let ans = 0
  for (const [k, v] of rows) {
      ans += v * cols.get(k) || 0
  }

  return ans
}