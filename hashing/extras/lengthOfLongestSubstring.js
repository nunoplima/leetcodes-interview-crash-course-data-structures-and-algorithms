/**
 * @param {string} s
 * @return {number}
 */
const naiveSlidingWindowlengthOfLongestSubstring = s => {
  const freq = new Map()
  let start = ans = 0
  for (let end = 0; end < s.length; end++) {
    const char = s[end]
    freq.set(char, (freq.get(char) || 0) + 1)

    while (freq.get(char) > 1) {
      freq.set(s[start], freq.get(s[start]) - 1)

      if (freq.get(s[start]) === 0) {
        freq.delete(s[start])
      }

      start++
    }

    ans = Math.max(ans, end - start + 1)
  }

  return ans
}

const lengthOfLongestSubstring = s => {
  const freq = new Map()
  let start = ans = 0
  for (let end = 0; end < s.length; end++) {
    const char = s[end]

    if (freq.has(char)) {
      start = Math.max(freq.get(char) + 1, start) // don't move if the char in freq is outside (before) the window
    }

    freq.set(char, end)

    ans = Math.max(ans, end - start + 1)
  }

  return ans
}

console.log(lengthOfLongestSubstring('tmmzuxt')) // 5
console.log(lengthOfLongestSubstring('abba')) // 2
console.log(lengthOfLongestSubstring('abcabcbb')) // 3
console.log(lengthOfLongestSubstring('pwwkew')) // 3
console.log(lengthOfLongestSubstring('bbbbb')) // 1
