/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = (nums, k) => {
  const freq = new Map()
  freq.set(0, 1)

  let count = curr = 0
  for (let i = 0; i < nums.length; i++) {
    curr += nums[i]
    count += freq.get(curr - k) || 0

    freq.set(curr, (freq.get(curr) || 0) + 1)
  }

  return count
}

console.log(subarraySum([1, 2, 1, 2, 1], 3)) // 4
console.log(subarraySum([1, 1, 1], 2)) // 2
