// https://leetcode.com/problems/number-of-recent-calls/description/
const RecentCounter = () => {
  this.q = []
}

/**
* @param {number} t
* @return {number}
*/
RecentCounter.prototype.ping = function (t) {
  while (this.q[0] < t - 3000) {
    this.q.shift()
  }

  this.q.push(t)

  return this.q.length
}

/**
* Your RecentCounter object will be instantiated and called as such:
* var obj = new RecentCounter()
* var param_1 = obj.ping(t)
*/