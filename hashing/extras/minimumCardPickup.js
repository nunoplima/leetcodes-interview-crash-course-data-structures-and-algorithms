// Return the minimum number of consecutive cards you have to pick up to have a pair of matching cards
// among the picked cards. If it is impossible to have matching cards, return -1.

// sliding window solution
const slidingWindowMinimumCardPickup = cards => {
  let start = 0
  let ans = Infinity
  const freq = new Map()

  for (let end = 0; end < cards.length; end++) {
      const n = cards[end]
      freq.set(n, (freq.get(n) || 0) + 1)

      while (freq.get(n) > 1) {
          ans = Math.min(ans, end - start + 1)

          freq.set(cards[start], freq.get(cards[start]) - 1)
          start++
      }
  }

  return ans === Infinity ? -1 : ans
}

const minimumCardPickup = cards => {
  const prefix = new Map()
  let ans = Infinity

  for (let i = 0; i < cards.length; i++) {
    const n = cards[i]
    if (!prefix.has(n)) {
      prefix.set(n, i)
    } else {
      ans = Math.min(ans, i - prefix.get(n) + 1)
      prefix.set(n, i)
    }
  }

  return ans === Infinity ? -1 : ans
}

console.log(minimumCardPickup([3,4,2,3,4,7])) // 4