const errorHandlerMiddleware = (err, req, res, next) => {
    res.err = err
    if (~err.message.indexOf("not found")){
      res.statusCode = 404
    }
    if (~err.message.indexOf("is invalid")){
      res.statusCode = 400
    }
    next()
  }
  
  exports.errorHandlerMiddleware = errorHandlerMiddleware
  