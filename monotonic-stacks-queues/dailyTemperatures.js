// https://leetcode.com/problems/daily-temperatures/
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = temperatures => {
  const ans = new Array(temperatures.length).fill(0)
  const stack = []

  for (let i = 0; i < temperatures.length; i++) {
      while (temperatures[stack[stack.length - 1]] < temperatures[i]) {
          const j = stack.pop()
          ans[j] = i - j
      }

      stack.push(i)
  }

  return ans
};