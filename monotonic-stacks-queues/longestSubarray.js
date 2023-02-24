// https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/description/
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
const longestSubarray = (nums, limit) => {
  const asc = []
  const desc = []
  let ans = start = 0

  for (let end = 0; end < nums.length; end++) {
    while (asc[asc.length - 1] > nums[end]) {
      asc.pop()
    }

    while (desc[desc.length - 1] < nums[end]) {
      desc.pop()
    }

    asc.push(nums[end])
    desc.push(nums[end])

    while (desc[0] - asc[0] > limit) {
      if (desc[0] === nums[start]) {
        desc.shift()
      } else if (asc[0] === nums[start]) {
        asc.shift()
      }

      start++
    }

    ans = Math.max(ans, end - start + 1)
  }

  return ans
};