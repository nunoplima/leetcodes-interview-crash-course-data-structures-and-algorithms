/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
const findWinners = matches => {
  const prefix = new Array(10 ** 5 + 1).fill(-1) // size of the limit input + 1

  for (let i = 0; i < matches.length; i++) {
    const [w, l] = matches[i]
    if (prefix[w] === -1) {
        prefix[w]++
    }

    if (prefix[l] === -1) {
        prefix[l] = 1
    } else {
        prefix[l]++
    }
  }

  const zeroL = []
  const oneL = []
  for (let i = 0; i < prefix.length; i++) {
    if (prefix[i] === 0) zeroL.push(i)
    if (prefix[i] === 1) oneL.push(i)
  }

  return [zeroL, oneL]
}

console.log(findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]])) // [[1,2,10],[4,5,7,8]]