const logger = (req, res, next) => {
  console.log(`${req.url} : ${req.method} - ${new Date().toLocaleTimeString()}`);
  console.log(req.session);
  next();
};

module.exports = logger;