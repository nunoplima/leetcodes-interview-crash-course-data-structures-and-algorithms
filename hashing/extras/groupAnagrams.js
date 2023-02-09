// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
const groupAnagrams = strs => {
  const dict = new Map()

  for (let str of strs) {
    const sorted = str.split('').sort((a, b) => a.localeCompare(b)).join('')
    if (!dict.has(sorted)) {
      dict.set(sorted, [])
    }

    dict.get(sorted).push(str)
  }

  return [...dict.values()]
}

console.log(groupAnagrams(['eat','tea','tan','ate','nat','bat'])) // [["bat"],["nat","tan"],["ate","eat","tea"]]