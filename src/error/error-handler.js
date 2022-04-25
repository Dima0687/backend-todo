app.use(errorLogger)
app.use(errorResponder)
app.use(failSafeHandler)

const errorLogger = (err, req, res, next) => {
    console.error(err);
    next(err) 
  }
  
  const errorResponder = (err, req, res, next) => {
    res.header("Content-Type", 'application/json')
    res.status(err.statusCode).send(JSON.stringify(err, null, 4))
  }
  const invalidPathHandler = (req, res, next) => {
    res.redirect('/error')
  }
  
  module.exports = { errorLogger, errorResponder, invalidPathHandler }





















/* const logger = require("../loggers/logger");
const BaseError = require("./baseError");

function logError(err) {
  console.error(err);
}

function logErrorMiddleware(err, req, res, next) {
  logError(err);
  next(err);
}

function returnError(err, req, res, next) {
  res.status(err.statusCode || 500).send(err.message);
}

function isOperationalError(error) {
  if (error instanceof BaseError) {
    return error.isOperational;
  }
  return false;
}

module.exports = {
  logError,
  logErrorMiddleware,
  returnError,
  isOperationalError,
};
 */