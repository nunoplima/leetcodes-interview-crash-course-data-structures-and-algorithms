const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]]

const isValidNeighbor = (nRow, nCol, grid) => (
  nRow >= 0 && nCol >= 0 && nRow < grid.length && nCol < grid[0].length && grid[nRow][nCol] === '1'
)

const dfs = (row, col, grid) => {
  for (let [dX, dY] of dirs) {
    const nRow = row + dX
    const nCol = col + dY

    if (isValidNeighbor(nRow, nCol, grid)) {
      grid[nRow][nCol] = '0'
      dfs(nRow, nCol, grid)
    }
  }
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let ans = 0
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === '1') {
        grid[row][col] = '0'
        ans++
        dfs(row, col, grid)
      }
    }
  }

  return ans
}