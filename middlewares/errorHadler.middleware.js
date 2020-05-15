const errorHandlerMiddleware = (err, req, res, next) => {
    res.err = err
    next()
  }
  
  exports.errorHandlerMiddleware = errorHandlerMiddleware
  