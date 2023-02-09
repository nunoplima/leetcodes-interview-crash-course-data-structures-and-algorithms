// this is also a sliding window problem
const findLongestSubstring = (s, k) => {
  const freq = new Map()
  let maxLen = start = 0
  for (let end = 0; end < s.length; end++) {
    // update char frequency
    freq.set(s[end], (freq.get(s[end]) || 0) + 1)

    // shrink window
    while(freq.size > k) {
      freq.set(s[start], freq.get(s[start]) - 1)
      if (freq.get(s[start]) === 0) {
        freq.delete(s[start])
      }

      start++
    }

    // set max length
    maxLen = Math.max(maxLen, end - start + 1)
  }

  return maxLen
}

console.log(findLongestSubstring('eceba', 2)) // 3 => ece