const findMaxNumberofPattern = (text, pattern) => {
  const offset = 'a'.charCodeAt(0)

  const freqText = new Array(26).fill(0)
  for (const tChar of text) {
    const idx = tChar.charCodeAt(0) - offset
    freqText[idx] += 1
  }

  const freqPattern = new Array(26).fill(0)
  for (const pChar of pattern) {
    const idx = pChar.charCodeAt(0) - offset
    freqPattern[idx] += 1
  }

  let ans = Infinity
  for (let i = 0; i < 26; i++) {
    if (freqPattern[i] > 0) {
      ans = Math.min(ans, Math.floor(freqText[i] / freqPattern[i]))
    }
  }

  return ans
}

/**
* @param {string} text
* @return {number}
*/
const maxNumberOfBalloons = (text) => {
  return findMaxNumberofPattern(text, 'balloon')
}

const _maxNumberOfBalloons = text => {
  const map = { b: 0, a: 0, l: 0, o: 0, n: 0 }

  for (const l of text) {
      map[l]++
  }

  return Math.floor(
      Math.min(map.b, map.a, map.l / 2, map.o / 2, map.n)
  )
}

console.log(maxNumberOfBalloons('nlaebolko')) // 1
console.log(maxNumberOfBalloons('loonbalxballpoon')) // 2