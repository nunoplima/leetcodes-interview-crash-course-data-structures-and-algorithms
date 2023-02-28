// https://leetcode.com/problems/maximum-erasure-value/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumUniqueSubarray = (nums) => {
  let curr = ans = start = 0
  const freq = new Map()
  for (let end = 0; end < nums.length; end++) {
    curr += nums[end]
    freq.set(nums[end], (freq.get(nums[end]) || 0) + 1)

    while (freq.get(nums[end]) > 1) {
      freq.set(nums[start], freq.get(nums[start]) - 1)
      curr -= nums[start]
      start++
    }

    ans = Math.max(ans, curr)
  }

  return ans
}