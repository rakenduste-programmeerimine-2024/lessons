const catsRouteMiddleware = (req, res, next) => {
  console.log("Time: ", Date.now());
  next();
};

const catsGetRouteMiddleware = (req, res, next) => {
  console.log("GET middleware");
  next();
};

module.exports = { catsRouteMiddleware, catsGetRouteMiddleware };
