/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
  let curr = ans = 0
  const freq = new Map()
  freq.set(0, 1)

  for (const num of nums) {
      curr += num
      ans += freq.get(curr - goal) || 0
      freq.set(curr, (freq.get(curr) || 0) + 1)
  }

  return ans
}