const errorHandler = (err, req, res, next) => res.status(err.statusCode).send(err)
export default errorHandler; 