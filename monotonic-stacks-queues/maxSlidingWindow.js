// https://leetcode.com/problems/sliding-window-maximum/description/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = (nums, k) => {
  const ans = []
  const stack = []

  for (let end = 0; end < nums.length; end++) {
    while (nums[stack[stack.length - 1]] < nums[end]) {
      stack.pop()
    }

    stack.push(end)

    // if the max is outsode the window
    if (stack[0] < end + 1 - k) {
      stack.shift()
    }

    // if we are past k elements push to ans the max val in monotonic stack
    if (end + 1 >= k) {
      ans.push(nums[stack[0]])
    }
  }

  return ans
}