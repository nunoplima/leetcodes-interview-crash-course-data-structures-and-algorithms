// https://leetcode.com/problems/keys-and-rooms/

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const dfs = node => {
    for (const room of rooms[node]) {
      if (!visited.has(room)) {
        visited.add(room)
        dfs(room)
      }
    }
  }

  const visited = new Set()
  visited.add(0)
  dfs(0)

  return visited.size === rooms.length
}