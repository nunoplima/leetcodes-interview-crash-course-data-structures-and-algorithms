// A continuous subarray is called nice if there are k odd numbers on it.
// Return the number of nice sub-arrays.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numberOfSubarrays = (nums, k) => {
  const freq = new Map()
  freq.set(0, 1)

  let curr = ans = 0
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    curr += num % 2 // = 1 if odd, 0 if even
    ans += freq.get(curr - k) || 0

    freq.set(curr, (freq.get(curr) || 0) + 1)
  }

  return ans
}

console.log(numberOfSubarrays([2,2,2,1,2,2,1,2,2,2], 2)) // 16
console.log(numberOfSubarrays([1,1,2,1,1], 3)) // 2