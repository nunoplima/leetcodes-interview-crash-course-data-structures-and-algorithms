/**
 * @param {number} size
 */
const MovingAverage = size => {
  this.q = []
  this.size = size
  this.total = 0
};

/**
* @param {number} val
* @return {number}
*/
MovingAverage.prototype.next = function(val) {
  this.q.push(val)

  const first = this.q.length > this.size ? this.q.shift() : 0
  this.total += val - first

  return this.total / this.q.length
}

/**
* Your MovingAverage object will be instantiated and called as such:
* var obj = new MovingAverage(size)
* var param_1 = obj.next(val)
*/