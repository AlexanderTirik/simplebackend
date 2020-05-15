const responseMiddleware = (req, res, next) => {
  if (res.err) {
    res.statusCode = 400
    res.send(res.err)
  } else {
    res.statusCode = 200
    res.send(res.data)
  }
}

exports.responseMiddleware = responseMiddleware
