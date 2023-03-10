// https://leetcode.com/problems/max-area-of-island/description/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]]
  const isValid = (r, c) => (
    r >= 0 && c >= 0 && r < height && c < width && grid[r][c] === 1
  )
  const dfs = (r, c) => {
    let islandSize = 0

    if (grid[r][c] === 1) {
      islandSize++
      grid[r][c] = 0
    }

    for (const [dX, dY] of dirs) {
      const nR = r + dX
      const nC = c + dY

      if (isValid(nR, nC)) {
        islandSize += dfs(nR, nC)
      }
    }

    return islandSize
  }

  const height = grid.length
  const width = grid[0].length
  let ans = 0
  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      if (grid[r][c] === 1) {
        ans = Math.max(ans, dfs(r, c))
      }
    }
  }

  return ans
}