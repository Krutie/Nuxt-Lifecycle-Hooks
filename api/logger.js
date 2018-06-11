module.exports = function (req, res, next) {
  console.log('Logger serverMiddleware called')
  next()
}