// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
const groupAnagrams = strs => {
  const anagrams = new Map()

  for (let str of strs) {
    const sorted = str.split('').sort((a, b) => a.localeCompare(b)).join('')
    if (!anagrams.has(sorted)) {
      anagrams.set(sorted, [])
    }

    anagrams.get(sorted).push(str)
  }

  return [...anagrams.values()]
}

console.log(groupAnagrams(['eat','tea','tan','ate','nat','bat'])) // [["bat"],["nat","tan"],["ate","eat","tea"]]