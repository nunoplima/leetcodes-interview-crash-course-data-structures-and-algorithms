// https://leetcode.com/problems/next-greater-element-i/description/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = (nums1, nums2) => {
  const indices = new Map()
  const arr = new Array(nums2.length).fill(-1)
  const stack = []
  for (let i = 0; i < nums2.length; i++) {
    const num = nums2[i]
    indices.set(num, i)

    while (nums2[stack[stack.length - 1]] < num) {
      const idx = stack.pop()
      arr[idx] = num
    }

    stack.push(i)
  }

  const ans = []
  for (let j = 0; j < nums1.length; j++) {
    const num = nums1[j]
    ans.push(arr[indices.get(num)] || -1)
  }

  return ans
}