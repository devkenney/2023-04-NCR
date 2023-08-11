module.exports = (lower, upper) => {
  return Math.floor((Math.random() * (upper - lower)) + lower)
}