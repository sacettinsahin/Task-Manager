const { CustomAPIError } = require("../errors/custom-errors");
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.msg });
  }
  return res.status(500).json({ message: err.message });
};

module.exports = errorHandlerMiddleware;
