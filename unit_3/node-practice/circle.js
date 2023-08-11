module.exports.area = (radius) => {
  return (Math.round(Math.pow(radius, 2) * Math.PI))
}

module.exports.circumference = (radius) => {
  return (Math.round(radius * 2 * Math.PI))
}