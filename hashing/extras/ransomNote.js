/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
  const dict = new Map()
  for (const char of magazine) {
      dict.set(char, (dict.get(char) || 0) + 1)
  }

  for (const char of ransomNote) {
      if (!dict.has(char) || dict.get(char) === 0) return false

      dict.set(char, dict.get(char) - 1)
  }

  return true
}

console.log(canConstruct('aa', 'abca')) // true
console.log(canConstruct('aa', 'ab')) // false