// Return the minimum number of consecutive cards you have to pick up to have a pair of matching cards
// among the picked cards. If it is impossible to have matching cards, return -1.

// sliding window solution
const slidingWindowMinimumCardPickup = cards => {
  let start = 0
  let ans = Infinity
  const dict = new Map()

  for (let end = 0; end < cards.length; end++) {
      const n = cards[end]
      dict.set(n, (dict.get(n) || 0) + 1)

      while (dict.get(n) > 1) {
          ans = Math.min(ans, end - start + 1)

          dict.set(cards[start], dict.get(cards[start]) - 1)
          start++
      }
  }

  return ans === Infinity ? -1 : ans
}

const minimumCardPickup = cards => {
  const dict = new Map()
  let ans = Infinity

  for (let i = 0; i < cards.length; i++) {
    const n = cards[i]
    if (!dict.has(n)) {
      dict.set(n, i)
    } else {
      ans = Math.min(ans, i - dict.get(n) + 1)
      dict.set(n, i)
    }
  }

  return ans === Infinity ? -1 : ans
}

console.log(minimumCardPickup([3,4,2,3,4,7])) // 4