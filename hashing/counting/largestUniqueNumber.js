/**
 * @param {number[]} nums
 * @return {number}
 */
const largestUniqueNumber = nums => {
  const freq = new Map()
  for (let num of nums) {
      freq.set(num, (freq.get(num) || 0) + 1)
  }

  let max = -1
  for (const [key, val] of freq) {
      if (val === 1) {
          max = Math.max(max, key)
      }
  }

  return max
}

console.log(largestUniqueNumber([5,7,3,9,4,9,8,3,1])) // 6