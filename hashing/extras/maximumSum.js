const getDigitsSum = (n) => {
  if (n < 10) return n
  const unit = n % 10

  return getDigitsSum(Math.floor(n / 10)) + unit
}

// Return the maximum value of nums[i] + nums[j] that you can obtain
// where the sum of digits of the number nums[i] is equal to that of nums[j]
/**
* @param {number[]} nums
* @return {number}
*/
const maximumSum = (nums) => {
  const dict = new Map()

  let ans = -1
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const digitsSum = getDigitsSum(num)

    if (dict.has(digitsSum)) {
      ans = Math.max(ans, num + dict.get(digitsSum))
    }

    // only replace the digitSum val if num is > than the current value in dict
    dict.set(digitsSum, Math.max(num, dict.get(digitsSum) || 0))
  }

  return ans
}

console.log(maximumSum([18,43,36,13,7])) // 54
console.log(maximumSum([10,12,19,14])) // -1