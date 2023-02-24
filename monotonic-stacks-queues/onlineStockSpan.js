var StockSpanner = function () {
  this.stack = []
}

/**
* @param {number} price
* @return {number}
*/
StockSpanner.prototype.next = function (price) {
  let ans = 1
  while (this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price) {
    const popped = this.stack.pop()[1]
    ans += popped
  }

  this.stack.push([price, ans])

  return ans
}

/**
* Your StockSpanner object will be instantiated and called as such:
* var obj = new StockSpanner()
* var param_1 = obj.next(price)
*/