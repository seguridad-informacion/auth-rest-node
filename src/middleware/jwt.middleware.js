const jwt = require("jsonwebtoken");

async function verifyToken(req, res, next) {
  const token = req.headers["token"];

  if (!token) {
    return res.status(400).json({
      error: "Token must be sent",
    });
  }

  jwt.verify(token, "my-secret", (error) => {
    if (error) {
      return res.status(401).json({
        error: "Invalid token",
      });
    }
    next();
  });
}

module.exports = verifyToken;
