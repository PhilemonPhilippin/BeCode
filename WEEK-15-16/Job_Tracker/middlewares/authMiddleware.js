const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.slice(7);
    if (token) {
      jwt.verify(token, "secretofjobtracker", async (err, decodedToken) => {
        if (err) {
          res.sendStatus(401);
        } else {
          next();
        }
      });
    }
  } else {
    res.sendStatus(401);
  }
};

module.exports = requireAuth;
